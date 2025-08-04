# Миграция компонентов лендинга

**Статус:** todo  
**Приоритет:** high  
**Назначен:** developer  
**Срок:** 2025-08-20  
**Теги:** landing, components, static  
**Время:** 18ч  

## Описание
Миграция всех статических компонентов лендинговой страницы в Astro формат.

## Подзадачи

### Hero секция (4ч)
- [ ] NewHero.tsx → Hero.astro
- [ ] Сохранить все стили и анимации
- [ ] Оптимизировать изображения через Astro Image
- [ ] Добавить структурированные данные JSON-LD
- [ ] Проверить responsive дизайн

### Основные контентные блоки (10ч)
- [ ] ProblemStatement.tsx → ProblemStatement.astro  
- [ ] Solution.tsx → Solution.astro
- [ ] ValueMetrics.tsx → ValueMetrics.astro
- [ ] SolutionBlocks.tsx → SolutionBlocks.astro
- [ ] SecurityIT.tsx → SecurityIT.astro
- [ ] SocialProof.tsx → SocialProof.astro
- [ ] AIAssistant.tsx → AIAssistant.astro

### Дополнительные секции (4ч)
- [ ] Testimonials.tsx → Testimonials.astro
- [ ] FAQ.tsx → FAQ.astro (статическая часть)
- [ ] PainAmplifier.tsx → PainAmplifier.astro

## Технические требования
- Все компоненты должны быть полностью статическими
- Сохранить все стили Tailwind
- Оптимизировать изображения
- Добавить proper alt текст для accessibility
- Использовать семантические HTML теги

## Оптимизации
- [ ] Использовать Astro Image для всех изображений
- [ ] Минимизировать CSS
- [ ] Добавить lazy loading для изображений ниже fold
- [ ] Оптимизировать шрифты

## Критерии готовности
- [ ] Все компоненты отображаются идентично оригиналу
- [ ] Производительность улучшена
- [ ] Accessibility не нарушена
- [ ] Responsive дизайн работает корректно