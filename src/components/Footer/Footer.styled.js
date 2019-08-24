import styled from 'styled-components'

export const StyledFooter = styled.footer`
  font-size: ${({ theme }) => theme.regular};
  display: ${({ hideOnDesktop }) => hideOnDesktop && 'none'};

  @media (max-width: ${({ theme }) => theme.tablet}) {
      display: ${({ hideOnMobile }) => hideOnMobile ? 'none' : 'flex'};
      justify-content: center;
      padding: 2rem 0;
  }

  div {
    margin: 0.5rem 0;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      margin: 0.25em;
    }
  }

  a {
    color: ${({ theme }) => theme.primaryText};
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`
