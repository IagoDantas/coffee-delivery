// import { OrderAddressForm } from './components/OrderAddressForm'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'

import expressoTradicional from '../../assets/expresso.png'
import expressoCremoso from '../../assets/expresso-cremoso.png'

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
  SelectedCoffee,
  Separator,
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
          <SelectedCoffee>
            <img src={expressoTradicional} alt="" />
            <div>
              <span>Expresso Tradicional</span>
              <div>
                <div>
                  <button type="button">
                    <Minus weight="bold" size={14} />
                  </button>
                  <span>1</span>
                  <button type="button">
                    <Plus weight="bold" size={14} />
                  </button>
                </div>
                <button type="button">
                  <Trash weight="bold" size={16} />
                  Remover
                </button>
              </div>
            </div>
            <strong>R$ 9,90</strong>
          </SelectedCoffee>
          <Separator />
          <SelectedCoffee>
            <img src={expressoCremoso} alt="" />
            <div>
              <span>Expresso Cremoso</span>
              <div>
                <div>
                  <button type="button">
                    <Minus weight="bold" size={14} />
                  </button>
                  <span>1</span>
                  <button type="button">
                    <Plus weight="bold" size={14} />
                  </button>
                </div>
                <button type="button">
                  <Trash weight="bold" size={16} />
                  Remover
                </button>
              </div>
            </div>
            <strong>R$ 19,90</strong>
          </SelectedCoffee>
          <Separator />
        </OrderConfirm>
      </OrderConfirmWrapper>
    </OrderContainer>
  )
}
