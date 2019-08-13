import styled from 'styled-components'
import { Link } from 'gatsby'

export const Sidebar = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.primaryBody};
  width: ${({ theme }) => theme.navWidth};
  min-height: 100vh;
  padding: 3rem 1rem;
  font-weight: 600;
  box-shadow: 10px -2px 22px -20px rgba(0,0,0,0.75);
  top: 0;
  left: 0;

  nav {
    display: flex;
    flex-direction: column;

    a {
      font-size: ${({ theme }) => theme.large};
      color: ${({ theme }) => theme.primaryText};
      text-decoration: none;
      margin: 1rem 0;
      font-weight: 600;
    }
  }

  footer {
    font-size: ${({ theme }) => theme.tiny};

    div {
      margin: 0.5rem 0;
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

  &:hover {
    background: orange;
  }

  small {
    font-size: ${({ theme }) => theme.tiny};
    letter-spacing: 2px;
  }
`

