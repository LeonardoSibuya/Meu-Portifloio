import Avatar from '../../components/Avatar'
import Subtitulo from '../../components/Subtitle'
import Titulo from '../../components/Title'
import { Botao, Content, DivBotao, Header } from './styles'
import Lua from '../../images/moon.png'
import Sol from '../../images/sun.png'

const Hero = () => (
  <Header>
    <Content>
      <Avatar />
      <Titulo>Leonardo Sibuya</Titulo>
      <Subtitulo>Front end Developer</Subtitulo>
    </Content>
    <DivBotao>
      <Botao>
        <img src={Lua} alt="" />
        <img src={Sol} alt="" />
      </Botao>
    </DivBotao>
  </Header>
)

export default Hero
