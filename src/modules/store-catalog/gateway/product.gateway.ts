import Product from '../domain/product.entity'

type ProductGateway = {
  findAll(): Promise<Product[]>
  find(id: string): Promise<Product>
}
export default ProductGateway
