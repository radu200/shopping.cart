## Getting started

The existing code includes a development environment, and an [API](#api) with product data for you to interact with. The relevant API response types can be found in [src/types.ts](src/types.ts). Please do not use `data/products.json` directly.

### Setup



```sh
cd shopping_cart
npm install
```

### Running locally

#### Development

Start the project in development mode.

```sh
npm run dev
```

#### Test

Start the project in test mode.

```sh
npm test
```

#### Production

Build and start the project in production mode.

```sh
npm start
```

## API

The API can be interacted with via `http://localhost:3000/api` and has the following endpoints:

#### `/products`

The `/products` endpoint accepts `GET` requests and will return the first page of 20 products. To retrieve a different page of 20 products, you can pass the `page` query parameter (e.g. `/products?page=2`).

#### `/products/[gtin]`

The `/products/[gtin]` endpoint accepts `GET` requests and will return a product matching the GTIN (e.g. `/products/8005610625720`). If no product is found, the API will respond with a `404` status.
