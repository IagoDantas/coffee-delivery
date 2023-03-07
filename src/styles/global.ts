import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus{
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${(props) => props.theme['yellow-dark']};
  }

  body{
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    --webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body,
  input,
  button,
  textarea{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

`
