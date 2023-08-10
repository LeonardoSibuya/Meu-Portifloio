import styled from 'styled-components'
import BackgroundImage from '../../images/foto-background-pc-blue.png'

export const Header = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 56px;
  padding-bottom: 32px;
`

export const TituloPrincipal = styled.h1`
  font-size: 32px;
  color: #fff;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const SubtituloPrincipal = styled.h2`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const Content = styled.div`
  text-align: center;
`

export const DivBotao = styled.div`
  margin-top: 56px;
  padding-left: 24px;
`

export const Botao = styled.button`
  background-color: #9191f4;
  border-radius: 6%;
  padding: 16px;
  border: none;
  cursor: pointer;
  transition: 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  border-radius: 50%;

  @media (max-width: 768px) {
    padding: 6px;
  }

  :hover {
    background-color: #ccc;
  }

  img {
    max-width: 24px;
  }
`
