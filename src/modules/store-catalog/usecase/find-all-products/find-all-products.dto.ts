export type FindAllProductsDto = {
  products: {
    id: string
    name: string
    description: string
    salesPrice: number
  }[]
}

export type FindAllProductsOutputDto = {
  products: {
    id: string
    name: string
    description: string
    salesPrice: number
  }[]
}
