# Shopify Test - Node.js Express Backend

This is the backend server for the Shopify Test React Vite app. It connects to the Shopify GraphQL API using Node.js, Express, and PostgreSQL.

## Frontend Link

Explore the live demo of the corresponding frontend app: [Shopify Test Frontend](https://ilialysov.github.io/shopify-test/)

## Backend Endpoint

The backend server exposes product data through the following endpoint: [Get All Products](https://shopify-back-test-dnoxmuzgta-lm.a.run.app/products/all)

## Shopify GraphQL API

The backend server interacts with the Shopify GraphQL API to fetch and manage product data.

## Environment Variables

Before running the backend server, ensure that you have set the following environment variables in a `.env` file at the root of the project:

```env
DATABASE_URL=your_postgres_database_url
ACCESS_TOKEN=your_shopify_access_token
SHOP_NAME=your_shopify_shop_name
```

# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command
