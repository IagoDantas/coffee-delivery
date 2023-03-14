import styled from 'styled-components'

export const OrderConfirmContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 102px;
  margin-top: 80px;

  img {
    position: relative;
    display: flex;
    width: 492px;
    height: 293px;
    top: 50px;
  }
`

export const OrderConfirmTitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme['yellow-dark']};
  font-family: 'Baloo 2', cursive;
  line-height: 130%;
`
export const OrderConfirmParagraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 130%;
`
export const Border = styled.div`
  margin-top: 2.5rem;

  width: 100%;
  padding: 1px;
  max-width: 526px;
  border-radius: 6px 36px;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  overflow: hidden;
`
export const OrderConfirmItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: ${(props) => props.theme.background};
  width: 100%;
  height: 100%;
  border-radius: 6px 36px;
  gap: 2rem;
  > div {
    display: flex;
    gap: 12px;
  }
`

const BADGE_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  base: 'base-text',
  purple: 'purple',
} as const

interface ColorProps {
  color: keyof typeof BADGE_COLORS
}

export const BadgeIcon = styled.div<ColorProps>`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[BADGE_COLORS[props.color]]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`
