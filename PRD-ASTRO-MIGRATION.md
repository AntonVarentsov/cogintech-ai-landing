# PRD: Миграция CognitechAI Landing с React на Astro

## 📋 Обзор проекта

**Цель**: Миграция лендинговой страницы CognitechAI с React/Vite на фреймворк Astro для улучшения производительности, SEO и снижения JavaScript-нагрузки.

**Статус**: В планировании
**Приоритет**: Высокий
**Временные рамки**: 3-4 недели

## 🎯 Бизнес-цели

### Основные цели
- **Производительность**: Снижение времени загрузки на 40-60%
- **SEO**: Улучшение индексации и ранжирования в поисковых системах
- **Core Web Vitals**: Достижение показателей "Good" по всем метрикам
- **Кэширование**: Оптимальное кэширование статических ресурсов

### Ключевые метрики успеха
- **LCP (Largest Contentful Paint)**: < 1.2s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **JavaScript Bundle Size**: Уменьшение на 70-80%
- **SEO Score**: Lighthouse > 95

## 🏗️ Анализ текущей архитектуры

### Структура React-проекта
```
src/
├── components/          # 12 основных компонентов
│   ├── new-landing/     # 10 компонентов нового лендинга
│   └── ui/             # 40+ UI компонентов (shadcn/ui)
├── pages/              # 15 страниц
├── hooks/              # 4 кастомных хука
├── integrations/       # Supabase интеграция
└── lib/               # Утилиты и агенты
```

### Зависимости для миграции
- **React Router** → Astro file-based routing
- **TanStack Query** → Astro API routes + fetch
- **Radix UI** → Совместимые Astro компоненты
- **Tailwind CSS** → Полная совместимость
- **Supabase** → Сохраняется с адаптацией

## 🛠️ Стратегия миграции

### Фаза 1: Подготовка и настройка (1 неделя)
1. **Настройка Astro проекта**
   - Инициализация Astro с React интеграцией
   - Настройка TypeScript, Tailwind, Supabase
   - Конфигурация сборки и деплоя

2. **Создание базовой структуры**
   - Лейауты (Layout.astro, BaseHead.astro)
   - Системы стилей и компонентов
   - API роуты для форм

### Фаза 2: Миграция основных компонентов (1.5 недели)
1. **UI компоненты** → Astro + React island компоненты
2. **Статические компоненты** → Чистые .astro компоненты
3. **Интерактивные компоненты** → React islands с client:load

### Фаза 3: Миграция страниц (1 неделя)
1. **Главная страница** (NewLanding)
2. **Статические страницы** (About, Team, Terms, etc.)
3. **Динамические страницы** (Contact, Blog)

### Фаза 4: Оптимизация и тестирование (0.5 недели)
1. **Производительность**: Optimizations, code splitting
2. **SEO**: Meta tags, sitemap, structured data
3. **Тестирование**: E2E, performance, accessibility

## 🚀 Техническая стратегия

### Архитектурные решения

#### 1. Islands Architecture
```typescript
// Статические компоненты → .astro
Hero.astro, Footer.astro, ProblemStatement.astro

// Интерактивные → React islands
<LeadForm client:load />
<CookieConsent client:idle />
<PricingSandbox client:visible />
```

#### 2. Routing Strategy
```
src/pages/
├── index.astro           # Главная (NewLanding)
├── about-us.astro        # О нас
├── contact.astro         # Контакты
├── old-landing.astro     # Старый лендинг
└── api/
    ├── contact.ts        # API для форм
    └── subscribe.ts      # API подписки
```

#### 3. State Management
- **Глобальное состояние**: Astro + nano-stores
- **Формы**: React Hook Form в island компонентах
- **Server State**: Astro API routes + fetch

### Компонентная миграция

#### Типы компонентов и стратегии:

**🟢 Статические (→ .astro):**
- Hero, Footer, Navbar
- ProblemStatement, Solution, Testimonials
- SEOHead → BaseHead.astro

**🟡 Гибридные (→ .astro + React islands):**
- PricingSection (статика + интерактивные кнопки)
- DemoSection (статика + форма записи)

**🔴 Интерактивные (→ React islands):**
- LeadForm, CookieConsent
- PricingSandbox, BookDemo
- ScrollToTop

#### UI библиотека
```typescript
// Создание Astro-совместимых UI компонентов
src/components/ui/
├── Button.astro          # Статическая версия
├── Button.tsx           # React версия для islands
├── Card.astro
└── Form.tsx             # Только React (сложная логика)
```

## 📦 Миграционные задачи

### Критический путь

#### 1. Инфраструктура (Priority: Critical)
- [ ] Настройка Astro проекта с интеграциями
- [ ] Миграция сборки и деплоя
- [ ] Настройка TypeScript и путей

#### 2. Базовые компоненты (Priority: High)
- [ ] Layout.astro и BaseHead.astro
- [ ] Navbar и Footer
- [ ] UI компоненты (Button, Card, Input)

#### 3. Ключевые страницы (Priority: High)
- [ ] Главная страница (NewLanding → index.astro)
- [ ] Страница контактов с формой
- [ ] API роуты для форм

#### 4. Интерактивность (Priority: Medium)
- [ ] Формы подписки и лидов
- [ ] Cookie consent
- [ ] Pricing sandbox

#### 5. Оптимизация (Priority: Medium)
- [ ] SEO метатеги и structured data
- [ ] Performance оптимизации
- [ ] Accessibility улучшения

## 🔧 Технические требования

### Производительность
- **SSG**: Полная статическая генерация
- **Partial Hydration**: Только критически интерактивные компоненты
- **Code Splitting**: Автоматическое разделение по роутам
- **Image Optimization**: Astro Image компонент

### SEO оптимизация
```astro
---
// src/components/BaseHead.astro
interface Props {
  title: string;
  description: string;
  image?: string;
}
---
<head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <!-- JSON-LD structured data -->
</head>
```

### Безопасность
- **CSRF защита**: Сохранение через API роуты
- **Rate limiting**: На уровне API роутов
- **Form validation**: Серверная + клиентская
- **Honeypot**: Антиспам в формах

## 🎛️ Конфигурация Astro

```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    compress(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-vendor': ['@radix-ui/*'],
          },
        },
      },
    },
  },
});
```

## 📊 План тестирования

### Performance Testing
- **Lighthouse CI**: Автоматизированные проверки
- **Core Web Vitals**: Мониторинг в production
- **Bundle Analysis**: Контроль размера бандлов

### Functional Testing
- **E2E**: Playwright для критических путей
- **Forms**: Тестирование всех форм и API
- **Cross-browser**: Chrome, Firefox, Safari

### Accessibility Testing
- **axe-core**: Автоматизированные a11y проверки
- **Manual testing**: Клавиатурная навигация
- **Screen readers**: Совместимость

## 🚢 План деплоя

### Стратегия развертывания
1. **Dev environment**: Параллельная разработка
2. **Staging**: A/B тестирование с текущей версией
3. **Production**: Blue-green deployment
4. **Rollback plan**: Откат на React версию при критических проблемах

### Мониторинг
- **Performance**: Real User Monitoring
- **Errors**: Sentry интеграция
- **Analytics**: Google Analytics 4
- **Core Web Vitals**: PageSpeed Insights API

## 🎯 Критерии успеха

### Технические KPI
- [ ] **Lighthouse Score**: Performance > 95, SEO > 95
- [ ] **Bundle Size**: < 50KB initial JS
- [ ] **Time to Interactive**: < 2s на 3G
- [ ] **First Contentful Paint**: < 1s

### Бизнес KPI
- [ ] **Conversion Rate**: Сохранение или улучшение
- [ ] **SEO Ranking**: Сохранение позиций в поиске
- [ ] **User Experience**: Снижение bounce rate
- [ ] **Development Velocity**: Ускорение разработки новых фич

## ⚠️ Риски и митигация

### Высокие риски
1. **SEO падение**: Тщательная проверка мета-тегов и роутинга
2. **Форм функциональность**: Комплексное тестирование API
3. **Analytics потеря**: Правильная настройка tracking

### Средние риски
1. **Performance регрессия**: Continuous monitoring
2. **Browser compatibility**: Расширенное кросс-браузерное тестирование
3. **Team learning curve**: Обучение команды Astro

## 📚 Документация и ресурсы

### Обучающие материалы
- [Astro Documentation](https://docs.astro.build)
- [Islands Architecture](https://docs.astro.build/en/concepts/islands/)
- [React Integration Guide](https://docs.astro.build/en/guides/integrations-guide/react/)

### Инструменты
- **Astro CLI**: Генерация компонентов и страниц
- **Astro DevTools**: Отладка в браузере
- **Lighthouse CI**: Автоматизированный аудит производительности

---

**Дата создания**: 2025-08-04
**Автор**: AstroAgent  
**Версия**: 1.0
**Статус**: Готов к реализации