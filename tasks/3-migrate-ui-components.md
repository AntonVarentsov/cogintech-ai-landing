# Миграция UI компонентов

**Статус:** todo  
**Приоритет:** high  
**Назначен:** developer  
**Срок:** 2025-08-18  
**Теги:** components, ui, migration  
**Время:** 16ч  

## Описание
Перевод React UI компонентов в Astro формат с разделением на статические и интерактивные. Всего 41 компонент из shadcn/ui требует миграции.

## Этап 1: Базовые статические компоненты → .astro (6ч)

### 1.1 Простые элементы (2ч)
- [ ] **Badge.astro** - Миграция простого компонента-метки
  - Конвертировать из React TSX в Astro
  - Сохранить стили и варианты (default, secondary, destructive, outline)
  - Настроить TypeScript интерфейс для Props
- [ ] **Separator.astro** - Простой разделитель
  - Горизонтальная и вертикальная ориентация
  - Настройка цвета и толщины через CSS переменные
- [ ] **Skeleton.astro** - Компонент загрузки
  - Анимации через CSS без JavaScript
  - Различные размеры и формы
- [ ] **Alert.astro** - Статические уведомления
  - Варианты: default, destructive
  - Иконки и заголовки

### 1.2 Карточки и контейнеры (2ч)  
- [ ] **Card.astro** - Базовый контейнер карточки
  - Card, CardHeader, CardContent, CardFooter как отдельные компоненты
  - Поддержка вложенности и стилизации
- [ ] **AspectRatio.astro** - Компонент пропорций
  - CSS-based aspect ratio без JavaScript
- [ ] **Progress.astro** - Индикатор прогресса (статическая версия)
  - Настройка через CSS переменные
  - Различные стили и размеры

### 1.3 Навигационные элементы (2ч)
- [ ] **Breadcrumb.astro** - Хлебные крошки
  - BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator
  - Поддержка иконок и разделителей
- [ ] **Pagination.astro** - Пагинация (статическая версия)
  - PaginationContent, PaginationItem, PaginationLink
  - Стилизация активных и неактивных элементов
- [ ] **Avatar.astro** - Аватар (статическая версия)
  - Avatar, AvatarImage, AvatarFallback
  - Размеры и fallback логика

## Этап 2: Кнопки и интерактивные элементы → .astro + React islands (4ч)

### 2.1 Кнопки (1.5ч)
- [ ] **Button.astro** - Статическая версия кнопки
  - Все варианты (default, destructive, outline, secondary, ghost, link)
  - Размеры (default, sm, lg, icon)
  - Поддержка slot для контента
- [ ] **Button.tsx** - React island версия для интерактивности
  - onClick handlers, состояния loading
  - Интеграция с формами

### 2.2 Переключатели и селекторы (2.5ч)
- [ ] **Toggle.astro** - Статическая версия переключателя
- [ ] **Toggle.tsx** - React island с состоянием
- [ ] **ToggleGroup.tsx** - Группа переключателей (только React island)
- [ ] **RadioGroup.tsx** - Радио группа (только React island)
- [ ] **Checkbox.tsx** - Чекбокс (только React island)
- [ ] **Switch.tsx** - Переключатель (только React island)
- [ ] **Slider.tsx** - Слайдер (только React island)

## Этап 3: Формы и инпуты → React islands (3ч)

### 3.1 Базовые инпуты (1.5ч)
- [ ] **Input.tsx** - Текстовые поля
  - Различные типы (text, email, password, number)
  - Состояния ошибок и валидации
- [ ] **Textarea.tsx** - Многострочные поля
- [ ] **Label.astro** - Статические лейблы
- [ ] **InputOTP.tsx** - OTP инпут с логикой

### 3.2 Селекторы и комплексные инпуты (1.5ч)
- [ ] **Select.tsx** - Выпадающий список
  - SelectTrigger, SelectContent, SelectItem, SelectValue
  - Поиск и фильтрация
- [ ] **Command.tsx** - Командная палитра
  - CommandInput, CommandList, CommandGroup, CommandItem
- [ ] **Calendar.tsx** - Календарь (только React island)

## Этап 4: Оверлеи и модальные окна → React islands (3ч)

### 4.1 Диалоги (1.5ч)
- [ ] **Dialog.tsx** - Модальные окна
  - DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription
  - Управление состоянием открытия/закрытия
- [ ] **AlertDialog.tsx** - Диалоги подтверждения
  - AlertDialogAction, AlertDialogCancel
- [ ] **Sheet.tsx** - Боковые панели
  - SheetTrigger, SheetContent, различные позиции

### 4.2 Поповеры и тултипы (1.5ч)
- [ ] **Popover.tsx** - Всплывающие блоки
  - PopoverTrigger, PopoverContent
  - Позиционирование
- [ ] **Tooltip.tsx** - Подсказки
  - TooltipTrigger, TooltipContent, TooltipProvider
- [ ] **HoverCard.tsx** - Карточки при наведении
- [ ] **ContextMenu.tsx** - Контекстные меню
- [ ] **DropdownMenu.tsx** - Выпадающие меню

## Этап 5: Сложные компоненты → React islands (2ч)

### 5.1 Навигация и меню (1ч)
- [ ] **NavigationMenu.tsx** - Сложная навигация
  - NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger
- [ ] **Menubar.tsx** - Строка меню
- [ ] **Tabs.tsx** - Вкладки
  - TabsList, TabsTrigger, TabsContent

### 5.2 Расширенные элементы (1ч)
- [ ] **Accordion.tsx** - Аккордеон
  - AccordionItem, AccordionTrigger, AccordionContent
- [ ] **Collapsible.tsx** - Сворачиваемые блоки
- [ ] **ScrollArea.tsx** - Кастомный скролл
- [ ] **Resizable.tsx** - Изменяемые размеры панелей

## Этап 6: Специальные компоненты (2ч)

### 6.1 Уведомления (1ч)
- [ ] **Toast.tsx** - Тосты
  - ToastProvider, ToastViewport, toast функции
  - Анимации появления/исчезновения
- [ ] **Sonner.tsx** - Альтернативная система тостов
- [ ] **use-toast.ts** - Хук для тостов

### 6.2 Расширенная UI (1ч)
- [ ] **Table.astro** - Статические таблицы
  - TableHeader, TableBody, TableRow, TableCell
- [ ] **Carousel.tsx** - Карусель (только React island)
- [ ] **Chart.tsx** - Графики (только React island)
- [ ] **Drawer.tsx** - Выдвижные панели
- [ ] **Sidebar.tsx** - Боковые панели

## Команды для выполнения

### Создание компонентов
```bash
# Создание Astro компонента
node tm.cjs generate component Badge --type=astro

# Создание React island
node tm.cjs generate component Button --type=react-island

# Миграция существующего компонента
cp src/components/ui/button.tsx astro-migration/src/components/react-islands/
```

### Тестирование
```bash
# Проверка сборки
cd astro-migration && npm run build

# Проверка типов
cd astro-migration && npm run check

# Локальное тестирование
cd astro-migration && npm run dev
```

## Критерии готовности

### Функциональность
- [ ] Все статические компоненты корректно рендерятся в .astro
- [ ] React islands работают с client-side интерактивностью
- [ ] Стили сохранены и адаптированы под Astro
- [ ] TypeScript типы работают без ошибок

### Производительность  
- [ ] Статические компоненты не добавляют JavaScript в бандл
- [ ] React islands загружаются только при необходимости
- [ ] CSS оптимизирован и не дублируется

### Совместимость
- [ ] Компоненты работают с существующим design system
- [ ] CSS переменные корректно используются
- [ ] Темная тема поддерживается
- [ ] Responsive design сохранен

## Файловая структура после миграции

```
astro-migration/src/components/
├── ui/
│   ├── astro/                 # Статические компоненты
│   │   ├── Badge.astro
│   │   ├── Card.astro
│   │   ├── Button.astro       # Статическая версия
│   │   └── ...
│   └── react-islands/         # Интерактивные компоненты  
│       ├── Button.tsx         # С логикой
│       ├── Dialog.tsx
│       ├── Form.tsx
│       └── ...
└── ui.ts                      # Экспорт всех компонентов
```