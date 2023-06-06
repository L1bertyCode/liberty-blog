## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта в dev режиме
```

---

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev
  server
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev` - Запуск frontend проекта на webpack
  dev server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на
  vite + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не
  минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style
  линтером
- `npm run test:unit` - запуск unit тестов с jest
- `npm run test:ui` - запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для
  скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для
  скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для
  скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run prepare` - прекоммит хуки
- `npm run generate:slice` - Скрипт для генерации FSD
  слайсов

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced
design

Ссылка на документацию -
[feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Работа с переводами

В проекте используется библиотека i18next для работы с
переводами. Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для
webstorm/vscode

Документация i18next -
[https://react.i18next.com/](https://react.i18next.com/)

---

## Тесты

В проекте используются 4 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing
   library -`npm run test:unit`
3. Скриншотное тестирование с loki `npm run test:ui`
4. e2e тестирование с Cypress `npm run test:e2e`

