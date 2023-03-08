import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 93.75rem;
  height: 6.5rem;
  padding: 2rem 10rem;
  position: sticky;
  gap: 51.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a,
  > img {
    position: relative;
    left: 4.6rem;
    border-radius: 6px;
    transition: all 0.2s;
  }
  img {
    padding: 4px;
  }
`

export const NavActions = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
`

export const LocationActions = styled.span`
  display: flex;
  height: 2.375rem;
  width: 8.9375rem;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  gap: 4px;
  padding: 0.5rem;
  border-radius: 6px;
  font-weight: 600;
  line-height: 130%;
  font-size: 0.875rem;
`
export const Cart = styled.div`
  a {
    background: ${(props) => props.theme['yellow-light']};
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    border: 0;
    width: 2.375rem;
    height: 2.375rem;
    text-align: center;
    border-radius: 6px;
    padding: 0.5rem;
    color: ${(props) => props.theme['yellow-dark']};
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.white};
    }
    &.active {
      background: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.white};
      border-bottom: 2px solid ${(props) => props.theme['yellow-dark']};
    }
  }
`
export const CartCounter = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 9.6rem;
  top: 1.7rem;
  background: ${(props) => props.theme['yellow-dark']};
  padding: 0px;
  width: 20px;
  height: 20px;
  border-radius: 1000px;

  span {
    color: ${(props) => props.theme.white};
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    width: 20px;
    height: 14px;
    line-height: 130%;
  }
`
