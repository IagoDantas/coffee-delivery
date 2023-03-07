import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { CoffeeListItem, CoffeeListBadge, CoffeeListActions } from './styles'

interface CoffeeProps {
  id: string
  name: string
  price: number
  description: string
  tags: string[]
  imagePath: string
}

export function Coffee({
  name,
  price,
  description,
  tags,
  imagePath,
}: CoffeeProps) {
  return (
    <CoffeeListItem>
      <img src={`/src/assets/${imagePath}`} alt="" />
      <CoffeeListBadge>
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </CoffeeListBadge>
      <strong>{name}</strong>
      <span>{description}</span>
      <CoffeeListActions>
        <span>R$</span>
        <strong>{price}0</strong>
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
