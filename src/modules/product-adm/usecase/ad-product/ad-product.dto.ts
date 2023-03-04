export type AddProductInputDto = {
  id?: string
  name: string
  description: string
  purchasePrice: number
  stock: number
}

export type AddProductOutputDto = {
  id: string
  name: string
  description: string
  purchasePrice: number
  stock: number
  createdAt: Date
  updatedAt: Date
}
