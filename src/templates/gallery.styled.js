import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.title};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: ${({ theme }) => theme.largeExtra};
  }
`

export const ImageBlock = styled.div`
  cursor: pointer;
`
