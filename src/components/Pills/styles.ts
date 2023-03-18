import styled from 'styled-components'

import { PropsPill } from '.'

export const Pilula = styled.div<PropsPill>`
  background-color: ${(props) => '#' + props.bgColor};
  width: 220px;
  border-radius: 6px;
  color: #fff;
  padding: 4px 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 768px) {
    width: 200px;
    font-size: 12px;
    gap: 12px;
  }

  img {
    max-width: 24px;

    @media (max-width: 768px) {
      max-width: 18px;
    }
  }
`
