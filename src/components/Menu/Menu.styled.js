import styled from 'styled-components'
import { Link } from 'gatsby'

export const Burger = styled.button`
  display: none;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    position: ${({ showMenu }) => showMenu ? 'fixed' : 'relative'};
    right: ${({ showMenu }) => showMenu && '1rem'};
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, showMenu }) => showMenu ? theme.primaryBody : theme.primaryText};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: left;

    :first-child {
      transform: ${({ showMenu }) => showMenu ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ showMenu }) => showMenu ? '0' : '1'};
      transform: ${({ showMenu }) => showMenu ? 'translateX(-20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ showMenu }) => showMenu ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  &:focus {
    outline: none;
  }
`

export const NavContainer = styled.div``

export const Sidebar = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.primaryBody};
  color: ${({ theme }) => theme.primaryText};
  width: ${({ theme }) => theme.navWidth};
  min-height: 100vh;
  padding: 3rem 2rem;
  font-weight: 600;
  box-shadow: 10px -2px 22px -20px rgba(0,0,0,0.75);
  top: 0;
  left: 0;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    position: static;
    width: 100%;
    min-height: auto;
    box-shadow: none;
    padding: 1rem;

    ${NavContainer} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  nav {
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      flex-direction: row;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      position: fixed;
      width: 100%;
      height: 100vh;
      overflow-y: hidden;
      z-index: 10;
      transition: transform 0.2s linear;
      flex-direction: column;
      transform: ${({ showMenu }) => showMenu ? 'translateX(0)' : 'translateX(-100%)'};
      background: ${({ theme }) => theme.primaryText};
      padding: 1rem;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
    }

    a {
      position: relative;
      font-size: ${({ theme }) => theme.largeExtra};
      color: ${({ theme }) => theme.primaryText};
      text-decoration: none;
      margin: 1rem 0;
      font-weight: 600;
      transition: color 0.3s linear;

      @media (max-width: ${({ theme }) => theme.tablet}) {
        font-size: ${({ theme }) => theme.regular};
        padding: 1rem;
      }

      @media (max-width: ${({ theme }) => theme.mobile}) {
        color: ${({ theme }) => theme.primaryBody};
        font-size: ${({ theme }) => theme.large};
        padding: 1rem 0.25rem;
        margin: 0;
      }

      &:hover, &.active {
        color: ${({ theme }) => theme.primaryHover};
      }
    }
  }
`

export const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.primaryText};
  text-decoration: none;
  margin-bottom: 5rem;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.primaryText};
  border-radius: 5px;
  transition: background 0.2s linear;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: ${({ theme }) => theme.small};
    margin-bottom: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.primaryText};
    color: ${({ theme }) => theme.primaryBody};
  }

  small {
    font-size: ${({ theme }) => theme.tiny};
    letter-spacing: 2px;
  }
`
