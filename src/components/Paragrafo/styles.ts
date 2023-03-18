import styled from 'styled-components'

export const P = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.corLetra};
  line-height: 16px;
  font-weight: normal;

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
