import styled from 'styled-components'
import { Link } from 'gatsby'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`

export const PhotoshootType = styled(Link)`
  position: relative;
`

export const PhotoshootTitle = styled.span`
  position: absolute;
  font-size: ${({ theme }) => theme.large};
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryBody};
  top: 1rem;
  right: 1rem;
`
