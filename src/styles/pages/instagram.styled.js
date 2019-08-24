import styled from 'styled-components'

export const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

  img {
    &:hover  {
      transform: scale(1.1);
    }
  }
`

export const InstagramLink = styled.h3`
  text-align: center;

  a {
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.primaryText};
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`
