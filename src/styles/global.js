import { createGlobalStyle } from 'styled-components'

export const theme = {
  // colors
  primaryText: '#232020',
  primaryBody: '#FFF',
  primaryHover: '#4ECCC8',
  // sizes
  navWidth: '18rem',
  // font-sizes
  tiny: '10px',
  small: '12px',
  regular: '16px',
  large: '24px',
  largeExtra: '30px',
  huge: '36px',
  title: '48px',
  // breakpoints
  mobile: '576px',
  tablet: '1024px',
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap');

  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primaryBody};
    color: ${({ theme }) => theme.primaryText};
    text-rendering: optimizeLegibility;
    font-family: 'Lexend Deca', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
`
