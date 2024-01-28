import { Request, Response } from "express"
import AppDataSource from "../data-source"
import { Product } from "../entity/product.entity"


export class ProductController {
    static async getProducts(req: Request, res: Response) {
        try {
            const products = await AppDataSource.getRepository(Product).find()
            console.log('products')
            res.json(products)
        } catch (error) {
            res.json(error)
        }
    }
}