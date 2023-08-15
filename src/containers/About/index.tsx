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
            Olá, meu nome é Leonardo Sibuya, estou em transição de carreira, com
            o objetivo de ingressar na área de tecnologia, com foco em me tornar
            um desenvolvedor Full Stack. Sou apaixonado por tecnologia desde
            criança, e decidi ingressar na área de programação, com muito foco e
            comprometimento.
          </Paragrafo>
          <br />
          <Paragrafo>
            Atualmente estudo na EBAC, onde desenvolvi habilidades em Front-end
            e Back-end, com expertise em HTML, CSS, JavaScript, TypeScript,
            React, Testes, integração de APIs, Django, Python,
            Django-Rest-Framework, Docker, CI/CD, TDD. Realizei alguns projetos
            Freelance, com foco em Front-end, e estou em busca de me qualificar
            cada vez mais e adquirir experiências.
          </Paragrafo>
          <br />
          <Paragrafo>
            Obrigado por visitar o meu portfólio e por considerar meu trabalho!
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
