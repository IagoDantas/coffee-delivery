import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  SuccessContainer,
  SuccessTitle,
  SuccessParagraph,
  SuccessItems,
  BadgeIcon,
  Border,
} from './styles'
import successDelivery from '../../assets/success-delivery.png'

export function OrderConfirmed() {
  return (
    <>
      <SuccessContainer>
        <div>
          <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
          <SuccessParagraph>
            Agora é só aguardar que logo o café chegará até você
          </SuccessParagraph>
          <Border>
            <SuccessItems>
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
            </SuccessItems>
          </Border>
        </div>
        <img src={successDelivery} alt="" />
      </SuccessContainer>
    </>
  )
}
