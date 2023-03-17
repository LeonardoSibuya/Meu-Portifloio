import Avatar from '../../components/Avatar'

import {
  Botao,
  Content,
  DivBotao,
  Header,
  SubtituloPrincipal,
  TituloPrincipal
} from './styles'

import Lua from '../../images/moon.png'
import Sol from '../../images/sun.png'

type PropsTema = {
  trocaTema: () => void
}

const Hero = (props: PropsTema) => (
  <Header>
    <Content>
      <Avatar />
      <TituloPrincipal>Leonardo Sibuya</TituloPrincipal>
      <SubtituloPrincipal>Front-end Developer</SubtituloPrincipal>
    </Content>
    <DivBotao>
      <Botao onClick={props.trocaTema}>
        <img src={Lua} alt="" />
        <img src={Sol} alt="" />
      </Botao>
    </DivBotao>
  </Header>
)

export default Hero
