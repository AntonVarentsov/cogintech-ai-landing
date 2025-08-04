#!/usr/bin/env node

/**
 * TaskMaster AI CLI для управления задачами проекта
 */

const fs = require('fs');
const path = require('path');

class TaskMasterAI {
  constructor() {
    this.configFile = path.join(process.cwd(), 'taskmaster.json');
    this.config = this.loadConfig();
  }

  loadConfig() {
    if (!fs.existsSync(this.configFile)) {
      console.log('❌ TaskMaster не инициализирован. Запустите: node tm.js init');
      process.exit(1);
    }
    return JSON.parse(fs.readFileSync(this.configFile, 'utf8'));
  }

  saveConfig() {
    fs.writeFileSync(this.configFile, JSON.stringify(this.config, null, 2));
  }

  init() {
    console.log('🚀 TaskMaster AI успешно инициализирован!');
    console.log(`📋 Проект: ${this.config.project.name}`);
    console.log(`📊 Всего задач: ${this.config.tasks.length}`);
    console.log(`⏱️  Общее время: ${this.getTotalHours()}ч`);
    this.showStatus();
  }

  list() {
    console.log(`📋 ${this.config.project.name}`);
    console.log('=' .repeat(60));
    
    const statusGroups = this.groupTasksByStatus();
    
    Object.entries(statusGroups).forEach(([status, tasks]) => {
      if (tasks.length === 0) return;
      
      const statusEmoji = {
        'todo': '⏳ TO DO',
        'in-progress': '🚀 IN PROGRESS', 
        'review': '👀 REVIEW',
        'done': '✅ DONE'
      };

      console.log(`\n${statusEmoji[status] || status.toUpperCase()} (${tasks.length})`);
      console.log('-'.repeat(40));
      
      tasks.forEach((task, index) => {
        const priorityEmoji = {
          'critical': '🔥',
          'high': '⚡',
          'medium': '📝',
          'low': '💤'
        };

        console.log(`${index + 1}. ${priorityEmoji[task.priority] || '📝'} ${task.title}`);
        console.log(`   ${task.description}`);
        console.log(`   ⏰ ${task.estimatedHours}ч | 📅 ${task.dueDate} | 👤 ${task.assignee}`);
        console.log(`   🏷️  ${task.tags.join(', ')}`);
        console.log('');
      });
    });
  }

  status() {
    this.showStatus();
  }

  showStatus() {
    const stats = this.getProjectStats();
    
    console.log('\n📊 СТАТИСТИКА ПРОЕКТА');
    console.log('=' .repeat(30));
    console.log(`⏳ Todo: ${stats.todo}`);
    console.log(`🚀 In Progress: ${stats['in-progress']}`);
    console.log(`👀 Review: ${stats.review}`);
    console.log(`✅ Done: ${stats.done}`);
    console.log(`📈 Прогресс: ${Math.round(stats.done / stats.total * 100)}%`);
    console.log(`⏱️  Всего времени: ${stats.totalHours}ч`);
    console.log(`⏱️  Осталось: ${stats.remainingHours}ч`);
  }

  start(taskId) {
    const task = this.findTask(taskId);
    if (!task) {
      console.log('❌ Задача не найдена');
      return;
    }

    if (task.status === 'in-progress') {
      console.log('⚠️  Задача уже в работе');
      return;
    }

    task.status = 'in-progress';
    task.startedAt = new Date().toISOString();
    this.saveConfig();
    
    console.log(`🚀 Задача "${task.title}" начата`);
    console.log(`⏰ Планируемое время: ${task.estimatedHours}ч`);
    console.log(`📅 Дедлайн: ${task.dueDate}`);
  }

  complete(taskId) {
    const task = this.findTask(taskId);
    if (!task) {
      console.log('❌ Задача не найдена');
      return;
    }

    task.status = 'done';
    task.completedAt = new Date().toISOString();
    this.saveConfig();
    
    console.log(`✅ Задача "${task.title}" завершена!`);
    this.showProgress();
  }

  show(taskId) {
    const task = this.findTask(taskId);
    if (!task) {
      console.log('❌ Задача не найдена');
      return;
    }

    console.log(`\n📋 ${task.title}`);
    console.log('=' .repeat(50));
    console.log(`📝 ${task.description}`);
    console.log(`🎯 Статус: ${task.status}`);
    console.log(`⚡ Приоритет: ${task.priority}`);
    console.log(`👤 Исполнитель: ${task.assignee}`);
    console.log(`⏰ Время: ${task.estimatedHours}ч`);
    console.log(`📅 Дедлайн: ${task.dueDate}`);
    console.log(`🏷️  Теги: ${task.tags.join(', ')}`);
    
    if (task.subtasks && task.subtasks.length > 0) {
      console.log('\n📝 Подзадачи:');
      task.subtasks.forEach((subtask, index) => {
        console.log(`  ${index + 1}. ${subtask}`);
      });
    }
  }

  findTask(taskId) {
    // Поиск по ID
    let task = this.config.tasks.find(t => t.id === taskId);
    if (task) return task;
    
    // Поиск по номеру
    const taskNumber = parseInt(taskId);
    if (!isNaN(taskNumber) && taskNumber > 0 && taskNumber <= this.config.tasks.length) {
      return this.config.tasks[taskNumber - 1];
    }
    
    // Поиск по названию
    return this.config.tasks.find(t => 
      t.title.toLowerCase().includes(taskId.toLowerCase())
    );
  }

  groupTasksByStatus() {
    const groups = { todo: [], 'in-progress': [], review: [], done: [] };
    this.config.tasks.forEach(task => {
      if (groups[task.status]) {
        groups[task.status].push(task);
      }
    });
    return groups;
  }

  getProjectStats() {
    const stats = { todo: 0, 'in-progress': 0, review: 0, done: 0, total: 0, totalHours: 0, remainingHours: 0 };
    
    this.config.tasks.forEach(task => {
      stats[task.status] = (stats[task.status] || 0) + 1;
      stats.total++;
      stats.totalHours += task.estimatedHours;
      if (task.status !== 'done') {
        stats.remainingHours += task.estimatedHours;
      }
    });
    
    return stats;
  }

  getTotalHours() {
    return this.config.tasks.reduce((total, task) => total + task.estimatedHours, 0);
  }

  showProgress() {
    const stats = this.getProjectStats();
    const progress = Math.round(stats.done / stats.total * 100);
    const progressBar = '█'.repeat(Math.floor(progress / 5)) + '░'.repeat(20 - Math.floor(progress / 5));
    
    console.log(`\n📈 ПРОГРЕСС: ${progress}%`);
    console.log(`[${progressBar}] ${stats.done}/${stats.total}`);
  }
}

// CLI интерфейс
const args = process.argv.slice(2);
const command = args[0];
const tm = new TaskMasterAI();

switch (command) {
  case 'init':
    tm.init();
    break;
  
  case 'list':
  case 'ls':
    tm.list();
    break;
  
  case 'status':
    tm.status();
    break;
  
  case 'start':
    const startTaskId = args[1];
    if (!startTaskId) {
      console.log('❌ Укажите ID или номер задачи');
      console.log('Пример: node tm.js start astro-setup-1');
    } else {
      tm.start(startTaskId);
    }
    break;
  
  case 'complete':
    const completeTaskId = args[1];
    if (!completeTaskId) {
      console.log('❌ Укажите ID или номер задачи');
      console.log('Пример: node tm.js complete astro-setup-1');
    } else {
      tm.complete(completeTaskId);
    }
    break;
  
  case 'show':
    const showTaskId = args[1];
    if (!showTaskId) {
      console.log('❌ Укажите ID или номер задачи');
      console.log('Пример: node tm.js show astro-setup-1');
    } else {
      tm.show(showTaskId);
    }
    break;
  
  default:
    console.log('🤖 TaskMaster AI - Управление задачами проекта');
    console.log('');
    console.log('Команды:');
    console.log('  init                    - показать статус проекта');
    console.log('  list, ls               - список всех задач');
    console.log('  status                 - статистика проекта');
    console.log('  start <task-id>        - начать задачу');
    console.log('  complete <task-id>     - завершить задачу');
    console.log('  show <task-id>         - показать детали задачи');
    console.log('');
    console.log('Примеры:');
    console.log('  node tm.js list');
    console.log('  node tm.js start 1');
    console.log('  node tm.js complete astro-setup-1');
}