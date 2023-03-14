import {
  IntroContainer,
  IntroContent,
  IntroBadges,
  IntroBadgeColumn,
  Badge,
  BadgeIcon,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import introCoffee from '../../../../assets/intro-coffee.png'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          horas
        </span>
        <IntroBadges>
          <IntroBadgeColumn>
            <Badge>
              <BadgeIcon color="yellow-dark">
                <ShoppingCart weight="fill" />
              </BadgeIcon>
              <span>Compra simples e segura</span>
            </Badge>

            <Badge>
              <BadgeIcon color="yellow">
                <Timer weight="fill" />
              </BadgeIcon>
              <span>Entrega rápida e rastreada</span>
            </Badge>
          </IntroBadgeColumn>
          <IntroBadgeColumn>
            <Badge>
              <BadgeIcon color="base">
                <Package size={20} weight="fill" />
              </BadgeIcon>
              <span>Embalagem mantém o café intacto</span>
            </Badge>

            <Badge>
              <BadgeIcon color="purple">
                <Coffee weight="fill" />
              </BadgeIcon>
              <span>O café chega fresquinho para você</span>
            </Badge>
          </IntroBadgeColumn>
        </IntroBadges>
      </IntroContent>

      <img
        src={introCoffee}
        alt="A coffee with yellow background"
        title="A delicious coffee"
        draggable={false}
      />
    </IntroContainer>
  )
}
