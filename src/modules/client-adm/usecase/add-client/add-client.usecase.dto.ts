export type AddClientInputDto = {
  id?: string
  name: string
  document: string
  email: string
  street: string
  number: string
  complement: string
  city: string
  state: string
  zipCode: string
}

export type AddClientOutputDto = {
  id: string
  name: string
  email: string
  document: string
  street: string
  number: string
  complement: string
  city: string
  state: string
  zipCode: string
  createdAt: Date
  updatedAt: Date
}
