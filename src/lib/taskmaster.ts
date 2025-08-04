import { Taskmaster } from 'taskmaster';
import { AstroAgent } from './agents/astro-agent';

// Инициализация Taskmaster
export const taskmaster = new Taskmaster({
  projectName: 'CognitechAI Landing',
  
  // Конфигурация для React проекта
  framework: 'react',
  typescript: true,
  
  // Пути к важным директориям
  paths: {
    components: './src/components',
    pages: './src/pages',
    hooks: './src/hooks',
    utils: './src/lib',
    assets: './public'
  },
  
  // Настройки для автоматизации разработки
  development: {
    hotReload: true,
    autoImport: true,
    componentGeneration: true
  },
  
  // Настройки для сборки
  build: {
    optimization: true,
    bundleAnalysis: true,
    errorReporting: true
  }
});

// Инициализация агентов
export const astroAgent = new AstroAgent(taskmaster);

// Экспорт основных функций Taskmaster
export const {
  createComponent,
  createPage,
  createHook,
  runTask,
  watchFiles,
  generateIndex
} = taskmaster;

// Инициализация при загрузке модуля
if (typeof window !== 'undefined') {
  taskmaster.init();
}

export default taskmaster;