import styled from 'styled-components'

export const Sobre = styled.div`
  background-image: linear-gradient(to right, #09203f, #2c5779);
  padding: 80px 0;
`
export const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`

export const ImagePerfil = styled.img`
  max-width: 460px;
  width: 100%;
  padding-right: 36px;
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
`
export const Item = styled.li`
  color: #fff;
  font-size: 12px;

  b {
    font-size: 14px;
    padding-right: 6px;
  }
`

export const ListSocial = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 36px;

  li {
    img {
      max-width: 28px;
      width: 100%;
    }
  }
`
