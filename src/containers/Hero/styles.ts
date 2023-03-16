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

export const Content = styled.div`
  text-align: center;
`

export const DivBotao = styled.div`
  margin-top: 56px;
  padding-left: 24px;
`

export const Botao = styled.button`
  background-color: #4e4ef2;
  border-radius: 36px;
  padding: 6px;
  width: 120px;
  border: none;
  cursor: pointer;
  transition: 0.5s ease;
  display: flex;
  align-itens: center;
  justify-content: space-around;

  :hover {
    background-color: #9191f4;
  }

  img {
    max-width: 30px;
    width: 100%;
  }
`
