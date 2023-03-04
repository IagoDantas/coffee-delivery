import styled from 'styled-components'

export const NavContainer = styled.nav`
  padding: 2rem 10rem;
  gap: 51.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LocationActions = styled.span`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  gap: 4px;
  padding: 0.5rem;
  border-radius: 6px;
  line-height: 130%;
  font-size: 0.875rem;
`

export const NavActions = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`

export const CartButton = styled.button`
  background: ${(props) => props.theme['yellow-light']};
  line-height: 0;
  border: 0;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;
  color: ${(props) => props.theme['yellow-dark']};
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
  }
`
