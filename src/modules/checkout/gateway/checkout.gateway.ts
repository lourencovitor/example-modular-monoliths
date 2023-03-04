import Order from '../domain/order.entity'

type CheckoutGateway = {
  addOrder(order: Order): Promise<void>
  findOrder(id: string): Promise<Order | null>
}
export default CheckoutGateway
