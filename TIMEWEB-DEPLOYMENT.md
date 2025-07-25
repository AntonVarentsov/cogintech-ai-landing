# Инструкции для Timeweb

## Автоматическое развертывание

### Что происходит при пуше в GitHub:
1. **Клонирование**: Timeweb клонирует репозиторий
2. **Установка зависимостей**: `npm install`
3. **Сборка**: `npm run build` (автоматически в production режиме)
4. **Развертывание**: Файлы из папки `dist/` копируются на сервер

### Почему Timeweb знает, что это продакшен:

#### 1. **Команда сборки**
```bash
npm run build  # Без флага --mode development
```
- Vite автоматически определяет это как production режим
- `NODE_ENV` автоматически устанавливается в `production`

#### 2. **Переменные окружения**
- `NODE_ENV=production`
- `VITE_MODE=production`
- `VITE_IS_PRODUCTION=true`

#### 3. **Оптимизации продакшена**
- Код минифицирован
- Кэш браузера включен
- Отладочные логи отключены
- Source maps отключены

## Проверка режима

### В коде:
```typescript
import { isDevelopment, isProduction, mode } from '@/lib/env';

// В продакшене:
console.log(isDevelopment); // false
console.log(isProduction);  // true
console.log(mode);          // 'production'
```

### В браузере:
- **Development**: Желтый индикатор "🔧 Development Mode" в правом нижнем углу
- **Production**: Индикатор скрыт, консоль чистая

## Структура файлов для развертывания

```
dist/
├── index.html          # Главная страница
├── assets/             # Оптимизированные ресурсы
│   ├── index-*.js      # Основной JavaScript
│   ├── vendor-*.js     # Внешние библиотеки
│   ├── ui-*.js         # UI компоненты
│   └── index-*.css     # Стили
├── lovable-uploads/    # Загруженные файлы
└── [другие статические файлы]
```

## Настройки сервера

### Nginx (если используется):
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Apache (.htaccess):
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Мониторинг

### Логи сборки:
- Проверяйте логи в панели Timeweb
- Убедитесь, что команда `npm run build` выполняется успешно

### Проверка развертывания:
1. Откройте сайт в браузере
2. Убедитесь, что индикатор разработки НЕ показывается
3. Проверьте консоль (F12) - отладочные логи должны отсутствовать
4. Проверьте размер файлов - они должны быть минифицированы

## Troubleshooting

### Если сайт не загружается:
1. Проверьте логи сборки в Timeweb
2. Убедитесь, что все зависимости установлены
3. Проверьте, что команда `npm run build` выполняется без ошибок

### Если показывается индикатор разработки:
1. Убедитесь, что используется команда `npm run build` (не `npm run build:dev`)
2. Проверьте, что `NODE_ENV=production`

### Если кэш не работает:
1. Проверьте настройки сервера
2. Убедитесь, что заголовки кэширования включены в продакшене 