import { createGlobalStyle } from 'styled-components'

export const theme = {
  // colors
  primaryText: '#232020',
  primaryBody: '#FFF',
  // sizes
  navWidth: '18rem',
  // font-sizes
  tiny: '10px',
  regular: '16px',
  large: '24px',
  huge: '36px',
  title: '48px',
}

export const GlobalStyle = createGlobalStyle`
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
`
