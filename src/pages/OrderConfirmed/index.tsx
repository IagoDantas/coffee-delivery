import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  OrderConfirmContainer,
  OrderConfirmTitle,
  OrderConfirmParagraph,
  OrderConfirmItems,
  BadgeIcon,
  Border,
} from './styles'
import orderConfirmDelivery from '../../assets/success-delivery.png'

export function OrderConfirmed() {
  return (
    <>
      <OrderConfirmContainer>
        <div>
          <OrderConfirmTitle>Uhu! Pedido confirmado</OrderConfirmTitle>
          <OrderConfirmParagraph>
            Agora é só aguardar que logo o café chegará até você
          </OrderConfirmParagraph>
          <Border>
            <OrderConfirmItems>
              <div>
                <BadgeIcon color="purple">
                  <MapPin weight="fill" />
                </BadgeIcon>
                <div>
                  <p>
                    Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  </p>
                  <p>Farrapos - Porto Alegre, RS</p>
                </div>
              </div>
              <div>
                <BadgeIcon color="yellow">
                  <Timer weight="fill" />
                </BadgeIcon>

                <div>
                  <p>Previsão de entrega</p>
                  <strong>20 min - 30 min</strong>
                </div>
              </div>
              <div>
                <BadgeIcon color="yellow-dark">
                  <CurrencyDollar weight="fill" />
                </BadgeIcon>

                <div>
                  <p>Pagamento na entrega</p>
                  <strong>Cartão de Crédito</strong>
                </div>
              </div>
            </OrderConfirmItems>
          </Border>
        </div>
        <img src={orderConfirmDelivery} alt="" />
      </OrderConfirmContainer>
    </>
  )
}
