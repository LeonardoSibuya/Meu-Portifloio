import Avatar from '../../components/Avatar'

import {
  Botao,
  Content,
  DivBotao,
  Header,
  SubtituloPrincipal,
  TituloPrincipal
} from './styles'

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
      <Botao onClick={props.trocaTema}>Change Theme</Botao>
    </DivBotao>
  </Header>
)

export default Hero
