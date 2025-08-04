#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class TaskMaster {
  constructor() {
    this.tasksDir = path.join(process.cwd(), 'tasks');
    this.configFile = path.join(process.cwd(), '.taskmaster', 'config.json');
    this.init();
  }

  init() {
    // Создаем директории если их нет
    if (!fs.existsSync(this.tasksDir)) {
      fs.mkdirSync(this.tasksDir, { recursive: true });
    }
    
    const configDir = path.dirname(this.configFile);
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }

    // Создаем конфиг если его нет
    if (!fs.existsSync(this.configFile)) {
      const defaultConfig = {
        name: "TaskMaster Project",
        version: "1.0.0",
        settings: {
          tasksDirectory: "tasks",
          defaultPriority: "medium",
          columns: ["todo", "in-progress", "review", "done"]
        }
      };
      fs.writeFileSync(this.configFile, JSON.stringify(defaultConfig, null, 2));
    }
  }

  listTasks() {
    console.log('📋 TaskMaster - Список задач');
    console.log('=' .repeat(50));
    
    if (!fs.existsSync(this.tasksDir)) {
      console.log('❌ Папка с задачами не найдена');
      return;
    }

    const tasks = fs.readdirSync(this.tasksDir)
      .filter(file => file.endsWith('.md'))
      .sort();

    if (tasks.length === 0) {
      console.log('📝 Задач пока нет');
      return;
    }

    tasks.forEach((task, index) => {
      const taskPath = path.join(this.tasksDir, task);
      const content = fs.readFileSync(taskPath, 'utf8');
      
      // Извлекаем информацию из markdown
      const titleMatch = content.match(/^# (.+)$/m);
      const statusMatch = content.match(/\*\*Статус:\*\* (.+)$/m);
      const priorityMatch = content.match(/\*\*Приоритет:\*\* (.+)$/m);
      
      const title = titleMatch ? titleMatch[1] : task.replace('.md', '');
      const status = statusMatch ? statusMatch[1] : 'неизвестно';
      const priority = priorityMatch ? priorityMatch[1] : 'medium';
      
      const statusEmoji = {
        'todo': '⏳',
        'in-progress': '🚀', 
        'review': '👀',
        'done': '✅'
      };

      const priorityEmoji = {
        'critical': '🔥',
        'high': '⚡',
        'medium': '📝',
        'low': '💤'
      };

      console.log(`${index + 1}. ${statusEmoji[status] || '❓'} ${priorityEmoji[priority] || '📝'} ${title}`);
      console.log(`   Статус: ${status} | Приоритет: ${priority}`);
      console.log('');
    });
  }

  createTask(name) {
    const filename = `${Date.now()}-${name.toLowerCase().replace(/\s+/g, '-')}.md`;
    const filepath = path.join(this.tasksDir, filename);
    
    const template = `# ${name}

**Статус:** todo  
**Приоритет:** medium  
**Назначен:** developer  
**Срок:** ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}  
**Теги:** task  
**Время:** 2ч  

## Описание
Описание задачи...

## Подзадачи
- [ ] Подзадача 1
- [ ] Подзадача 2

## Критерии готовности
- [ ] Критерий 1
- [ ] Критерий 2
`;

    fs.writeFileSync(filepath, template);
    console.log(`✅ Задача создана: ${filename}`);
  }

  updateTaskStatus(taskNumber, newStatus) {
    const tasks = fs.readdirSync(this.tasksDir)
      .filter(file => file.endsWith('.md'))
      .sort();
    
    if (taskNumber < 1 || taskNumber > tasks.length) {
      console.log('❌ Неверный номер задачи');
      return;
    }

    const taskFile = tasks[taskNumber - 1];
    const taskPath = path.join(this.tasksDir, taskFile);
    let content = fs.readFileSync(taskPath, 'utf8');
    
    content = content.replace(
      /\*\*Статус:\*\* .+$/m,
      `**Статус:** ${newStatus}`
    );
    
    fs.writeFileSync(taskPath, content);
    console.log(`✅ Статус задачи "${taskFile}" изменен на "${newStatus}"`);
  }
}

// CLI интерфейс
const args = process.argv.slice(2);
const command = args[0];
const taskmaster = new TaskMaster();

switch (command) {
  case 'list':
  case 'ls':
    taskmaster.listTasks();
    break;
  
  case 'create':
    const taskName = args.slice(1).join(' ');
    if (!taskName) {
      console.log('❌ Укажите название задачи');
      console.log('Пример: node taskmaster-cli.js create "Новая задача"');
    } else {
      taskmaster.createTask(taskName);
    }
    break;
  
  case 'status':
    const taskNum = parseInt(args[1]);
    const status = args[2];
    if (!taskNum || !status) {
      console.log('❌ Укажите номер задачи и новый статус');
      console.log('Пример: node taskmaster-cli.js status 1 in-progress');
    } else {
      taskmaster.updateTaskStatus(taskNum, status);
    }
    break;
  
  case 'init':
    console.log('✅ TaskMaster инициализирован');
    break;
  
  default:
    console.log('📋 TaskMaster CLI');
    console.log('');
    console.log('Команды:');
    console.log('  init                    - инициализация');
    console.log('  list, ls               - список задач');
    console.log('  create "название"      - создать задачу');
    console.log('  status <номер> <статус> - изменить статус');
    console.log('');
    console.log('Статусы: todo, in-progress, review, done');
}