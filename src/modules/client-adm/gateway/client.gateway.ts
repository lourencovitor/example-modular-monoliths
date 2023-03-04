import Client from '../domain/client.entity'

type ClientGateway = {
  add(client: Client): Promise<void>
  find(id: string): Promise<Client>
}
export default ClientGateway
