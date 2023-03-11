// import { OrderAddressForm } from './components/OrderAddressForm'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  OrderConfirm,
  OrderConfirmWrapper,
  OrderContainer,
  OrderAddressForm,
  OrderAddressFormWrapper,
  OrderAddressFormHeader,
  PaymentWrapper,
  OrderAddressRuaInput,
  PaymentHeader,
  PaymentTitle,
  PaymentButtonWrapper,
  PaymentDescription,
  OrderAddressTitle,
  OrderAddressDescription,
  FormContainer,
  OrderAddressBaseInput,
  OrderAddressNumeroInput,
  OrderAddressComplementoInput,
  OrderAddressUFInput,
  OrderAddressCidadeInput,
} from './styles'

export function Order() {
  return (
    <OrderContainer>
      {/* <OrderAddressForm /> */}
      <OrderAddressFormWrapper>
        <h1>Complete seu pedido</h1>
        <OrderAddressForm>
          <OrderAddressFormHeader>
            <OrderAddressTitle>
              <MapPinLine size={22} />
              <span>Endereço de Entrega</span>
            </OrderAddressTitle>
            <OrderAddressDescription>
              Informe o endereço onde deseja receber seu pedido
            </OrderAddressDescription>
          </OrderAddressFormHeader>
          <form action="">
            <FormContainer>
              <OrderAddressBaseInput placeholder="CEP" />
              <OrderAddressRuaInput placeholder="Rua" />
              <div style={{ display: 'flex', gap: '12px' }}>
                <OrderAddressNumeroInput placeholder="Número" />
                <OrderAddressComplementoInput placeholder="Complemento" />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <OrderAddressNumeroInput placeholder="Bairro" />
                <OrderAddressCidadeInput placeholder="Cidade" />
                <OrderAddressUFInput placeholder="UF" />
              </div>
            </FormContainer>
          </form>
        </OrderAddressForm>
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
      </OrderAddressFormWrapper>
      <OrderConfirmWrapper>
        <h1>Cafés selecionados</h1>
        <OrderConfirm>
          <div></div>
        </OrderConfirm>
      </OrderConfirmWrapper>
    </OrderContainer>
  )
}
