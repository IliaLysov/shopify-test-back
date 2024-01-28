import * as express from "express"
import { Request, Response } from "express"
import * as dotenv from "dotenv"
import "reflect-metadata"
import * as cors from "cors"

dotenv.config()

import { productsRouter } from "./routes/products"
import fetchAndSaveProducts from "./helpers/fetchAndSaveProducts"
import AppDataSource from "./data-source"

const app = express()
app.use(cors())
app.use(express.json())
const { PORT = 8080 } = process.env
app.use('/products', productsRouter)

app.get('*', (req: Request, res: Response) => {
    res.status(505).json({ message: 'Route not found' })
})

AppDataSource.initialize().then(async () => {
    fetchAndSaveProducts()
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
    console.log('Data source initialized')
}).catch(error => console.log(error))
