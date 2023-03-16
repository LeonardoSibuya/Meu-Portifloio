import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Title'
import Line from '../../components/Line'

import { Container } from '../../style'
import {
  Sobre,
  ImagePerfil,
  ContainerAbout,
  Infos,
  Item,
  ListSocial
} from './styles'

import FotoPerfil from '../../images/emoji-semfundo.png'
import Instagram from '../../images/icons/Instagram.png'
import Linkedin from '../../images/icons/linkedin.png'
import Github from '../../images/icons/github.png'

const About = () => (
  <Sobre id="about">
    <Container>
      <ContainerAbout>
        <ImagePerfil src={FotoPerfil} />
        <div>
          <Titulo>About Me</Titulo>
          <Line />
          <Paragrafo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            doloribus temporibus quibusdam molestias quis, repellat nesciunt, et
            maxime nobis modi optio reiciendis, eligendi cupiditate praesentium.
            Rem optio nemo explicabo dolore. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nostrum itaque doloremque eos officia
            quasi necessitatibus distinctio! Quis quos nisi maxime perferendis!
            Est totam odit iure enim doloribus quidem blanditiis quos!Lorem
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            fugit rem! Dolores saepe maiores animi ipsa in odit, autem fugiat.
            Velit animi aperiam consectetur asperiores dolorum ducimus cum at
            saepe.
          </Paragrafo>
          <Infos>
            <Item>
              <b>Nome:</b> Leonardo Sibuya Rodrigues da Silva
            </Item>
            <Item>
              <b>Idade:</b> 23 anos
            </Item>
            <Item>
              <b>Formação:</b> Full Stack Python - EBAC
            </Item>
            <Item>
              <b>Cidade:</b> São José dos Campos/SP
            </Item>
            <Item>
              <b>Telefone:</b> (11) 97453-7646
            </Item>
          </Infos>
          <ListSocial>
            <li>
              <a
                href="https://www.instagram.com/leleo.sb/"
                target={'_blank'}
                rel="noreferrer"
              >
                <img src={Instagram} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/leonardo-sibuya-25221015b/"
                target={'_blank'}
                rel="noreferrer"
              >
                <img src={Linkedin} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/LeonardoSibuya"
                target={'_blank'}
                rel="noreferrer"
              >
                <img src={Github} alt="" />
              </a>
            </li>
          </ListSocial>
        </div>
      </ContainerAbout>
    </Container>
  </Sobre>
)

export default About
