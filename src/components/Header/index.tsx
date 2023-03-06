import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavContainer, NavActions, CartButton, LocationActions } from './styles'
export function Header() {
  return (
    <NavContainer>
      <img src={coffeeDeliveryLogo} alt="" draggable="false" />
      <NavActions>
        <LocationActions>
          <MapPin weight="fill" size={18} color="#8047f8" />
          Porto Alegre, RS
        </LocationActions>
        <CartButton type="button">
          <ShoppingCart weight="fill" size={18} />
        </CartButton>
      </NavActions>
    </NavContainer>
  )
}
