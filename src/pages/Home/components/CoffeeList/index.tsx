import {
  CoffeeListWrapper,
  CoffeeListSubtitle,
  CoffeeListContent,
  CoffeeListItem,
  CoffeeListBadge,
  CoffeeListActions,
} from './style'

import cafe from '../../../../assets/expresso.png'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

export function CoffeeList() {
  return (
    <CoffeeListWrapper>
      <CoffeeListSubtitle>Nossos cafés</CoffeeListSubtitle>
      <CoffeeListContent>
        <CoffeeListItem>
          <img src={cafe} alt="" />
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
        <CoffeeListItem>
          <img src={cafe} alt="" />
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
        <CoffeeListItem>
          <img src={cafe} alt="" />
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
        <CoffeeListItem>
          <img src={cafe} alt="" />
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
        <CoffeeListItem>
          <img src={cafe} alt="" />
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
        <CoffeeListItem>
          <img src={cafe} alt="" />
          <CoffeeListBadge>
            <span>TRADICIONAL</span>
            <span>GELADO</span>
            <span>COM LEITE</span>
          </CoffeeListBadge>

          <strong>Expresso Americano</strong>
          <span>Expresso diluído, menos intenso que o tradicional.</span>
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
        <CoffeeListItem>
          <img src={cafe} alt="" />
          <CoffeeListBadge>
            <span>TRADICIONAL</span>
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
        <CoffeeListItem>
          <img src={cafe} alt="" />
          <CoffeeListBadge>
            <span>TRADICIONAL</span>
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
        <CoffeeListItem>
          <img src={cafe} alt="" />
          <CoffeeListBadge>
            <span>TRADICIONAL</span>
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
        <CoffeeListItem>
          <img src={cafe} alt="" />
          <CoffeeListBadge>
            <span>TRADICIONAL</span>
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
        <CoffeeListItem>
          <img src={cafe} alt="" />
          <CoffeeListBadge>
            <span>TRADICIONAL</span>
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
        <CoffeeListItem>
          <img src={cafe} alt="" />
          <CoffeeListBadge>
            <span>TRADICIONAL</span>
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
        <CoffeeListItem>
          <img src={cafe} alt="" />
          <CoffeeListBadge>
            <span>TRADICIONAL</span>
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
      </CoffeeListContent>
    </CoffeeListWrapper>
  )
}
