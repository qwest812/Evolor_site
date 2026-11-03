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

## Деплой на сервер

Сайт работает за nginx магазина (контейнер `erbology_nginx`, сеть `erb-network`), SSL — Let's Encrypt.
DNS (ukraine.com.ua): запись `A` `evolor` → `168.119.95.236`, без `AAAA` для `evolor`.

```sh
git clone git@github.com:qwest812/Evolor_site.git && cd Evolor_site
# имя сети nginx магазина (на проде может быть с префиксом проекта)
echo "ERB_NETWORK=$(docker inspect -f '{{range $k, $v := .NetworkSettings.Networks}}{{$k}}{{end}}' erbology_nginx)" > .env
docker compose up -d --build
deploy/ssl.sh init     # конфиг в conf.d nginx магазина + сертификат + HTTPS
```

Продление сертификата — cron раз в день:
`0 4 * * * cd /путь/к/Evolor_site && deploy/ssl.sh renew`

Обновление сайта: `git pull && docker compose up -d --build`.

Ссылки для Google Play Console:
- Privacy policy — https://evolor.tagumplay.com/privacy/
- Account deletion — https://evolor.tagumplay.com/delete-account/
- Terms of Use — https://evolor.tagumplay.com/terms/

## TODO

- [ ] выложить сайт на сервер (см. выше) и проверить ссылки в Play Console
- [ ] ссылка на App Store в `src/config.ts` после релиза на iOS
- [ ] убрать из сборки игры лишние разрешения (`ACCESS_COARSE_LOCATION`, `BLUETOOTH*`, `INSTALL_PACKAGES`, `DUMP` — их приносит `play-services-nearby`)
