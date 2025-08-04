# SEO оптимизация

**Статус:** todo  
**Приоритет:** medium  
**Назначен:** developer  
**Срок:** 2025-08-27  
**Теги:** seo, performance, meta  
**Время:** 10ч  

## Описание
Комплексная SEO оптимизация для улучшения индексации и ранжирования.

## Подзадачи

### Мета-теги и структурированные данные (4ч)
- [ ] Создать компонент SEO.astro для мета-тегов
- [ ] Настроить уникальные title и description для каждой страницы
- [ ] Добавить Open Graph и Twitter Card метатеги
- [ ] Создать JSON-LD структурированные данные для организации
- [ ] Настроить canonical URLs

### Технические SEO элементы (3ч)
- [ ] Настроить sitemap.xml генерацию
- [ ] Обновить robots.txt
- [ ] Добавить schema.org разметку
- [ ] Настроить breadcrumbs navigation
- [ ] Оптимизировать URL структуру

### Контентная оптимизация (3ч)
- [ ] Оптимизировать заголовки (H1, H2, H3)
- [ ] Добавить alt текст для всех изображений
- [ ] Оптимизировать внутренние ссылки
- [ ] Проверить keyword density
- [ ] Улучшить семантическую разметку

## Структурированные данные
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CognitechAI",
  "url": "https://cogintech-ai.com",
  "description": "AI-powered business solutions"
}
```

## SEO компонент
```astro
---
// src/components/SEO.astro
interface Props {
  title: string;
  description: string;
  image?: string;
  type?: string;
}
---
```

## Критерии готовности
- [ ] Lighthouse SEO score > 95
- [ ] Google Search Console без ошибок
- [ ] Все страницы проиндексированы
- [ ] Meta теги оптимизированы
- [ ] Структурированные данные валидны