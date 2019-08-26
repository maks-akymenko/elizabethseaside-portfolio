import styled from 'styled-components'

export const ContactSection = styled.section`
  padding: 2rem;

  h1 {
    font-size: ${({ theme }) => theme.largeExtra};
  }

  h2 {
    font-size: ${({ theme }) => theme.large};
    margin-bottom: 5rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-bottom: 1rem;
      }
  }

  ul {
    list-style: none;
    text-align: left;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      font-size: ${({ theme }) => theme.large};
      padding: 0.5rem 0;

      p {
        display: flex;
        align-items: center;
      }

      @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        font-size: ${({ theme }) => theme.regular};
        align-items: flex-start;
      }

      svg {
        margin-right: 0.5rem;
      }

      a {
        text-decoration: none;
        margin-left: 0.5rem;
        color: ${({ theme }) => theme.primaryHover};

      }
    }
  }
`
