import styled from 'styled-components'

export const Linha = styled.div`
  width: 120px;
  color: #fff;
  border: 1px solid #d40b0b;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    width: 100px;
  }

  @media (max-width: 768px) {
    width: 80px;
  }
`
