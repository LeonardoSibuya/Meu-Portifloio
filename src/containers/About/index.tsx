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
            Olá, eu sou o Leonardo Sibuya, e concluí minha transição de carreira
            para desenvolvedor web.
          </Paragrafo>
          <br />
          <Paragrafo>
            Desde minha infância, meu interesse pela tecnologia tem sido uma
            constante. Esse interesse me levou a tomar a decisão de ingressar na
            programação, com grande determinação e compromisso. Em outubro de
            2022, iniciei minha formação na EBAC, onde adquiri habilidades em
            Front-end e Back-end, aprimorando-me em HTML, CSS, JavaScript,
            TypeScript, React, Testes, integração de APIs, Django, Python,
            Django-Rest-Framework, Docker, CI/CD e TDD.
          </Paragrafo>
          <br />
          <Paragrafo>
            Em agosto de 2023, conquistei minha primeira oportunidade como
            desenvolvedor web júnior na empresa Six Comércio, o que marcou um
            importante passo na minha trajetória profissional. Minha jornada de
            aprendizado e aprimoramento não tem fim. Estou sempre em busca de
            novos desafios e oportunidades para expandir meus conhecimentos na
            área de tecnologia.
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
