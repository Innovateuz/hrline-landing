# HRline — Система управления персоналом

Премиальный одностраничный сайт HR-платформы **HRline**: 3D-композиции, glassmorphism,
мягкие градиенты, плавный скролл и микро-взаимодействия. Трёхъязычный интерфейс
(**English · Русский · Oʻzbekcha**).

## Стек

- **Vite + React 18 + TypeScript**
- **Tailwind CSS** — дизайн-система (цвета бренда, тени, анимации в `tailwind.config.js`)
- **Framer Motion** — анимации появления, параллакс, переходы состояний
- **Lenis** — инерционный плавный скролл + плавная навигация по якорям

3D-элементы (дашборд в hero, Face ID терминал, смартфоны, зарплатный чек) собраны
на CSS 3D transforms + Framer Motion — без тяжёлого WebGL, чтобы не терять
производительность на мобильных.

## Команды

```bash
npm install
npm run dev        # локальная разработка → http://localhost:5173
npm run build      # прод-сборка в dist/  (tsc --noEmit + vite build)
npm run preview    # предпросмотр прод-сборки
```

Параметр `?nolenis` в URL отключает Lenis (нативный скролл) — удобно для отладки.

## Мультиязычность (i18n)

Три языка: `ru`, `en`, `uz`. Переключатель — в шапке, мобильном меню и футере.

- `src/i18n/ru.ts` — эталонный словарь, задаёт тип `Dict`
- `src/i18n/en.ts`, `src/i18n/uz.ts` — переводы той же формы
- `src/i18n/index.tsx` — `I18nProvider`, хук `useI18n() → { lang, setLang, t }`

Язык при первом заходе определяется по `navigator.language` (`ru`/`uz` → сам язык,
иначе `ru`), затем сохраняется в `localStorage` (`hrline:lang`). При смене языка
обновляются `<html lang>`, `<title>`, `meta[name=description]` и Open Graph теги.

Числа и контакты вынесены в `src/data/config.ts` и не переводятся; денежная единица
и слово «часов» берутся из `t.units`.

## Структура

```
src/
  App.tsx                 — I18nProvider + сборка секций
  data/config.ts          — числа, контакты, якоря секций, formatNum
  i18n/                   — ru.ts · en.ts · uz.ts · index.tsx
  hooks/
    useLenis.ts           — плавный скролл + якорная навигация
    useReveal.ts          — надёжный триггер «элемент в зоне видимости»
    useCountUp.ts         — счётчик чисел при скролле
    usePointerParallax.ts — параллакс по движению мыши
  components/
    layout/     Header, Footer
    ui/         Button, SectionTitle, Reveal, Icon, Logo, Avatar,
                Donut, GlowField, KPIWidget, LanguageSwitcher
    mockups/    DashboardMockup, FaceIdTerminal, PhoneMockup,
                PhoneScreens, PayrollDashboard
    sections/   Hero, PainPoints, Attendance, Onboarding, KPISection,
                MobileApp, Payroll, FinalCTA, ContactForm
```

## Форма заявки

`ContactForm` реализует клиентскую валидацию (сообщения об ошибках — из словаря)
и состояние успеха. Отправка данных на бэкенд не подключена — точку интеграции
см. в `onSubmit` (`src/components/sections/ContactForm.tsx`).

## Доступность и SEO

- Семантические теги, один `<h1>`, корректная иерархия заголовков
- `<html lang>` синхронизируется с выбранным языком
- `prefers-reduced-motion` отключает Lenis и ускоряет анимации
- Мета-теги, Open Graph и Twitter Card — в `index.html`, локализуются на лету
- Навигация с клавиатуры, `aria`-атрибуты на интерактивных элементах
