import { useState } from 'react'

import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import sun from '../../images/icons/sun.png'
import moon from '../../images/icons/moon.png'

import {
  Content,
  Botao,
  DivBotao,
  Header,
  SubtituloPrincipal,
  TituloPrincipal
} from './styles'

type PropsTema = {
  trocaTema: () => void
}

const Hero = (props: PropsTema) => {
  const [isDark, setIsDark] = useState(false)

  const changeTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <Header>
      <Content>
        <Avatar />
        <TituloPrincipal>Leonardo Sibuya</TituloPrincipal>
        <SubtituloPrincipal>Full Stack Developer</SubtituloPrincipal>
      </Content>
      <DivBotao>
        <Botao
          onClick={() => {
            props.trocaTema()
            changeTheme()
          }}
        >
          {isDark ? <img src={sun} alt="" /> : <img src={moon} alt="" />}
        </Botao>
      </DivBotao>
    </Header>
  )
}

export default Hero
