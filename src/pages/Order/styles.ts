import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 32px;
`

export const OrderFormWrapper = styled.div`
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
export const OrderForm = styled.form`
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

export const OrderConfirmWrapper = styled.div`
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
    color: ${(props) => props.theme['base-subtitle']};
  }
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
