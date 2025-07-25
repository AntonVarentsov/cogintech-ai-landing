# Инструкции по очистке кэша браузера

## Проблема
Сайт работает в режиме инкогнито, но показывает белый экран в обычном режиме браузера.

## Решение

### 1. Очистка кэша браузера

#### Chrome/Edge:
1. Откройте DevTools (F12)
2. Щелкните правой кнопкой мыши по кнопке обновления
3. Выберите "Очистить кэш и жесткое обновление" (Empty Cache and Hard Reload)
4. Или используйте Ctrl+Shift+R

#### Firefox:
1. Нажмите Ctrl+Shift+Delete
2. Выберите "Все" в диапазоне времени
3. Отметьте "Кэш" и "Куки"
4. Нажмите "Удалить сейчас"

#### Safari:
1. Нажмите Cmd+Option+E (Mac)
2. Или перейдите в Safari > Preferences > Advanced > Show Develop menu
3. Затем Develop > Empty Caches

### 2. Альтернативные решения

#### Вариант 1: Принудительное обновление
- Chrome/Edge: Ctrl+Shift+R
- Firefox: Ctrl+F5
- Safari: Cmd+Option+R

#### Вариант 2: Очистка через DevTools
1. Откройте DevTools (F12)
2. Перейдите на вкладку Network
3. Поставьте галочку "Disable cache"
4. Обновите страницу

#### Вариант 3: Очистка через настройки браузера
1. Откройте настройки браузера
2. Найдите раздел "Очистить данные просмотра"
3. Выберите "Кэшированные изображения и файлы"
4. Нажмите "Очистить данные"

### 3. Проверка работы
После очистки кэша:
1. Откройте http://localhost:8080
2. Сайт должен загружаться без белого экрана
3. Проверьте консоль (F12) на наличие ошибок

### 4. Если проблема остается
1. Попробуйте другой браузер
2. Проверьте, что сервер запущен: `npm run dev`
3. Убедитесь, что порт 8080 свободен
4. Проверьте файрвол и антивирус 