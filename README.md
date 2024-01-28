# Shopify Test - Node.js Express Backend

This is the backend server for the Shopify Test React Vite app. It connects to the Shopify GraphQL API using Node.js, Express, and PostgreSQL.

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
