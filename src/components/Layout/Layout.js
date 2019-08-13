import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from 'src/images/favicon.ico'
import { GlobalStyle, theme } from 'src/styles/global'
import config from 'src/utils/siteConfig'

import { Menu } from 'src/components'

import { Container } from './Layout.styled'

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Menu />
          <Container>
            {children}
          </Container>
        </>
      </ThemeProvider>
    </div>
  )
}

export default Template
