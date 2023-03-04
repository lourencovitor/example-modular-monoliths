import Product from '../domain/product.entity'

type ProductGateway = {
  add(product: Product): Promise<void>
  find(id: string): Promise<Product>
}
export default ProductGateway
