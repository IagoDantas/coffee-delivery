import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  NavContainer,
  NavActions,
  LocationActions,
  CartCounter,
  Cart,
} from './styles'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <NavContainer>
      <NavLink to="/">
        <img src={coffeeDeliveryLogo} alt="" draggable="false" />
      </NavLink>
      <NavActions>
        <LocationActions>
          <MapPin weight="fill" size={18} color="#8047f8" />
          Porto Alegre, RS
        </LocationActions>
        <Cart>
          <CartCounter>
            <span>3</span>
          </CartCounter>
          <NavLink to="/order">
            <ShoppingCart weight="fill" size={18} />
          </NavLink>
        </Cart>
      </NavActions>
    </NavContainer>
  )
}
