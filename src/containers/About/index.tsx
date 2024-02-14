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
          <Paragrafo>Olá, me chamo Leonardo Sibuya.</Paragrafo>
          <br />
          <Paragrafo>
            Sou um desenvolvedor Full Stack com 2 anos de experiência,
            atualmente cursando Análise e Desenvolvimento de Sistemas na
            Unicesumar. Completei o curso de Desenvolvedor Full Stack na EBAC e
            possuo habilidades em HTML, CSS, JavaScript, TypeScript, ReactJs,
            VueJs, NextJs, Python, Django, NodeJS, NestJs e Testes.
          </Paragrafo>
          <br />
          <Paragrafo>
            Na minha última experiência como Desenvolvedor Full Stack na empresa
            Six Comércio, fui responsável pela criação de Landing Pages,
            manutenção de Softwares existentes, integração de API entre
            Front-end e Back-end, além de oferecer suporte aos desenvolvedores
            Plenos/Senior. Implementei melhorias nos códigos utilizando React
            com TypeScript, proporcionando facilidades para futuras
            funcionalidades e manutenções.
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
              <b>Formação:</b> Análise e Desenvolvimento de Sistemas -
              UniCesumar
            </Item>
            <Item>
              <b>Cidade:</b> São José dos Campos/SP
            </Item>
            <Item>
              <b>Telefone:</b> (11) 97453-7646
            </Item>
            <Item>
              <b>Curso:</b> Full Stack - EBAC
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
