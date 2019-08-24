import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  font-size: ${({ theme }) => theme.large};
  background: transparent;
  padding: 2rem;
  font-weight: 600;
  border: none;
  text-decoration: none;
  outline: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    padding: 1rem;
  }

  span {
    transition: transform 0.3s linear;
  }

  &:hover > span {
    transform: translateX(-5px);
  }
`
