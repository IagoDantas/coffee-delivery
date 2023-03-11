import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 32px;
`

export const OrderAddressFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  h1 {
    font-size: 18px;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 130%;
    text-align: start;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const OrderAddressForm = styled.form`
  display: flex;
  width: 640px;
  height: 372px;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  border-radius: 6px;
  gap: 12px;
  background: ${(props) => props.theme['base-card']};
`
export const OrderAddressTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  > span {
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }
`
export const OrderAddressDescription = styled.div`
  position: relative;
  font-size: 14px;
  left: 30px;
  line-height: 130%;
  top: 2px;
`
export const OrderConfirmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  h1 {
    font-size: 18px;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 40px;
  width: 560px;
  height: 216px;
`

export const OrderAddressFormHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const OrderAddressBaseInput = styled.input`
  display: flex;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  height: 42px;
  gap: 4px;
  padding: 12px;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 14px;
    line-height: 130%;
  }
`

export const OrderAddressRuaInput = styled(OrderAddressBaseInput)`
  align-self: stretch;
`
export const OrderAddressNumeroInput = styled(OrderAddressBaseInput)``

export const OrderAddressComplementoInput = styled(OrderAddressBaseInput)`
  align-self: stretch;
  width: 348px;
`
export const OrderAddressCidadeInput = styled(OrderAddressBaseInput)`
  width: 276px;
  align-self: stretch;
`

export const OrderAddressUFInput = styled(OrderAddressBaseInput)`
  width: 60px;
`

export const OrderConfirm = styled.div`
  display: flex;
  width: 448px;
  height: 498px;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  border-radius: 6px 44px;
  gap: 12px;
  background: ${(props) => props.theme['base-card']};
`
export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  width: 640px;
  height: 207px;
  background: #f3f2f2;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const PaymentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  > span {
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }
`

export const PaymentDescription = styled.span`
  position: relative;
  font-size: 14px;
  left: 30px;
  line-height: 130%;
  top: 2px;
`
export const PaymentButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: none;
    padding: 16px;
    gap: 12px;
    width: 180px;
    height: 52px;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
    &:focus {
      background: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};
      box-shadow: 0 0 0 0;
    }

    span {
      font-size: 12px;
      line-height: 160%;
      color: ${(props) => props.theme['base-text']};
      text-transform: uppercase;
    }
  }
`
