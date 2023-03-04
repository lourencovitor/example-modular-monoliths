export type AddProductFacadeInputDto = {
  id?: string
  name: string
  description: string
  purchasePrice: number
  stock: number
}

export type CheckStockFacadeInputDto = {
  productId: string
}

export type CheckStockFacadeOutputDto = {
  productId: string
  stock: number
}

type ProductAdmFacadeInterface = {
  addProduct(input: AddProductFacadeInputDto): Promise<void>
  checkStock(
    input: CheckStockFacadeInputDto
  ): Promise<CheckStockFacadeOutputDto>
}
export default ProductAdmFacadeInterface
