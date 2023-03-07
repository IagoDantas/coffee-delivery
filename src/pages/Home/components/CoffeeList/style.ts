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
export const CoffeeListItem = styled.div`
  position: relative;
  display: flex;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;
  left: 105px;
  top: 0;
  flex-direction: column;
  margin-top: 2.5rem;
  height: 19.375rem;
  width: 16rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};

  > img {
    position: absolute;
    height: 7.5rem;
    width: 7.5rem;
    top: -50px;
    left: calc(50% - 120px / 2);
  }

  > strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    padding: 0 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  > span {
    font-weight: 400;
    display: flex;
    font-size: 0.875rem;
    padding: 0 1.25rem;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
    line-height: 130%;
  }
`
export const CoffeeListBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-self: center;
  gap: 4px;
  margin-top: 3.75rem;
  > span {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    line-height: 130%;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const CoffeeListActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.0625rem;

  > span {
    display: inline-block;

    font-size: 14px;
  }
  > strong {
    display: inline-block;
    margin-left: 2px;
    font-size: 24px;
    font-weight: 800;
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
  }

  > button {
    cursor: pointer;
    line-height: 0;
    border: 0;
    color: ${(props) => props.theme.white};
    border-radius: 6px;
    padding: 0.5rem;
    margin-left: 8px;
    background: ${(props) => props.theme['purple-dark']};
    width: 2.375rem;
    height: 2.375rem;
    transition: all 0.2s;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    width: 4.5rem;
    margin-left: 23px;
    height: 2.375rem;
    background: ${(props) => props.theme['base-button']};
  }
  > div > button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0;
    border-radius: 6px;
    gap: 4px;
    color: ${(props) => props.theme.purple};
    background: ${(props) => props.theme['base-button']};
    transition: all 0.2s;
  }
  > div > button:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
  > button:hover {
    background: ${(props) => props.theme.purple};
  }
`
