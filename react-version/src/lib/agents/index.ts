// Экспорт всех агентов
export { AstroAgent } from './astro-agent';

// Типы для агентов
export interface Agent {
  name: string;
  description: string;
  capabilities: string[];
}

// Реестр доступных агентов
export const AVAILABLE_AGENTS = {
  astro: {
    name: 'Astro Agent',
    description: 'Специалист по фреймворку Astro для создания быстрых статических сайтов',
    capabilities: [
      'Создание компонентов Astro',
      'Настройка лейаутов',
      'Оптимизация производительности',
      'SEO оптимизация',
      'Создание API роутов',
      'Настройка интеграций',
      'Диагностика проекта'
    ]
  }
} as const;