# Миграция layout компонентов

**Статус:** todo  
**Приоритет:** critical  
**Назначен:** developer  
**Срок:** 2025-08-15  
**Теги:** layout, navigation, migration  
**Время:** 12ч  

## Описание
Миграция основных layout компонентов: Navbar, Footer и других структурных элементов. Эти компоненты являются основой всех страниц проекта.

## Этап 1: Анализ и подготовка (1ч)

### 1.1 Анализ существующих компонентов (0.5ч)
- [ ] **Изучить структуру Navbar.tsx**
  - Проанализировать логику навигации
  - Выявить интерактивные элементы (мобильное меню, dropdown)
  - Определить какие части можно сделать статическими
- [ ] **Изучить структуру Footer.tsx**
  - Проанализировать структуру ссылок
  - Определить статические и динамические элементы
  - Проверить социальные ссылки и контакты

### 1.2 Планирование архитектуры (0.5ч)
- [ ] **Определить стратегию разделения**
  - Статические части → .astro компоненты
  - Интерактивные части → React islands
  - Общие данные → JSON или конфигурационные файлы
- [ ] **Создать план интеграции с Astro роутингом**
  - Маппинг существующих роутов на файловую структуру Astro
  - Определение активных ссылок в навигации

## Этап 2: Миграция Header/Navbar (4ч)

### 2.1 Базовая структура Navbar (1.5ч)
- [ ] **Navbar.astro** - Статическая версия навигации
  - Конвертировать основную структуру из React в Astro
  - Настроить responsive дизайн через CSS
  - Добавить поддержку активных ссылок через Astro.url
  - Интегрировать с BaseHead для мета-данных
  
```astro
---
// Navbar.astro
const currentPath = Astro.url.pathname;
const navItems = [
  { href: '/', label: 'Главная' },
  { href: '/about-us', label: 'О нас' },
  { href: '/contact', label: 'Контакты' }
];
---
```

### 2.2 Мобильное меню как React Island (1.5ч)
- [ ] **MobileMenu.tsx** - Интерактивное мобильное меню
  - Создать React компонент с состоянием открытия/закрытия
  - Добавить анимации появления/исчезновения
  - Настроить client:load или client:media для оптимизации
  - Интегрировать с основным Navbar

```tsx
// MobileMenu.tsx
interface MobileMenuProps {
  navItems: Array<{href: string, label: string}>;
  currentPath: string;
}
```

### 2.3 Интеграция и оптимизация (1ч)
- [ ] **Интеграция компонентов**
  - Связать Navbar.astro с MobileMenu.tsx
  - Настроить правильную стратегию загрузки (client:media="(max-width: 768px)")
  - Добавить fallback для случаев отключенного JavaScript
- [ ] **Оптимизация производительности**
  - Минимизировать JavaScript нагрузку
  - Настроить prefetch для внутренних ссылок
  - Оптимизировать CSS для critical path

## Этап 3: Миграция Footer (2ч)

### 3.1 Основная структура Footer (1ч)
- [ ] **Footer.astro** - Статический футер
  - Конвертировать структуру из React в Astro
  - Организовать ссылки по категориям (Продукт, Компания, Поддержка)
  - Добавить социальные ссылки и контактную информацию
  - Настроить responsive сетку

```astro
---
// Footer.astro
const footerData = {
  company: {
    name: 'CognitechAI',
    description: 'Революционная платформа искусственного интеллекта',
    links: [
      { href: '/about-us', label: 'О нас' },
      { href: '/careers', label: 'Карьера' },
      { href: '/news', label: 'Новости' }
    ]
  },
  // ...
};
---
```

### 3.2 Динамические элементы (1ч)
- [ ] **Newsletter подписка**
  - Создать форму подписки как React island
  - Добавить валидацию email
  - Интегрировать с API роутом для обработки
- [ ] **Социальные ссылки**  
  - Добавить иконки социальных сетей
  - Настроить внешние ссылки с правильными атрибутами (rel="noopener noreferrer")

## Этап 4: SEO и мета-данные (2ч)

### 4.1 Миграция SEOHead → BaseHead (1ч)
- [ ] **Анализ текущего SEOHead.tsx**
  - Выявить все используемые мета-теги
  - Проанализировать structured data (JSON-LD)
  - Определить динамические и статические данные
- [ ] **Расширение BaseHead.astro**
  - Добавить недостающие мета-теги из SEOHead
  - Улучшить поддержку Open Graph и Twitter Cards
  - Добавить canonical URLs для всех страниц

### 4.2 Структурированные данные и схема (1ч)
- [ ] **JSON-LD схемы**
  - Добавить Organization schema для компании
  - Создать WebSite schema с поиском
  - Добавить BreadcrumbList для навигации
- [ ] **Расширенная SEO оптимизация**
  - Настроить hreflang для мультиязычности (если нужно)
  - Добавить мета-теги для социальных сетей
  - Оптимизировать заголовки и описания

## Этап 5: Адаптивность и доступность (2ч)

### 5.1 Responsive дизайн (1ч)
- [ ] **Мобильная оптимизация**
  - Протестировать навигацию на мобильных устройствах
  - Настроить правильные breakpoints
  - Оптимизировать touch targets (минимум 44px)
- [ ] **Кроссбраузерность**
  - Протестировать в Chrome, Firefox, Safari
  - Проверить поддержку старых браузеров
  - Добавить fallbacks для CSS Grid/Flexbox

### 5.2 Доступность (A11y) (1ч)
- [ ] **Семантическая разметка**
  - Использовать правильные HTML5 теги (nav, header, footer, main)
  - Добавить ARIA labels для интерактивных элементов
  - Настроить правильную иерархию заголовков
- [ ] **Клавиатурная навигация**
  - Обеспечить доступ ко всем элементам с клавиатуры
  - Настроить правильный порядок табуляции
  - Добавить видимый focus indicator

## Этап 6: Интеграция и тестирование (1ч)

### 6.1 Интеграция с существующими лейаутами (0.5ч)
- [ ] **Обновление лейаутов**
  - Интегрировать новые Navbar и Footer в BaseLayout.astro
  - Обновить MainLayout.astro и LandingLayout.astro
  - Проверить совместимость со всеми существующими страницами

### 6.2 Финальное тестирование (0.5ч)
- [ ] **Функциональное тестирование**
  - Проверить работу всех ссылок навигации
  - Протестировать мобильное меню
  - Проверить формы в футере
- [ ] **Performance тестирование**
  - Измерить влияние на Core Web Vitals
  - Проверить размер бандла JavaScript
  - Оптимизировать загрузку критических стилей

## Команды для выполнения

### Создание компонентов
```bash
# Создание Navbar
mkdir -p astro-migration/src/components/layout
touch astro-migration/src/components/layout/Navbar.astro
touch astro-migration/src/components/react-islands/MobileMenu.tsx

# Создание Footer
touch astro-migration/src/components/layout/Footer.astro
touch astro-migration/src/components/react-islands/NewsletterSignup.tsx

# Копирование исходных файлов для анализа
cp src/components/Navbar.tsx astro-migration/src/components/layout/Navbar.original.tsx
cp src/components/Footer.tsx astro-migration/src/components/layout/Footer.original.tsx
```

### Тестирование
```bash
# Запуск dev сервера для тестирования
cd astro-migration && npm run dev

# Тестирование сборки
cd astro-migration && npm run build

# Проверка доступности
npx @axe-core/cli http://localhost:4321
```

## Критерии готовности

### Функциональность
- [ ] ✅ Navbar отображается корректно на всех страницах
- [ ] ✅ Мобильное меню работает без ошибок
- [ ] ✅ Footer содержит все необходимые ссылки и информацию
- [ ] ✅ Активные ссылки подсвечиваются правильно
- [ ] ✅ Все внешние ссылки открываются в новых вкладках

### SEO и мета-данные
- [ ] ✅ BaseHead содержит все необходимые мета-теги
- [ ] ✅ Structured data корректно настроены
- [ ] ✅ Canonical URLs работают на всех страницах
- [ ] ✅ Open Graph и Twitter Cards настроены

### Производительность
- [ ] ✅ Lighthouse Performance Score > 90
- [ ] ✅ First Contentful Paint < 1.5s
- [ ] ✅ Largest Contentful Paint < 2.5s
- [ ] ✅ Cumulative Layout Shift < 0.1

### Доступность
- [ ] ✅ Lighthouse Accessibility Score > 95
- [ ] ✅ Все интерактивные элементы доступны с клавиатуры
- [ ] ✅ Правильная семантическая разметка
- [ ] ✅ ARIA labels настроены корректно

### Совместимость
- [ ] ✅ Корректная работа в Chrome, Firefox, Safari
- [ ] ✅ Мобильная версия работает на iOS и Android
- [ ] ✅ Responsive дизайн на всех breakpoints
- [ ] ✅ Fallbacks для отключенного JavaScript

## Файловая структура после миграции

```
astro-migration/src/
├── components/
│   ├── layout/
│   │   ├── Navbar.astro           # Статическая навигация
│   │   ├── Footer.astro           # Статический футер
│   │   └── Breadcrumbs.astro      # Хлебные крошки
│   ├── react-islands/
│   │   ├── MobileMenu.tsx         # Мобильное меню
│   │   ├── NewsletterSignup.tsx   # Подписка на новости
│   │   └── ThemeToggle.tsx        # Переключатель темы
│   └── BaseHead.astro             # Расширенный компонент мета-данных
├── layouts/
│   ├── BaseLayout.astro           # Базовый лейаут с навигацией
│   ├── MainLayout.astro           # Лейаут для обычных страниц
│   └── LandingLayout.astro        # Лейаут для лендинга
└── data/
    ├── navigation.json            # Конфигурация навигации
    └── footer.json                # Данные для футера
```