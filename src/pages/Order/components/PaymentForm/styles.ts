import styled from 'styled-components'

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
