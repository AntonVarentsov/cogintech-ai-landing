# Настройка Astro проекта

**Статус:** todo  
**Приоритет:** critical  
**Назначен:** developer  
**Срок:** 2025-08-11  
**Теги:** infrastructure, setup  
**Время:** 8ч  

## Описание
Инициализация нового Astro проекта с необходимыми интеграциями для миграции с React.

## Подзадачи
- [ ] Создать новый Astro проект в папке `astro-migration/`
- [ ] Установить интеграции: React, Tailwind, TypeScript
- [ ] Настроить astro.config.mjs с необходимыми интеграциями  
- [ ] Скопировать и адаптировать tsconfig.json
- [ ] Настроить алиасы путей (@/ mapping)
- [ ] Адаптировать package.json scripts
- [ ] Настроить Vite конфигурацию для production
- [ ] Создать GitHub Actions workflow для Astro

## Команды
```bash
npm create astro@latest astro-migration -- --template minimal --typescript
cd astro-migration
npx astro add react tailwind
```

## Критерии готовности
- [ ] Astro проект запускается локально
- [ ] Сборка проходит без ошибок
- [ ] GitHub Actions настроены и работают
- [ ] Все алиасы и пути настроены корректно