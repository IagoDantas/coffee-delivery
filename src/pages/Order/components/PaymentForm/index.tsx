import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import {
  PaymentWrapper,
  PaymentHeader,
  PaymentTitle,
  PaymentButtonWrapper,
  PaymentDescription,
} from './styles'

export function PaymentForm() {
  return (
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
  )
}
