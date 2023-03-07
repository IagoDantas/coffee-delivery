import styled from 'styled-components'
export const CoffeeListWrapper = styled.section`
  position: relative;
  width: 1580px;
  left: 0px;
  top: 0;
  margin: 0 auto;
  padding-bottom: 7.8125rem;
`
export const CoffeeListSubtitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  width: 200px;
  position: relative;
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 800;
  color: ${({ theme }) => theme['base-subtitle']};
  left: 14.7rem;
  top: 2rem;
`
export const CoffeeListContent = styled.div`
  display: flex;
  margin: 3.375rem auto;
  width: 1320px;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
`
