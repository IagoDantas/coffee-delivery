import styled from 'styled-components'
import introBackgroundImg from '../../../../assets/intro-background.png'
import { rgba } from 'polished'

export const IntroContainer = styled.section`
  max-width: 100vw;
  width: 100%;
  height: 34rem;

  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme.white} 0%,
      ${rgba(theme.background, 0.2)} 50%,
      ${theme.background} 100%
    )`};
  background-size: cover;
  gap: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IntroContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 36.75rem;
  height: 12rem;
  h1 {
    font-size: 3rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-title']};
    font-family: 'Baloo 2', cursive;
  }

  > span {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-subtitle']};
    font-stretch: 100;
    margin-top: 1rem;
  }
`
export const IntroBadges = styled.section`
  display: flex;
  position: relative;
  margin-top: 4.125rem;
  gap: 1.25rem;
  left: -1.7rem;
`
export const IntroBadgeColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Badge = styled.div`
  display: flex;
  gap: 0.75rem;
  display: flex;
  align-items: center;

  > span {
    line-height: 130%;
    color: ${({ theme }) => theme['base-text']};
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
  color: ${({ theme }) => theme.white};
  background: ${(props) => props.theme[BADGE_COLORS[props.color]]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`
