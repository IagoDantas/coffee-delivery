import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
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

export const OrderAddressFormHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 40px;
  width: 560px;
  height: 216px;
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
  transition: all 0.2s;
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

export const Separator = styled.div`
  width: 368px;
  height: 0;
  border: 1px solid ${(props) => props.theme['base-button']};
`
export const SelectedCoffee = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  width: 368px;
  height: 80px;
  padding: 8px 4px;

  > img {
    width: 64px;
    height: 64px;
  }

  > strong {
    text-align: right;
    line-height: 130%;
    margin-left: 20px;
    font-weight: 700;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  > div > span {
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  > div > div > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['base-button']};
    border: 0;
    border-radius: 6px;
    line-height: 0;
    color: ${(props) => props.theme['base-text']};
    font-size: 12px;
    cursor: pointer;
    width: 91px;
    height: 32px;
    text-transform: uppercase;
    line-height: 160%;
    gap: 4px;
    transition: all 0.2s;
    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
  > div > div {
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin-top: 8px;
  }

  > div > div > div {
    display: flex;
    align-items: center;
    gap: 4px;
    width: 72px;
    height: 32px;
    justify-content: center;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
  }
  > div > div > div > button {
    display: flex;
    align-items: center;
    margin: 9px 8px;
    border-radius: 4px;
    justify-content: center;
    cursor: pointer;
    background: ${(props) => props.theme['base-button']};
    border: 0;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;

    svg {
      transition: all 0.2s;
    }

    &:hover {
      svg {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`
export const PriceDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 368px;
  height: 92px;
  align-selft: stretch;
  margin-top: 24px;
  gap: 12px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    span:first-child {
      font-size: 14px;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
      font-weight: 400;
    }

    strong {
      font-size: 20px;
      line-height: 130%;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
export const OrderConfirmButton = styled.button`
  margin-top: 24px;
  width: 368px;
  border: 0;
  height: 46px;
  gap: 4px;
  padding: 12px 8px;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  line-height: 160%;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
