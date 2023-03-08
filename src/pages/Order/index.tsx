// import { OrderForm } from './components/OrderForm'
import {
  OrderConfirm,
  OrderConfirmWrapper,
  OrderContainer,
  OrderForm,
  OrderFormWrapper,
} from './styles'

export function Order() {
  return (
    <OrderContainer>
      {/* <OrderForm /> */}
      <OrderFormWrapper>
        <h1>Complete seu pedido</h1>
        <OrderForm></OrderForm>
      </OrderFormWrapper>
      <OrderConfirmWrapper>
        <h1>Cafés Selecionados até o momento</h1>
        <OrderConfirm></OrderConfirm>
      </OrderConfirmWrapper>
    </OrderContainer>
  )
}
