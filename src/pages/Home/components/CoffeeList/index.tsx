import { Coffee } from '../Coffee'
import {
  CoffeeListWrapper,
  CoffeeListSubtitle,
  CoffeeListContent,
} from './style'

import { coffees } from '../../../../mocks/coffees'

export function CoffeeList() {
  return (
    <CoffeeListWrapper>
      <CoffeeListSubtitle>Nossos cafés</CoffeeListSubtitle>
      <CoffeeListContent>
        {coffees.map((coffee) => {
          return (
            <Coffee
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              price={coffee.price}
              description={coffee.description}
              tags={coffee.tags}
              imagePath={coffee.imagePath}
            />
          )
        })}
      </CoffeeListContent>
    </CoffeeListWrapper>
  )
}
