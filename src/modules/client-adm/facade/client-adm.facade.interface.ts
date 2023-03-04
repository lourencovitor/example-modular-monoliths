export type AddClientFacadeInputDto = {
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

export type FindClientFacadeInputDto = {
  id: string
}

export type FindClientFacadeOutputDto = {
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
}

type ClientAdmFacadeInterface = {
  add(input: AddClientFacadeInputDto): Promise<void>
  find(input: FindClientFacadeInputDto): Promise<FindClientFacadeOutputDto>
}
export default ClientAdmFacadeInterface
