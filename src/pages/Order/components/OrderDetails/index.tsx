import { Minus, Plus, Trash } from 'phosphor-react'
import expressoTradicional from '../../../../assets/expresso.png'
import expressoCremoso from '../../../../assets/expresso-cremoso.png'

import {
  OrderConfirm,
  OrderConfirmWrapper,
  OrderConfirmButton,
  PriceDetails,
  SelectedCoffee,
  Separator,
} from './styles'

export function OrderDetails() {
  return (
    <OrderConfirmWrapper>
      <h1>Cafés selecionados</h1>
      <OrderConfirm>
        <SelectedCoffee>
          <img src={expressoTradicional} alt="" />
          <div>
            <span>Expresso Tradicional</span>
            <div>
              <div>
                <button type="button">
                  <Minus weight="bold" size={14} />
                </button>
                <span>1</span>
                <button type="button">
                  <Plus weight="bold" size={14} />
                </button>
              </div>
              <button type="button">
                <Trash weight="bold" size={16} />
                Remover
              </button>
            </div>
          </div>
          <strong>R$ 9,90</strong>
        </SelectedCoffee>
        <Separator />
        <SelectedCoffee>
          <img src={expressoCremoso} alt="" />
          <div>
            <span>Expresso Cremoso</span>
            <div>
              <div>
                <button type="button">
                  <Minus weight="bold" size={14} />
                </button>
                <span>1</span>
                <button type="button">
                  <Plus weight="bold" size={14} />
                </button>
              </div>
              <button type="button">
                <Trash weight="bold" size={16} />
                Remover
              </button>
            </div>
          </div>
          <strong>R$ 19,90</strong>
        </SelectedCoffee>
        <Separator />
        <PriceDetails>
          <div>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </div>
        </PriceDetails>
        <OrderConfirmButton type="submit">Confirmar pedido</OrderConfirmButton>
      </OrderConfirm>
    </OrderConfirmWrapper>
  )
}
