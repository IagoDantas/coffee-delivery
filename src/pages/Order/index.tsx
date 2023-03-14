// import { OrderAddressForm } from './components/OrderAddressForm'

import { OrderDetails } from './components/OrderDetails'
import { OrderForm } from './components/OrderForm'
import { OrderContainer } from './styles'

export function Order() {
  return (
    <form action="">
      <OrderContainer>
        <OrderForm />
        <OrderDetails />
      </OrderContainer>
    </form>
  )
}
