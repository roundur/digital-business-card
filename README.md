# API Цифровой Визитки (Digital Business Card)

Backend-приложение, предоставляющее GraphQL API с информацией о профиле, навыках, опыте работы и проектах.

## Стек технологий

- **TypeScript** / **Node.js**
- **NestJS** — фреймворк приложения
- **GraphQL** (Code-First) + **Apollo Server** — API слой
- **Prisma** — ORM и синхронизация схемы
- **PostgreSQL** — база данных
- **Docker** — контейнеризация

## Быстрый старт

```bash
docker compose up --build
```

Откройте **Apollo Sandbox**: [http://localhost:3000/graphql](http://localhost:3000/graphql)

## Пример запроса (GraphQL)

```graphql
query {
  profile {
    title
    name
    summary
    links
    skills
    experience {
      company
      position
      period
      achievements
    }
    projects {
      name
      url
    }
  }
}
```

## Структура проекта

```text
src/
├── prisma/          # Глобальный модуль Prisma
├── profile/         # Домен профиля (root запрос, ссылки, навыки)
├── experience/      # Домен опыта работы
└── project/         # Домен проектов
```

Каждый модуль построен по паттерну **Model → Service → Resolver**:

| Слой         | Зона ответственности                                |
| ------------ | --------------------------------------------------- |
| **Model**    | Описание GraphQL ObjectType (схема)                 |
| **Service**  | Работа с базой данных через Prisma                  |
| **Resolver** | Разрешение GraphQL полей (делегирует в Service)     |
