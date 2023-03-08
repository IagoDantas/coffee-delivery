import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
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
    text-align: left;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const OrderConfirm = styled.div`
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
