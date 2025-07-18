# Настройка кэширования для Timeweb

## Проблема
PageSpeed Insights не видит кэширование на продакшн сервере Timeweb.

## Решение

### 1. Проверьте настройки хостинга
- Войдите в панель управления Timeweb
- Убедитесь, что включена поддержка .htaccess файлов
- Проверьте, что включен модуль mod_headers

### 2. Загрузите правильные файлы
Убедитесь, что в корневой папке сайта находятся:
- `.htaccess` - для Apache серверов
- `nginx-timeweb.conf` - для Nginx серверов (если используется)

### 3. Проверьте структуру файлов
После деплоя в папке `/dist` должны быть:
```
dist/
├── .htaccess
├── _headers
├── index.html
├── assets/
│   ├── index.Byq2sqRR.css
│   ├── index-BDVbZ2hi.js
│   └── ...
└── lovable-uploads/
    ├── file_to_dashboard.mp4
    ├── dashboard.png
    └── ...
```

### 4. Тестирование кэширования
1. Зайдите на `your-domain.com/test-cache.html`
2. Откройте Developer Tools (F12)
3. Перейдите на вкладку Network
4. Обновите страницу
5. Проверьте заголовки для статических файлов

### 5. Ожидаемые заголовки
Статические файлы должны иметь:
```
Cache-Control: public, max-age=31536000, immutable
```

### 6. Если кэширование не работает

#### Для Apache (.htaccess):
1. Убедитесь, что файл `.htaccess` находится в корне сайта
2. Проверьте права доступа (644)
3. Обратитесь в техподдержку Timeweb

#### Для Nginx:
1. Предоставьте файл `nginx-timeweb.conf` администратору сервера
2. Попросите включить эту конфигурацию

### 7. Альтернативное решение
Если .htaccess не работает, попросите техподдержку Timeweb:
1. Включить кэширование для статических файлов
2. Установить заголовки Cache-Control
3. Настроить сжатие (gzip)

### 8. Проверка после настройки
После настройки кэширования:
1. Очистите кэш браузера
2. Запустите PageSpeed Insights заново
3. Проверьте раздел "Кэширование" в отчете

## Контакты техподдержки
Если ничего не помогает, обратитесь в техподдержку Timeweb с просьбой:
- Включить поддержку .htaccess
- Включить модуль mod_headers
- Настроить кэширование для статических файлов 