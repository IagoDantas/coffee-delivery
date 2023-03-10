// import { OrderForm } from './components/OrderForm'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  OrderConfirm,
  OrderConfirmWrapper,
  OrderContainer,
  OrderForm,
  OrderFormWrapper,
  PaymentWrapper,
  PaymentHeader,
  PaymentTitle,
  PaymentButtonWrapper,
  PaymentDescription,
} from './styles'

export function Order() {
  return (
    <OrderContainer>
      {/* <OrderForm /> */}
      <OrderFormWrapper>
        <h1>Complete seu pedido</h1>
        <OrderForm></OrderForm>
        <PaymentWrapper>
          <PaymentHeader>
            <PaymentTitle>
              <CurrencyDollar size={22} />
              <span>Pagamento</span>
            </PaymentTitle>
            <PaymentDescription>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar.
            </PaymentDescription>
          </PaymentHeader>
          <PaymentButtonWrapper>
            <button type="button">
              <CreditCard />
              <span>Cartão de crédito</span>
            </button>

            <button type="button">
              <Bank />
              <span>Cartão de débito</span>
            </button>

            <button type="button">
              <Money size={16} />
              <span>Dinheiro</span>
            </button>
          </PaymentButtonWrapper>
        </PaymentWrapper>
      </OrderFormWrapper>
      <OrderConfirmWrapper>
        <h1>Cafés selecionados</h1>
        <OrderConfirm>
          <div></div>
        </OrderConfirm>
      </OrderConfirmWrapper>
    </OrderContainer>
  )
}
