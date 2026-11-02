# Evolor — сайт игры

Статический сайт на [Astro](https://astro.build): evolor.tagumplay.com.
9 языков, как в игре: en (в корне, `/game`), остальные с префиксом (`/ru/game`).

## Команды

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # собирает в dist/
npm run preview  # смотреть собранный dist/
```

Нужен Node ≥ 22.12.

## Где что лежит

| Что | Где |
|---|---|
| Ссылки на сторы, Discord, email | `src/config.ts` |
| Все тексты интерфейса на 9 языках | `src/i18n/ui.ts` |
| Страницы | `src/pages/[...lang]/` (одна страница рендерится на все языки) |
| Новости | `src/content/blog/<slug>/<lang>.md` |
| Privacy / Terms (только английский) | `src/legal/*.md` |
| Стили | `src/styles/global.css` |
| Иконки и фоны-заглушки фич | `src/components/features.ts` |
| Арт-заглушка в hero | `src/components/HeroArt.astro` |

## Как добавить новость

1. Создать папку `src/content/blog/<slug>/` (slug пойдёт в URL: `/blog/<slug>`).
2. Положить `en.md` — обязательно, это фолбэк для языков без перевода.
3. По желанию добавить переводы: `ru.md`, `fr.md`, … Без перевода читатель увидит английский текст с пометкой.

```md
---
title: Заголовок
description: Короткое описание для карточки и SEO
date: 2026-11-01
cover: ./cover.png   # необязательно, картинка рядом с файлом
draft: false         # true — не публиковать
---

Текст в Markdown.
```

## Деплой (Cloudflare Pages)

1. Запушить репо на GitHub/GitLab.
2. Cloudflare → Workers & Pages → Create → Pages → подключить репо.
3. Build command `npm run build`, output `dist`, переменная `NODE_VERSION=22`.
4. Custom domains → `evolor.tagumplay.com` (CNAME на `<project>.pages.dev`).

## TODO перед релизом

- [ ] реальные ссылки на Google Play, App Store, Discord и email в `src/config.ts`
- [ ] логотип, ключевой арт (вместо `HeroArt.astro`), скриншоты (вместо заглушек на главной), картинки фич на странице игры
- [ ] Privacy Policy и Terms проверить юристом: юрлицо, адрес, список SDK клиента (см. TODO в `src/legal/*.md`)
- [ ] OG-картинка для превью в соцсетях
