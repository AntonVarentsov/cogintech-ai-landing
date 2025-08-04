# Миграция UI компонентов

**Статус:** todo  
**Приоритет:** high  
**Назначен:** developer  
**Срок:** 2025-08-18  
**Теги:** components, ui, migration  
**Время:** 16ч  

## Описание
Перевод React UI компонентов в Astro формат с разделением на статические и интерактивные.

## Подзадачи

### Статические UI компоненты → .astro (8ч)
- [ ] Button.astro (базовая версия)
- [ ] Card.astro 
- [ ] Badge.astro
- [ ] Separator.astro
- [ ] Avatar.astro (статическая версия)
- [ ] Alert.astro
- [ ] Progress.astro
- [ ] Skeleton.astro

### Интерактивные UI компоненты → React islands (8ч)
- [ ] Button.tsx (для интерактивности)
- [ ] Dialog.tsx 
- [ ] Form.tsx
- [ ] Input.tsx
- [ ] Select.tsx
- [ ] Checkbox.tsx
- [ ] Toast.tsx
- [ ] Dropdown.tsx

## Команды TaskMaster
```bash
taskmaster generate component Button --type=astro
taskmaster migrate component Button --from=react --to=astro
```

## Критерии готовности
- [ ] Все статические компоненты работают в .astro формате
- [ ] Интерактивные компоненты работают как React islands
- [ ] Стили сохранены и адаптированы
- [ ] TypeScript типы корректно работают