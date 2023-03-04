export type ProcessPaymentInputDto = {
  orderId: string
  amount: number
}

export type ProcessPaymentOutputDto = {
  transactionId: string
  orderId: string
  amount: number
  status: string
  createdAt: Date
  updatedAt: Date
}
