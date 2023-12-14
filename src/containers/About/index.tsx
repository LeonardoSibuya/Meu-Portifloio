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

import FotoAvatar from '../../images/emoji-semfundo-2.png'
import Instagram from '../../images/icons/Instagram.png'
import Linkedin from '../../images/icons/linkedin.png'
import Github from '../../images/icons/github.png'

const About = () => (
  <Sobre id="about">
    <Container>
      <ContainerAbout>
        <ImagePerfil src={FotoAvatar} />
        <div>
          <Titulo>About Me</Titulo>
          <Line />
          <Paragrafo>
            Olá, me chamo Leonardo Sibuya, e sou desenvoldor Full Stack.
          </Paragrafo>
          <br />
          <Paragrafo>
            minha paixão pela tecnologia vem desde a minha infância. Essa paixão
            me motivou a ingressar na programação, com muita dedicação. Em 2022,
            dei início à minha jornada na EBAC, onde desenvolvi habilidades
            sólidas em Front-end e Back-end, me aprimorando em HTML, CSS,
            JavaScript, TypeScript, React, VueJs, Testes, integração de APIs,
            Django, Python, Django-Rest-Framework, Docker, NodeJs, NestJs, CI/CD
            e TDD.
          </Paragrafo>
          <br />
          <Paragrafo>
            Em 2023, conclui minha transição de carreira como desenvolvedor Full
            Stack na Six Comércio, o que marcou um grande avanço na minha
            carreira. Minha busca por conhecimento na área de tecnologia é
            constante, e estou sempre animado para enfrentar novos desafios e
            oportunidades de aprendizado.
          </Paragrafo>
          <br />
          <Paragrafo>
            Agradeço por visitar meu portfólio e por considerar meu trabalho.
            Estou comprometido em continuar minha evolução nesse empolgante
            mundo de tecnologia.
          </Paragrafo>
          <Infos>
            <Item>
              <b>Nome:</b> Leonardo Sibuya Rodrigues da Silva
            </Item>
            <Item>
              <b>Idade:</b> 23 anos
            </Item>
            <Item>
              <b>Formação:</b> Full Stack - EBAC
            </Item>
            <Item>
              <b>Cidade:</b> São José dos Campos/SP
            </Item>
            <Item>
              <b>Telefone:</b> (11) 97453-7646
            </Item>
            <Item>
              <b>Trabalho atual:</b> Six Comérico
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
