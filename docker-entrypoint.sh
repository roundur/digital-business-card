#!/bin/sh
set -e

echo "Применение схемы БД..."
npx prisma db push --accept-data-loss

echo "Сид БД..."
node dist/seed.js

echo "Запуск приложения..."
exec node dist/main.js
