import React, { useState } from 'react'
import { Link } from 'gatsby'

import { Burger, Logo, NavContainer, Sidebar } from './Menu.styled'
import { Footer } from 'src/components'

const Menu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sidebar showMenu={open}>
      <NavContainer>
        <Logo to="/">
          Elizabethseaside
        <small>photography</small>
        </Logo>
        <Burger showMenu={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </Burger>
        <nav>
          <Link to="/" activeClassName="active">Portfolio</Link>
          <Link to="/about" activeClassName="active">About</Link>
          <Link to="/instagram" activeClassName="active">Instagram</Link>
          <Link to="/contact" activeClassName="active">Contact</Link>
        </nav>
      </NavContainer>
      <Footer hideOnMobile />
    </Sidebar >
  )
}

export default Menu
