import styled from 'styled-components'

export const Sobre = styled.div`
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.corPrincipal},
    ${(props) => props.theme.corSecundaria}
  );
  padding: 80px 0;
`
export const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ImagePerfil = styled.img`
  max-width: 460px;
  width: 100%;
  padding-right: 36px;

  @media (max-width: 768px) {
    max-width: 340px;
    margin-bottom: 16px;
  }
`

export const Infos = styled.ul`
  margin-top: 36px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 24px 0px;
  padding-left: 26px;
  border: 1px solid #d40b0b;
  border-radius: 26px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Item = styled.li`
  color: ${(props) => props.theme.corLetra};
  font-size: 12px;

  b {
    font-size: 14px;
    padding-right: 6px;
  }
`

export const ListSocial = styled.ul`
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 16px;
  gap: 30px;
  margin-top: 36px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  li {
    img {
      max-width: 28px;
      width: 100%;
      transition: 0.2s ease;

      :hover {
        width: 26px;
      }
    }
  }
`
