# Создание React Islands

**Статус:** todo  
**Приоритет:** high  
**Назначен:** developer  
**Срок:** 2025-08-22  
**Теги:** islands, interactivity, react  
**Время:** 14ч  

## Описание
Создание интерактивных компонентов как React islands с правильной стратегией загрузки.

## Подзадачи

### Формы (8ч)
- [ ] LeadForm → React island с client:load
- [ ] BookDemo → React island с client:visible  
- [ ] ContactForm (новый) → React island с client:load
- [ ] Newsletter форма в Footer → React island с client:idle
- [ ] PricingSandbox → React island с client:visible

### Интерактивные виджеты (4ч)
- [ ] CookieConsent → React island с client:idle
- [ ] ScrollToTop → React island с client:load
- [ ] Mobile menu в Navbar → React island с client:load

### API интеграция (2ч)
- [ ] Настроить Supabase клиент для islands
- [ ] Адаптировать useSecureForm хук
- [ ] Настроить обработку ошибок в forms

## Стратегии загрузки
- **client:load** - критически важные формы (LeadForm, Contact)
- **client:idle** - некритичные (CookieConsent, Newsletter)
- **client:visible** - формы ниже fold (BookDemo, PricingSandbox)

## Технические требования
- Минимизировать JavaScript bundle
- Использовать React только где необходимо
- Сохранить всю функциональность форм
- Правильная обработка состояний загрузки

## Тестирование
- [ ] Все формы отправляют данные корректно
- [ ] Islands загружаются в правильное время
- [ ] Fallback состояния работают
- [ ] JavaScript можно отключить без критических ошибок

## Критерии готовности
- [ ] Все интерактивные элементы работают
- [ ] Bundle size оптимизирован
- [ ] Формы проходят валидацию
- [ ] UX не деградирует без JavaScript