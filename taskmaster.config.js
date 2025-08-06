import { defineConfig } from 'taskmaster';

export default defineConfig({
  // Основные настройки
  name: 'CognitechAI Astro Migration',
  description: 'Migration from React to Astro for CognitechAI Landing Page',
  version: '1.0.0',
  framework: 'astro',
  
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
      description: 'Запуск сервера разработки (переключится на Astro после миграции)'
    },
    'astro:dev': {
      command: 'cd astro-migration && npm run dev',
      description: 'Запуск Astro сервера разработки'
    },
    build: {
      command: 'npm run build',
      description: 'Сборка проекта для продакшена'
    },
    'astro:build': {
      command: 'cd astro-migration && npm run build',
      description: 'Сборка Astro проекта'
    },
    preview: {
      command: 'npm run preview',
      description: 'Предпросмотр собранного проекта'
    },
    'astro:preview': {
      command: 'cd astro-migration && npm run preview',
      description: 'Предпросмотр Astro проекта'
    },
    lint: {
      command: 'npm run lint',
      description: 'Проверка кода линтером'
    },
    'taskmaster:start': {
      command: 'node tm.cjs start',
      description: 'Начать работу над задачей'
    },
    'taskmaster:status': {
      command: 'node tm.cjs status',
      description: 'Показать статус проекта'
    }
  },
  
  // Шаблоны для создания новых файлов
  templates: {
    // React компонент (для islands)
    'react-component': {
      path: './astro-migration/src/components/react',
      extension: '.tsx',
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

    // Astro компонент
    'astro-component': {
      path: './astro-migration/src/components',
      extension: '.astro',
      template: `---
// Component script (runs at build time)
export interface Props {
  // Add props here
}

const { /* props */ } = Astro.props;
---

<div>
  <!-- Component content -->
  <h2>{{name}}</h2>
</div>

<style>
  /* Component styles */
</style>`
    },

    // Astro страница
    'astro-page': {
      path: './astro-migration/src/pages',
      extension: '.astro',
      template: `---
// Page script (runs at build time)
import Layout from '../layouts/Layout.astro';
import BaseHead from '../components/BaseHead.astro';

const title = '{{name}}';
const description = 'Description for {{name}} page';
---

<Layout>
  <BaseHead title={title} description={description} slot="head" />
  
  <main>
    <h1>{{name}}</h1>
    <!-- Page content -->
  </main>
</Layout>

<style>
  /* Page styles */
</style>`
    },

    // API Route
    'api-route': {
      path: './astro-migration/src/pages/api',
      extension: '.ts',
      template: `import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
  try {
    // Handle GET request
    return new Response(JSON.stringify({ message: '{{name}} API endpoint' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const POST: APIRoute = async ({ params, request }) => {
  try {
    const data = await request.json();
    // Handle POST request
    return new Response(JSON.stringify({ message: 'Success', data }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};`
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
    generateIndexFiles: true,

    // Astro-специфичные настройки
    astroIntegrations: ['react', 'tailwind', 'sitemap'],
    buildOptimization: true,
    imageOptimization: true
  },
  
  // Настройки для мониторинга файлов
  watch: {
    patterns: ['src/**/*', 'astro-migration/src/**/*', 'public/**/*'],
    ignored: ['node_modules/**/*', 'dist/**/*', '.git/**/*', '**/astro-migration/dist/**/*']
  },

  // Конфигурация миграции
  migration: {
    sourceFramework: 'react',
    targetFramework: 'astro',
    sourceDir: './src',
    targetDir: './astro-migration/src',
    preserveReactComponents: ['LeadForm', 'BookDemo', 'CookieConsent', 'PricingSandbox'],
    convertToAstro: ['Hero', 'Footer', 'Navbar', 'ProblemStatement', 'Solution', 'Testimonials']
  }
});