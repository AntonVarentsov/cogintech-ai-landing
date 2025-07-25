# Инструкции по развертыванию

## Режимы работы

### Development (Разработка)
- **Команда**: `npm run dev`
- **URL**: `http://localhost:8080`
- **Особенности**:
  - Отключен кэш браузера
  - Включен режим отладки
  - Показывается индикатор режима разработки
  - HMR (Hot Module Replacement) включен

### Production (Продакшен)
- **Команда**: `npm run build:prod`
- **Особенности**:
  - Включен кэш браузера
  - Отключен режим отладки
  - Минификация кода
  - Оптимизация производительности

## Timeweb Автоматическое развертывание

### Как это работает
1. При пуше в GitHub, Timeweb автоматически:
   - Клонирует репозиторий
   - Устанавливает зависимости: `npm install`
   - Собирает проект: `npm run build`
   - Развертывает на сервере

### Настройка для Timeweb
Timeweb автоматически определит, что это продакшен, потому что:
- Используется команда `npm run build` (без флага `--mode development`)
- Переменная `NODE_ENV` автоматически устанавливается в `production`
- Vite автоматически оптимизирует код для продакшена

### Проверка режима
В коде можно проверить режим:
```typescript
import { isDevelopment, isProduction, mode } from '@/lib/env';

console.log('Development:', isDevelopment); // true в dev, false в prod
console.log('Production:', isProduction);   // false в dev, true в prod
console.log('Mode:', mode);                // 'development' или 'production'
```

## Локальная разработка

### Запуск в режиме разработки
```bash
npm run dev
```

### Сборка для продакшена (локально)
```bash
npm run build:prod
```

### Предварительный просмотр продакшена
```bash
npm run build:prod
npm run preview
```

## Переменные окружения

### Development
- `NODE_ENV=development`
- `VITE_MODE=development`
- `VITE_IS_DEVELOPMENT=true`

### Production
- `NODE_ENV=production`
- `VITE_MODE=production`
- `VITE_IS_PRODUCTION=true`

## Отличия режимов

| Функция | Development | Production |
|---------|-------------|------------|
| Кэш браузера | Отключен | Включен |
| Отладка | Включена | Отключена |
| Минификация | Нет | Да |
| Source maps | Да | Нет |
| HMR | Да | Нет |
| Индикатор режима | Показывается | Скрыт |

## Проверка режима в браузере

### Development
- В правом нижнем углу показывается желтый индикатор "🔧 Development Mode"
- В консоли браузера (F12) видны логи с информацией о режиме

### Production
- Индикатор режима скрыт
- Консоль чистая (без отладочных логов)
- Код минифицирован и оптимизирован 