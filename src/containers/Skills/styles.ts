import styled from 'styled-components'

export const Tecnologies = styled.div`
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.corTercearia},
    ${(props) => props.theme.corSecundaria}
  );
  padding: 80px 0;
`
export const TecItens = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  padding-bottom: 38px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
