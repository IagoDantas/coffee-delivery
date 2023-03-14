import { PaymentForm } from '../PaymentForm'

import { MapPinLine } from 'phosphor-react'

import {
  OrderAddressForm,
  OrderAddressFormWrapper,
  OrderAddressFormHeader,
  OrderAddressRuaInput,
  OrderAddressTitle,
  OrderAddressDescription,
  FormContainer,
  OrderAddressBaseInput,
  OrderAddressNumeroInput,
  OrderAddressComplementoInput,
  OrderAddressUFInput,
  OrderAddressCidadeInput,
} from './styles'

export function OrderForm() {
  return (
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
      </OrderAddressForm>
      <PaymentForm />
    </OrderAddressFormWrapper>
  )
}
