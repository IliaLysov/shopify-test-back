import axios from 'axios';
import AppDataSource from '../data-source';
import { Product } from '../entity/product.entity';

export default async () => {
    try {
        const shop = process.env.SHOP_NAME;
        const accessToken = process.env.ACCESS_TOKEN;
    
        const query = `
          query {
            products(first: 10) {
              edges {
                node {
                  id
                  bodyHtml
                  images(first: 5) {
                    nodes {
                      src
                    }
                  }
                }
              }
            }
          }
        `;
    
        const response = await axios.post(
          `https://${shop}.myshopify.com/admin/api/2024-01/graphql.json`,
          { query },
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Access-Token': accessToken,
            },
          }
        );
    
        const products = response.data.data.products.edges.map((edge) => edge.node);
        const productsToSave = products.map((product) => ({
          productId: product.id,
          bodyHtml: product.bodyHtml,
          imageSrc: product.images.nodes[0].src,
        }));

        const productRepository = AppDataSource.getRepository(Product);
        await productRepository.save(productsToSave);
      } catch (error) {
        console.error(error);
        throw error;
    }
}