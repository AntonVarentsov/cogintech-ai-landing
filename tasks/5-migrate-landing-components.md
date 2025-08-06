# Миграция компонентов лендинга

**Статус:** todo  
**Приоритет:** high  
**Назначен:** developer  
**Срок:** 2025-08-20  
**Теги:** landing, components, static  
**Время:** 18ч  

## Описание
Миграция всех статических компонентов лендинговой страницы в Astro формат. Всего 10 основных компонентов новой лендинговой страницы + 3 компонента старой версии.

## Этап 1: Подготовка и анализ (2ч)

### 1.1 Анализ существующих компонентов (1ч)
- [ ] **Изучить структуру компонентов new-landing/**
  - NewHero.tsx - главная hero секция
  - PainAmplifier.tsx - блок усиления боли пользователя
  - SolutionBlocks.tsx - блоки решений
  - ValueMetrics.tsx - метрики и цифры
  - SecurityIT.tsx - блок безопасности
  - SocialProof.tsx - социальное подтверждение
  - AIAssistant.tsx - ИИ помощник
  - BookDemo.tsx - форма записи на демо (ОСТАЕТСЯ React island)
  - FAQ.tsx - часто задаваемые вопросы
  - PricingSandbox.tsx - интерактивная песочница (ОСТАЕТСЯ React island)

- [ ] **Анализ старых компонентов (для совместимости)**
  - Hero.tsx - старая hero секция
  - ProblemStatement.tsx - описание проблемы
  - Solution.tsx - решение
  - Testimonials.tsx - отзывы

### 1.2 Планирование оптимизаций (1ч)
- [ ] **Идентификация изображений для оптимизации**
  - Найти все используемые изображения в компонентах
  - Определить размеры и форматы для Astro Image
  - Создать план lazy loading стратегии
- [ ] **Анализ анимаций и интерактивности**
  - Выявить CSS анимации (сохранить)
  - Найти JavaScript интерактивность (перенести в islands если нужно)
  - Определить компоненты для A/B тестирования

## Этап 2: Hero секции (4ч)

### 2.1 Миграция NewHero (2ч)
- [ ] **NewHero.astro** - Современная hero секция
  - Конвертировать JSX разметку в Astro
  - Сохранить градиентные фоны и стили
  - Интегрировать Astro Image для hero изображения
  - Добавить структурированные данные для SEO

```astro
---
// NewHero.astro
import { Image } from 'astro:assets';
import heroImage from '@/assets/hero-dashboard.png';

const heroData = {
  title: "CognitechAI - Революция ИИ для бизнеса",
  description: "Автоматизируйте процессы и повысьте эффективность с помощью нашей платформы искусственного интеллекта",
  cta: {
    primary: "Начать бесплатно",
    secondary: "Смотреть демо"
  }
};
---
```

### 2.2 Оптимизация старого Hero (1ч)
- [ ] **Hero.astro** - Совместимость со старой версией
  - Создать упрощенную версию для backward compatibility
  - Оптимизировать для SEO и производительности
  - Добавить поддержку dark mode

### 2.3 Интеграция и тестирование (1ч)
- [ ] **A/B тестирование setup**
  - Подготовить возможность переключения между Hero версиями
  - Настроить метрики для измерения конверсии
- [ ] **Performance оптимизация**
  - Настроить preload для критических изображений
  - Оптимизировать Critical Path CSS

## Этап 3: Контентные блоки и метрики (6ч)

### 3.1 Проблема и решение (2ч)
- [ ] **PainAmplifier.astro** - Усиление проблемы пользователя
  - Конвертировать эмоциональные блоки контента
  - Сохранить стилизацию и spacing
  - Добавить семантические теги для лучшего SEO
- [ ] **ProblemStatement.astro** - Описание проблемы (старая версия)  
  - Создать совместимую версию с новым дизайном
  - Оптимизировать текстовый контент для поисковиков

### 3.2 Решения и блоки (2ч)
- [ ] **SolutionBlocks.astro** - Блоки решений
  - Конвертировать grid layout в Astro
  - Оптимизировать иконки и изображения решений
  - Добавить hover эффекты через CSS
- [ ] **Solution.astro** - Общее решение (старая версия)
  - Адаптировать под новый design system
  - Интегрировать с SolutionBlocks если нужно

### 3.3 Метрики и цифры (2ч)
- [ ] **ValueMetrics.astro** - Ключевые метрики компании
  - Создать анимированные счетчики через CSS
  - Добавить structured data для цифр и достижений
  - Оптимизировать для Core Web Vitals

```astro
---
// ValueMetrics.astro
const metrics = [
  { value: "500+", label: "Довольных клиентов", icon: "👥" },
  { value: "99.9%", label: "Время работы", icon: "⚡" },
  { value: "2.5x", label: "Рост эффективности", icon: "📈" },
  { value: "24/7", label: "Поддержка", icon: "🛠️" }
];
---
```

## Этап 4: Специализированные блоки (4ч)

### 4.1 Безопасность и социальные доказательства (2ч)
- [ ] **SecurityIT.astro** - Блок безопасности для IT
  - Конвертировать технические спецификации
  - Добавить иконки безопасности и сертификаты
  - Оптимизировать для технических ключевых слов
- [ ] **SocialProof.astro** - Социальные доказательства
  - Добавить логотипы партнеров и клиентов
  - Создать отзывы и testimonials
  - Настроить schema.org разметку для отзывов

### 4.2 ИИ функциональность (2ч)
- [ ] **AIAssistant.astro** - Демонстрация ИИ возможностей
  - Конвертировать интерактивные примеры в статический контент
  - Добавить видео или изображения демонстрации
  - Создать привлекательные call-to-action

```astro
---
// AIAssistant.astro
const aiFeatures = [
  {
    title: "Автоматическая обработка документов",
    description: "ИИ анализирует и извлекает данные из любых документов",
    demo: "/videos/document-processing.mp4"
  },
  // ...
];
---
```

## Этап 5: Дополнительные секции (3ч)

### 5.1 Отзывы и FAQ (2ч)
- [ ] **Testimonials.astro** - Отзывы клиентов
  - Создать carousel/grid отзывов
  - Добавить фотографии и данные клиентов
  - Настроить structured data для отзывов (schema.org/Review)
- [ ] **FAQ.astro** - Часто задаваемые вопросы (статическая часть)
  - Конвертировать базовую структуру вопросов-ответов
  - Добавить FAQ schema для поисковиков
  - Оставить интерактивность (accordion) для отдельного React island

### 5.2 Ценообразование preview (1ч)
- [ ] **PricingPreview.astro** - Статический preview цен
  - Создать простую таблицу тарифов
  - Добавить ссылки на полную страницу с PricingSandbox
  - Оптимизировать для conversion

## Этап 6: Оптимизация и интеграция (3ч)

### 6.1 Производительность (1.5ч)
- [ ] **Изображения и ресурсы**
  - Интегрировать все изображения с Astro Image
  - Настроить правильные размеры и форматы (WebP, AVIF)
  - Добавить placeholder и progressive loading
- [ ] **Шрифты и CSS**
  - Оптимизировать загрузку веб-шрифтов
  - Минимизировать критический CSS
  - Настроить prefetch для важных ресурсов

### 6.2 SEO и accessibility (1.5ч)
- [ ] **Семантическая разметка**
  - Использовать правильные HTML5 теги (section, article, aside)
  - Добавить правильную иерархию заголовков (h1-h6)
  - Настроить ARIA labels для сложных элементов
- [ ] **Structured Data**
  - Добавить Organization schema
  - Создать Service schema для описания услуг
  - Настроить BreadcrumbList для навигации

## Команды для выполнения

### Подготовка структуры
```bash
# Создание папок для компонентов лендинга
mkdir -p astro-migration/src/components/landing
mkdir -p astro-migration/src/components/sections

# Копирование оригинальных компонентов для анализа
cp -r src/components/new-landing/* astro-migration/src/components/landing/
cp src/components/{Hero,ProblemStatement,Solution,Testimonials}.tsx astro-migration/src/components/sections/
```

### Создание компонентов
```bash
# Hero секции
touch astro-migration/src/components/landing/NewHero.astro
touch astro-migration/src/components/sections/Hero.astro

# Контентные блоки
touch astro-migration/src/components/landing/{PainAmplifier,SolutionBlocks,ValueMetrics}.astro
touch astro-migration/src/components/landing/{SecurityIT,SocialProof,AIAssistant}.astro

# Дополнительные секции
touch astro-migration/src/components/sections/{Testimonials,FAQ,PricingPreview}.astro
```

### Тестирование
```bash
# Разработка с hot reload
cd astro-migration && npm run dev

# Проверка сборки и оптимизации
cd astro-migration && npm run build

# Анализ производительности
npx lighthouse http://localhost:4321 --output=html --output-path=./lighthouse-report.html

# Проверка accessibility
npx @axe-core/cli http://localhost:4321
```

## Критерии готовности

### Визуальная идентичность
- [ ] ✅ Все компоненты выглядят идентично оригиналам
- [ ] ✅ Responsive дизайн работает на всех устройствах
- [ ] ✅ Анимации и переходы сохранены
- [ ] ✅ Color scheme и typography соответствуют дизайн-системе

### Производительность
- [ ] ✅ Lighthouse Performance Score > 95
- [ ] ✅ First Contentful Paint < 1.2s  
- [ ] ✅ Largest Contentful Paint < 2.0s
- [ ] ✅ Total Bundle Size уменьшился на 60%+
- [ ] ✅ Images оптимизированы (WebP/AVIF форматы)

### SEO оптимизация
- [ ] ✅ Lighthouse SEO Score > 98
- [ ] ✅ Все заголовки имеют правильную иерархию
- [ ] ✅ Meta descriptions оптимизированы для каждой секции
- [ ] ✅ Structured data корректно настроены
- [ ] ✅ Alt тексты добавлены для всех изображений

### Accessibility
- [ ] ✅ Lighthouse Accessibility Score > 98
- [ ] ✅ Все интерактивные элементы доступны с клавиатуры
- [ ] ✅ Контрастность цветов соответствует WCAG 2.1 AA
- [ ] ✅ Screen reader friendly разметка
- [ ] ✅ ARIA attributes настроены корректно

### Техническое качество
- [ ] ✅ TypeScript типы корректно работают
- [ ] ✅ Нет Console errors или warnings
- [ ] ✅ Код проходит линтер без ошибок
- [ ] ✅ CSS оптимизирован и не содержит неиспользуемых стилей

## Файловая структура после миграции

```
astro-migration/src/
├── components/
│   ├── landing/                    # Новые компоненты лендинга
│   │   ├── NewHero.astro          # Главная hero секция  
│   │   ├── PainAmplifier.astro    # Усиление проблемы
│   │   ├── SolutionBlocks.astro   # Блоки решений
│   │   ├── ValueMetrics.astro     # Ключевые метрики
│   │   ├── SecurityIT.astro       # Безопасность для IT
│   │   ├── SocialProof.astro      # Социальные доказательства
│   │   └── AIAssistant.astro      # ИИ функциональность
│   ├── sections/                   # Переиспользуемые секции
│   │   ├── Hero.astro             # Универсальная hero секция
│   │   ├── ProblemStatement.astro # Описание проблемы  
│   │   ├── Solution.astro         # Описание решения
│   │   ├── Testimonials.astro     # Отзывы клиентов
│   │   ├── FAQ.astro              # Статические FAQ
│   │   └── PricingPreview.astro   # Preview цен
│   └── react-islands/              # Остающиеся интерактивные компоненты
│       ├── BookDemo.tsx           # Форма записи на демо
│       ├── PricingSandbox.tsx     # Интерактивная песочница
│       └── FAQAccordion.tsx       # Интерактивные FAQ
├── assets/                         # Оптимизированные изображения
│   ├── hero/
│   ├── solutions/
│   ├── metrics/
│   └── testimonials/
└── data/
    ├── testimonials.json          # Данные отзывов
    ├── metrics.json               # Ключевые метрики
    ├── solutions.json             # Описания решений
    └── faq.json                   # Данные FAQ
```

## Ожидаемые результаты

После завершения миграции ожидается:

1. **Улучшение производительности на 60-70%**
   - Уменьшение JavaScript bundle с ~200KB до ~50KB
   - Улучшение Time to Interactive с 3.5s до 1.5s
   - Улучшение First Contentful Paint с 2.1s до 0.9s

2. **SEO оптимизация**
   - Lighthouse SEO Score: 95+ → 98+
   - Улучшение индексации всех блоков контента
   - Богатые сниппеты в поисковой выдаче

3. **Пользовательский опыт**
   - Мгновенная загрузка статического контента
   - Сохранение всей интерактивности где необходимо
   - Улучшение accessibility для пользователей с ограниченными возможностями