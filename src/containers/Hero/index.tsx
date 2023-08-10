import { useState } from 'react'
import Avatar from '../../components/Avatar'

import {
  Botao,
  Content,
  DivBotao,
  Header,
  SubtituloPrincipal,
  TituloPrincipal
} from './styles'

import moon from '../../images/icons/moon.png'
import sun from '../../images/icons/sun.png'

type PropsTema = {
  trocaTema: () => void
}

const Hero = ({ trocaTema }: PropsTema) => {
  const [isDark, setIsDark] = useState(true)

  const changeTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <Header>
      <Content>
        <Avatar />
        <TituloPrincipal>Leonardo Sibuya</TituloPrincipal>
        <SubtituloPrincipal>Full stack developer</SubtituloPrincipal>
      </Content>
      <DivBotao>
        <Botao
          onClick={() => {
            trocaTema()
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
