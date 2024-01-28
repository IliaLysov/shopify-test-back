import * as express from 'express';
import { ProductController } from '../controllers/product.controller';
const Router = express.Router();

Router.get(
    '/all',
    ProductController.getProducts
)

export { Router as productsRouter }