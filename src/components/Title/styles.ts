import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 32px;
  color: ${(props) => props.theme.corLetra};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`
