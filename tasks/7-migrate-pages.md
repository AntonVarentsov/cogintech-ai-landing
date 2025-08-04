# Миграция страниц

**Статус:** todo  
**Приоритет:** critical  
**Назначен:** developer  
**Срок:** 2025-08-25  
**Теги:** pages, routing, seo  
**Время:** 16ч  

## Описание
Миграция всех страниц с React Router на file-based routing Astro.

## Подзадачи

### Главная страница (4ч)
- [ ] Создать src/pages/index.astro
- [ ] Импортировать все компоненты NewLanding
- [ ] Настроить SEO метатеги для главной
- [ ] Добавить structured data для организации
- [ ] Тестировать производительность

### Статические страницы (8ч)
- [ ] about-us.astro (AboutUs.tsx)
- [ ] our-team.astro (OurTeam.tsx)  
- [ ] careers.astro (Careers.tsx)
- [ ] technology.astro (Technology.tsx)
- [ ] case-studies.astro (CaseStudies.tsx)
- [ ] privacy-policy.astro (PrivacyPolicy.tsx)
- [ ] terms-of-service.astro (TermsOfService.tsx)
- [ ] cookie-policy.astro (CookiePolicy.tsx)

### Динамические страницы (4ч)
- [ ] contact.astro с интегрированной формой
- [ ] blog.astro (если нужна динамика)
- [ ] news.astro 
- [ ] 404.astro (NotFound.tsx)
- [ ] 401.astro (Unauthorized.tsx)

## SEO оптимизация
Для каждой страницы:
- [ ] Уникальные title и description
- [ ] Open Graph метатеги
- [ ] Twitter Card метатеги
- [ ] Canonical URLs
- [ ] Structured data где применимо

## Роутинг
```
src/pages/
├── index.astro           # /
├── about-us.astro        # /about-us
├── contact.astro         # /contact
├── old-landing.astro     # /old-landing
└── 404.astro            # Fallback
```

## Критерии готовности
- [ ] Все страницы доступны по правильным URL
- [ ] SEO метатеги настроены для всех страниц
- [ ] 404 страница работает корректно
- [ ] Навигация между страницами работает
- [ ] Все формы на страницах функциональны