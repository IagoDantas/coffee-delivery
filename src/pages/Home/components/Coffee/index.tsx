import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import cafeExpresso from '../../../../assets/expresso.png'

import { CoffeeListItem, CoffeeListBadge, CoffeeListActions } from './styles'
export function Coffee() {
  return (
    <CoffeeListItem>
      <img src={cafeExpresso} alt="" />
      <CoffeeListBadge>
        <span>especial</span>
        <span>com leite</span>
      </CoffeeListBadge>
      <strong>Expresso Tradicional</strong>
      <span>O tradicional café feito com água quente e grãos moídos</span>
      <CoffeeListActions>
        <span>R$</span>
        <strong>9,90</strong>
        <div>
          <button type="button">
            <Minus weight="bold" />
          </button>
          <span>1</span>
          <button type="button">
            <Plus weight="bold" />
          </button>
        </div>
        <button type="button">
          <ShoppingCartSimple weight="fill" size={22} />
        </button>
      </CoffeeListActions>
    </CoffeeListItem>
  )
}
