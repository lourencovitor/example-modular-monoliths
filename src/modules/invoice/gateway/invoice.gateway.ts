import Invoice from '../domain/invoice'

type InvoiceGateway = {
  create(invoice: Invoice): Promise<void>
  find(id: string): Promise<Invoice>
}
export default InvoiceGateway
