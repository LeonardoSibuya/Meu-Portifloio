import Subtitulo from '../../components/Subtitle'
import Titulo from '../../components/Title'

import { Container } from '../../style'

import FotoPerfil from '../../images/emoji-semfundo.png'
import Linkedin from '../../images/linkedin.png'
import Mail from '../../images/mail.png'
import Telefone from '../../images/tel.png'
import {
  ContainerInfo,
  ContentContact,
  FotoAvatar,
  ItemImg,
  ListImg
} from './styles'
import Line from '../../components/Line'

const Contact = () => (
  <ContentContact id="contact">
    <Container>
      <Titulo>Contact</Titulo>
      <Line />
      <ContainerInfo>
        <Subtitulo>Estarei aguardando seu contato!</Subtitulo>
        <ListImg>
          <ItemImg>
            <img src={Linkedin} alt="logo linkedin" />
            <a
              href="https://www.linkedin.com/in/leonardo-sibuya-25221015b/"
              target={'_blank'}
              rel="noreferrer"
            >
              Leonardo Sibuya
            </a>
          </ItemImg>
          <ItemImg>
            <img src={Mail} alt="logo email" />
            <a href="mailto:e_sibuya@outlook.com" rel="noreferrer">
              e_sibuya@outlook.com
            </a>
          </ItemImg>
          <ItemImg>
            <img src={Telefone} alt="logo telefone" />
            <a href="tel:1197453-7646" rel="noreferrer">
              (11) 97453-7646
            </a>
          </ItemImg>
        </ListImg>
      </ContainerInfo>
    </Container>
    <FotoAvatar src={FotoPerfil} alt="foto avatar" />
  </ContentContact>
)

export default Contact
