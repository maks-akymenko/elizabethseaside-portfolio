import styled from 'styled-components'
import { Link } from 'gatsby'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
`

export const PhotoshootType = styled(Link)`
  position: relative;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin: 1rem 0;
  }

  img {
    &:hover  {
      transform: scale(1.1);
    }
  }
`

export const PhotoshootTitle = styled.span`
  position: absolute;
  font-size: ${({ theme }) => theme.largeExtra};
  font-weight: 600;
  color: ${({ theme }) => theme.primaryBody};
  background: rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  padding: 0.5rem;
  top: 1rem;
  right: 1rem;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    top: 50%;
    right: 0;
    width: 100%;
    text-align: center;
    transform: translateY(-50%);
  }
`
