import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.title};
  text-align: center;
`

export const PhotoshootContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Photoshoot = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryText};
    text-transform: uppercase;
  }
`

export const PhotoshootTitle = styled.h2`
  text-align: center;
`
