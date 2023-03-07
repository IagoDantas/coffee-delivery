import { Coffee } from '../Coffee'
import {
  CoffeeListWrapper,
  CoffeeListSubtitle,
  CoffeeListContent,
} from './style'

export function CoffeeList() {
  return (
    <CoffeeListWrapper>
      <CoffeeListSubtitle>Nossos cafés</CoffeeListSubtitle>
      <CoffeeListContent>
        <Coffee />
      </CoffeeListContent>
    </CoffeeListWrapper>
  )
}
