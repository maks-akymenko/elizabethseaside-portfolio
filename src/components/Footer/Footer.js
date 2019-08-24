import React from 'react'
import { bool } from 'prop-types'

import { StyledFooter } from './Footer.styled'

const Footer = ({ hideOnMobile, hideOnDesktop }) => {
  const today = new Date();
  return (
    <StyledFooter
      hideOnMobile={hideOnMobile}
      hideOnDesktop={hideOnDesktop}
    >
      <div>© {today.getFullYear()}</div>
      <div>Created by: <a target="_blank" rel="nooperner noreferrer" href="https://www.github.com/maximakymenko">Maks Akymenko</a></div>
    </StyledFooter>
  )
}

Footer.propTypes = {
  hideOnMobile: bool,
  hideOnDesktop: bool,
}

Footer.defaultProps = {
  hideOnMobile: false,
  hideOnDesktop: false,
}

export default Footer

