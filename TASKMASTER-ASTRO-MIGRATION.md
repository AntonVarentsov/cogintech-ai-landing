# Taskmaster: Задачи миграции на Astro

## 🎯 Фаза 1: Подготовка и настройка (Неделя 1)

### 1.1 Инициализация Astro проекта
**Приоритет:** Critical | **Время:** 4 часа
- [ ] Инициализировать новый Astro проект в папке `astro-migration/`
- [ ] Установить интеграции: React, Tailwind, TypeScript
- [ ] Настроить astro.config.mjs с необходимыми интеграциями
- [ ] Скопировать и адаптировать tsconfig.json
- [ ] Настроить алиасы путей (@/ mapping)

**Команды:**
```bash
npm create astro@latest astro-migration -- --template minimal --typescript
cd astro-migration
npx astro add react tailwind
```

### 1.2 Настройка сборки и деплоя
**Приоритет:** High | **Время:** 3 часа
- [ ] Адаптировать package.json scripts
- [ ] Настроить Vite конфигурацию для production
- [ ] Создать GitHub Actions workflow для Astro
- [ ] Настроить environment variables
- [ ] Тестировать локальную сборку

### 1.3 Базовая структура проекта
**Приоритет:** High | **Время:** 2 часа
- [ ] Создать структуру папок src/
- [ ] Скопировать статические ресурсы в public/
- [ ] Создать базовый Layout.astro
- [ ] Настроить глобальные стили
- [ ] Создать компонент BaseHead.astro

## 🏗️ Фаза 2: Миграция основных компонентов (Неделя 2-2.5)

### 2.1 UI компоненты (Day 1-2)
**Приоритет:** High | **Время:** 12 часов

#### Статические UI компоненты → .astro
- [ ] Button.astro (базовая версия)
- [ ] Card.astro 
- [ ] Badge.astro
- [ ] Separator.astro
- [ ] Avatar.astro (статическая версия)

#### Интерактивные UI компоненты → React islands
- [ ] Button.tsx (для интерактивности)
- [ ] Dialog.tsx 
- [ ] Form.tsx
- [ ] Input.tsx
- [ ] Select.tsx
- [ ] Checkbox.tsx
- [ ] Toast.tsx

**Команда Taskmaster:**
```bash
taskmaster generate component Button --type=astro
taskmaster generate component Card --type=astro
```

### 2.2 Основные layout компоненты (Day 3-4)
**Приоритет:** Critical | **Время:** 10 часов

#### Navbar компонент
- [ ] Создать Navbar.astro (статическая структура)
- [ ] Добавить мобильное меню как React island
- [ ] Настроить активные состояния ссылок
- [ ] Интегрировать с системой роутинга Astro

#### Footer компонент  
- [ ] Мигрировать Footer.tsx → Footer.astro
- [ ] Сохранить все ссылки и структуру
- [ ] Добавить newsletter подписку как island
- [ ] Проверить responsive дизайн

### 2.3 Статические компоненты лендинга (Day 5-7)
**Приоритет:** High | **Время:** 15 часов

#### Hero секция
- [ ] NewHero.tsx → Hero.astro
- [ ] Сохранить все стили и анимации
- [ ] Оптимизировать изображения через Astro Image
- [ ] Добавить структурированные данные JSON-LD

#### Контентные блоки
- [ ] ProblemStatement.tsx → ProblemStatement.astro  
- [ ] Solution.tsx → Solution.astro
- [ ] Testimonials.tsx → Testimonials.astro
- [ ] ValueMetrics.tsx → ValueMetrics.astro
- [ ] SolutionBlocks.tsx → SolutionBlocks.astro
- [ ] SecurityIT.tsx → SecurityIT.astro
- [ ] SocialProof.tsx → SocialProof.astro

**Команды:**
```bash
taskmaster migrate component NewHero --from=react --to=astro
taskmaster optimize images --format=astro
```

### 2.4 Интерактивные компоненты (Day 6-8)
**Приоритет:** Medium | **Время:** 12 часов

#### Формы (React islands)
- [ ] LeadForm.tsx → React island с client:load
- [ ] BookDemo.tsx → React island с client:visible  
- [ ] ContactForm (новый) → React island
- [ ] Newsletter форма в Footer

#### Интерактивные виджеты
- [ ] CookieConsent.tsx → React island с client:idle
- [ ] ScrollToTop.tsx → React island с client:load
- [ ] PricingSandbox.tsx → React island с client:visible

## 📄 Фаза 3: Миграция страниц (Неделя 3)

### 3.1 Главная страница (Day 1-2)  
**Приоритет:** Critical | **Время:** 8 часов
- [ ] Создать src/pages/index.astro
- [ ] Импортировать все компоненты NewLanding
- [ ] Настроить SEO метатеги для главной
- [ ] Добавить structured data для организации
- [ ] Тестировать производительность

### 3.2 Статические страницы (Day 3-4)
**Приоритет:** High | **Время:** 10 часов
- [ ] about-us.astro (AboutUs.tsx)
- [ ] our-team.astro (OurTeam.tsx)  
- [ ] careers.astro (Careers.tsx)
- [ ] technology.astro (Technology.tsx)
- [ ] case-studies.astro (CaseStudies.tsx)
- [ ] privacy-policy.astro (PrivacyPolicy.tsx)
- [ ] terms-of-service.astro (TermsOfService.tsx)
- [ ] cookie-policy.astro (CookiePolicy.tsx)

### 3.3 Динамические страницы (Day 5)
**Приоритет:** High | **Время:** 6 часов
- [ ] contact.astro с интегрированной формой
- [ ] blog.astro (если нужна динамика)
- [ ] news.astro 
- [ ] 404.astro (NotFound.tsx)
- [ ] 401.astro (Unauthorized.tsx)

### 3.4 API Routes (Day 4-5)
**Приоритет:** High | **Время:** 8 часов
- [ ] src/pages/api/contact.ts
- [ ] src/pages/api/subscribe.ts  
- [ ] src/pages/api/demo-request.ts
- [ ] src/pages/api/sandbox-request.ts
- [ ] Интеграция с Supabase
- [ ] Миграция useSecureForm логики

## 🚀 Фаза 4: Оптимизация и запуск (Неделя 4)

### 4.1 SEO оптимизация (Day 1-2)
**Приоритет:** High | **Время:** 8 часов
- [ ] Создать компонент SEO.astro для метатегов
- [ ] Добавить sitemap.xml генерацию
- [ ] Настроить robots.txt
- [ ] Добавить JSON-LD structured data
- [ ] Настроить Open Graph изображения
- [ ] Проверить canonical URLs

### 4.2 Performance оптимизация (Day 2-3)
**Приоритет:** Critical | **Время:** 10 часов
- [ ] Настроить code splitting
- [ ] Оптимизировать загрузку изображений
- [ ] Минимизировать CSS и JS
- [ ] Настроить prefetching
- [ ] Оптимизировать Critical CSS
- [ ] Настроить compression
- [ ] Audit производительности с Lighthouse

### 4.3 Тестирование (Day 3-4)
**Приоритет:** Critical | **Время:** 10 часов

#### E2E тестирование
- [ ] Настроить Playwright
- [ ] Тесты форм и отправки данных
- [ ] Тесты навигации между страницами
- [ ] Тесты responsive дизайна
- [ ] Тесты accessibility

#### Performance тестирование  
- [ ] Lighthouse CI настройка
- [ ] Core Web Vitals мониторинг
- [ ] Bundle size анализ
- [ ] Load testing основных страниц

### 4.4 Деплой и мониторинг (Day 5)
**Приоритет:** Critical | **Время:** 6 часов
- [ ] Настроить production сборку
- [ ] Деплой на staging для A/B тестирования
- [ ] Настроить мониторинг ошибок
- [ ] Настроить performance мониторинг
- [ ] Подготовить rollback план
- [ ] Production деплой

## 🔧 Технические задачи (Параллельно)

### Инфраструктура
**Приоритет:** Medium | **Время:** 6 часов
- [ ] Настроить Astro DevTools
- [ ] Создать Astro snippets для VSCode
- [ ] Настроить автоматический анализ bundle size
- [ ] Интегрировать с существующей CI/CD

### Документация 
**Приоритет:** Low | **Время:** 4 часа
- [ ] Создать README для Astro версии
- [ ] Документировать паттерны islands architecture
- [ ] Создать guide по разработке компонентов
- [ ] Обновить team onboarding документы

## 📊 Контрольные точки

### Еженедельные проверки
- **Неделя 1**: Готовность инфраструктуры и базовых компонентов
- **Неделя 2**: Завершение миграции всех компонентов  
- **Неделя 3**: Готовность всех страниц и API
- **Неделя 4**: Production ready состояние

### Критерии готовности к переходу
- [ ] Lighthouse Score: Performance > 95, SEO > 95
- [ ] Все формы работают корректно
- [ ] E2E тесты проходят успешно
- [ ] Core Web Vitals в "Good" диапазоне
- [ ] A/B тестирование показывает равную или лучшую конверсию

## 🎛️ Команды Taskmaster

### Генерация компонентов
```bash
# Astro компонент
taskmaster generate component Hero --type=astro --props="title:string,subtitle:string"

# React island
taskmaster generate component ContactForm --type=react --island=true --client=load

# Страница
taskmaster generate page about-us --type=astro --layout=Layout
```

### Миграция утилиты
```bash
# Автоматическая миграция компонента
taskmaster migrate component NewHero --from=react --to=astro --analyze

# Анализ зависимостей
taskmaster analyze dependencies --component=LeadForm

# Оптимизация
taskmaster optimize bundle --target=50kb
taskmaster optimize images --format=webp,avif
```

### Тестирование
```bash
# Lighthouse тест
taskmaster test lighthouse --url=localhost:3000

# Performance профилирование
taskmaster profile build --analyze-bundle

# E2E тесты
taskmaster test e2e --components=forms,navigation
```

---

**Общее время:** ~120 часов (3-4 недели)
**Команда:** 2-3 разработчика
**Готовность к production:** 4 неделя