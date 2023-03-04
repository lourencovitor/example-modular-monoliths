export type PlaceOrderInputDto = {
  clientId: string
  products: {
    productId: string
  }[]
}

export type PlaceOrderOutputDto = {
  id: string
  invoiceId: string
  status: string
  total: number
  products: {
    productId: string
  }[]
}
