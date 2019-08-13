import React from 'react'
import { Link } from 'gatsby'

import { Logo, Sidebar } from './Menu.styled'

const Menu = () => {
  const today = new Date();
  return (
    <Sidebar>
      <Logo to="/">
        Elizabethseaside
        <small>photography</small>
      </Logo>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <footer>
        <div>© {today.getFullYear()}</div>
        <div>Author and creator: <a target="_blank" rel="nooperner noreferrer" href="https://www.github.com">Maks Akymenko</a></div>
      </footer>
    </Sidebar>
  )
}

export default Menu
