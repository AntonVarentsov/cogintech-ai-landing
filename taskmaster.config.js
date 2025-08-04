import { defineConfig } from 'taskmaster';

export default defineConfig({
  // Основные настройки
  name: 'CognitechAI Landing',
  description: 'Landing page for Cognitech AI platform',
  
  // Пути к файлам проекта
  paths: {
    src: './src',
    components: './src/components',
    pages: './src/pages',
    hooks: './src/hooks',
    lib: './src/lib',
    public: './public'
  },
  
  // Задачи для разработки
  tasks: {
    dev: {
      command: 'npm run dev',
      description: 'Запуск сервера разработки'
    },
    build: {
      command: 'npm run build',
      description: 'Сборка проекта для продакшена'
    },
    'build:dev': {
      command: 'npm run build:dev',
      description: 'Сборка проекта для разработки'
    },
    'build:prod': {
      command: 'npm run build:prod',
      description: 'Сборка проекта для продакшена'
    },
    preview: {
      command: 'npm run preview',
      description: 'Предпросмотр собранного проекта'
    },
    lint: {
      command: 'npm run lint',
      description: 'Проверка кода линтером'
    }
  },
  
  // Шаблоны для создания новых файлов
  templates: {
    component: {
      path: './src/components',
      template: `import React from 'react';

interface {{name}}Props {
  // Add props here
}

export const {{name}}: React.FC<{{name}}Props> = (props) => {
  return (
    <div>
      {/* Component content */}
    </div>
  );
};

export default {{name}};`
    },
    
    page: {
      path: './src/pages',
      template: `import React from 'react';

const {{name}}: React.FC = () => {
  return (
    <div>
      <h1>{{name}} Page</h1>
      {/* Page content */}
    </div>
  );
};

export default {{name}};`
    },
    
    hook: {
      path: './src/hooks',
      template: `import { useState, useEffect } from 'react';

export const use{{name}} = () => {
  // Hook logic here
  
  return {
    // Return hook values
  };
};`
    }
  },
  
  // Настройки для автоматизации
  automation: {
    // Автоматическое форматирование при сохранении
    formatOnSave: true,
    
    // Автоматический запуск линтера
    lintOnChange: true,
    
    // Автоматическая генерация индексных файлов
    generateIndexFiles: true
  },
  
  // Настройки для мониторинга файлов
  watch: {
    patterns: ['src/**/*', 'public/**/*'],
    ignored: ['node_modules/**/*', 'dist/**/*', '.git/**/*']
  }
});