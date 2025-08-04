# Создание API Routes

**Статус:** todo  
**Приоритет:** high  
**Назначен:** developer  
**Срок:** 2025-08-23  
**Теги:** api, backend, forms  
**Время:** 10ч  

## Описание
Создание API маршрутов для обработки форм и интеграции с Supabase.

## Подзадачи

### Основные API маршруты (6ч)
- [ ] src/pages/api/contact.ts - обработка контактной формы
- [ ] src/pages/api/subscribe.ts - подписка на newsletter
- [ ] src/pages/api/demo-request.ts - запрос демо
- [ ] src/pages/api/sandbox-request.ts - запрос доступа к sandbox

### Интеграция с Supabase (2ч)
- [ ] Настроить Supabase клиент для серверной среды
- [ ] Миграция useSecureForm логики на сервер
- [ ] Настроить environment variables

### Безопасность и валидация (2ч)
- [ ] CSRF защита для всех форм
- [ ] Rate limiting для API endpoints
- [ ] Server-side валидация всех данных
- [ ] Honeypot для антиспам защиты

## Структура API
```
src/pages/api/
├── contact.ts        # POST /api/contact
├── subscribe.ts      # POST /api/subscribe  
├── demo-request.ts   # POST /api/demo-request
└── sandbox-request.ts # POST /api/sandbox-request
```

## Примеры API endpoints
```typescript
// src/pages/api/contact.ts
export async function POST({ request }: APIContext) {
  // Валидация + обработка + ответ
}
```

## Тестирование
- [ ] Все API endpoints отвечают корректно
- [ ] Валидация работает на сервере
- [ ] Ошибки обрабатываются правильно
- [ ] Integration с Supabase работает
- [ ] Rate limiting не блокирует валидные запросы

## Критерии готовности
- [ ] Все формы отправляют данные через API routes
- [ ] Сервер корректно обрабатывает все запросы
- [ ] Безопасность реализована на должном уровне
- [ ] Error handling работает на фронтенде и бэкенде