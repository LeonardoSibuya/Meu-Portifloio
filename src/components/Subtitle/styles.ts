import styled from 'styled-components'

export const Subtitle = styled.h3`
  font-size: 24px;
  color: ${(props) => props.theme.corLetra};
  font-weight: bold;
  margin-bottom: 12px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
