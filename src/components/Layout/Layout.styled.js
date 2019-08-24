import styled from 'styled-components'

export const Container = styled.div`
  margin-left: ${({ theme }) => theme.navWidth};

  @media (max-width: ${({ theme }) => theme.tablet}) {
      margin-left: 0;
      width: 100%;
    }
`;


