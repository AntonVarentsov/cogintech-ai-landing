# Taskmaster Configuration

Taskmaster инициализирован для проекта CognitechAI Landing Page.

## Установка и настройка

Taskmaster уже установлен и настроен в проекте. Конфигурационные файлы:

- `taskmaster.config.js` - основная конфигурация
- `src/lib/taskmaster.ts` - TypeScript интеграция

## Доступные команды

### NPM скрипты
```bash
# Запуск Taskmaster
npm run taskmaster

# Инициализация Taskmaster
npm run taskmaster:init

# Генерация компонентов/страниц
npm run taskmaster:generate

# Отслеживание изменений файлов
npm run taskmaster:watch
```

### Основные задачи проекта
```bash
# Разработка
npm run dev

# Сборка
npm run build
npm run build:dev
npm run build:prod

# Предпросмотр
npm run preview

# Линтинг
npm run lint
```

## Шаблоны для генерации

### Создание компонента
```bash
npm run taskmaster:generate -- --type component --name MyComponent
```

### Создание страницы
```bash
npm run taskmaster:generate -- --type page --name MyPage
```

### Создание хука
```bash
npm run taskmaster:generate -- --type hook --name MyHook
```

## Структура проекта

```
src/
├── components/     # React компоненты
├── pages/         # Страницы приложения
├── hooks/         # Пользовательские хуки
├── lib/           # Утилиты и библиотеки
└── integrations/  # Интеграции (Supabase и др.)
```

## Автоматизация

Taskmaster настроен для:
- Автоматического форматирования кода
- Запуска линтера при изменениях
- Генерации индексных файлов
- Отслеживания изменений в файлах

## Интеграция с TypeScript

Используйте импорт из `src/lib/taskmaster.ts`:

```typescript
import { taskmaster, createComponent, createPage } from '@/lib/taskmaster';

// Создание компонента программно
await createComponent('MyNewComponent');

// Создание страницы программно
await createPage('MyNewPage');
```

## Мониторинг файлов

Taskmaster отслеживает изменения в:
- `src/**/*` - исходный код
- `public/**/*` - статические файлы

Игнорирует:
- `node_modules/**/*`
- `dist/**/*`
- `.git/**/*`