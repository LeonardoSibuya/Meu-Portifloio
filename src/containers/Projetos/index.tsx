import { useState } from 'react'

import Titulo from '../../components/Title'
import Subtitulo from '../../components/Subtitle'
import Paragrafo from '../../components/Paragrafo'
import Line from '../../components/Line'

import { Container } from '../../style'

import * as S from './styles'

import Notas from '../../images/projects/notas-bimestrais.png'
import ecommerce from '../../images/projects/Eplay.png'
import blog from '../../images/projects/blogpost.png'
import lista from '../../images/projects/todo-list.png'

import fechar from '../../images/icons/fechar.png'
import zoom from '../../images/icons/zoom.png'

import Projects from '../../class'

const Mock: Projects[] = [
  {
    id: 1,
    description:
      'Projeto criado a partir de um teste técnico, o projeto consiste em desenvolver uma plataforma que permite a um professor registrar as notas de cada bimestre de um aluno específico, variando de 0 a 10, inclusive números decimais. Recebi as instruções detalhadas para este projeto, que incluíam a reprodução exata do design elaborado no Figma no front-end, assim como a implementação das instruções para o desenvolvimento do back-end. O front-end deveria ser desenvolvido com ReactJs e o back-end com NodeJs, e ambos utilizando TypeScript. O front-end deveria conter quatro matérias em cada bimestre, cada uma identificada por uma cor única, e com a possibilidade de excluir e adicionar as matérias, além de atualizar as notas individualmente. As notas são visualmente representadas por cores, indicando vermelho, amarelo ou verde conforme o desempenho. Utilizei também styled-components no front-end, e fastify no back-end.',
    image: Notas,
    site: 'https://www.linkedin.com/feed/update/urn:li:activity:7157772959502241795/',
    title: 'Teste técnico - Plataforma de Notas',
    code: 'https://github.com/LeonardoSibuya/teste-tecnico-frontend'
  },
  {
    id: 2,
    description:
      'E-commerce de jogos de video-game, onde simulamos toda interatividade do usuário, como adicionar e remover jogos do carrinho de compra, com o preço sendo atualizado automaticamente, e também galeria de imagens e videos feita com modal. Foi desenvolvido com React.js, TypeScirpt, consumo de Api, AJAX, Redux e tests.',
    image: ecommerce,
    site: 'https://projeto-eplay.vercel.app/',
    title: 'E-Play',
    code: 'https://github.com/LeonardoSibuya/projeto-ebac-eplay'
  },
  {
    id: 3,
    description:
      'Projeto FullStack realizado para colocar em prática todos os conhecimentos que havia adquirido até o momento em Front-end e Back-end, para isso criei um Blogpost de tarefas, onde é possível realizar o CRUD completo dos posts. Para o desenvolvimento no front-end utilizei React com TypeScript, Styled-components e Redux, e para testar, utilizei cypress. No Back-end desenvolvi utilizando Django-rest-framework.',
    image: blog,
    site: 'https://blog-fullstack-one.vercel.app/',
    title: 'My Blog',
    code: 'https://github.com/LeonardoSibuya/blog-fullstack'
  },
  {
    id: 4,
    description:
      'Este projeto desenvolvido junto da EBAC, é uma lista To Do List. Foi programada utilizando React, TypeScript, Styled-components e Redux. Possui diversas funcionalidades excelentes para novos projetos e para o mercado de trabalho, e acrescentou muito em minhas habilidades técnicas e organizacional.',
    image: lista,
    site: 'https://minhas-tarefas-ebac.vercel.app/',
    title: 'To Do List',
    code: 'https://github.com/LeonardoSibuya/minhas-tarefas-Ebac'
  }
]

interface ModalState extends Projects {
  isVisible: boolean
}

const Projetos = () => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    title: '',
    image: '',
    description: '',
    site: '',
    code: '',
    id: 44
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      title: '',
      image: '',
      description: '',
      site: '',
      code: '',
      id: 44
    })
  }

  return (
    <>
      <S.ContentProjects id="project">
        <Container>
          <Titulo>Projects</Titulo>
          <Line />
          <S.ListProjects>
            {Mock.map((projeto) => (
              <S.ItemProject
                key={projeto.id}
                onClick={() => {
                  setModal({
                    id: projeto.id,
                    title: projeto.title,
                    code: projeto.code,
                    description: projeto.description,
                    image: projeto.image,
                    isVisible: true,
                    site: projeto.site
                  })
                }}
              >
                <Subtitulo>{projeto.title}</Subtitulo>
                <img src={projeto.image} alt="" />
                <S.Action>
                  <img src={zoom} alt="" />
                </S.Action>
              </S.ItemProject>
            ))}
          </S.ListProjects>
          <S.Visit
            href="https://github.com/LeonardoSibuya?tab=repositories"
            target={'_blank'}
          >
            Mais projetos +
          </S.Visit>
        </Container>
      </S.ContentProjects>

      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent>
          <S.ImageClose src={fechar} alt="" onClick={closeModal} />
          <S.ImgProject src={modal.image} alt="" />
          <div>
            <Subtitulo>{modal.title}</Subtitulo>
            <Paragrafo>{modal.description}</Paragrafo>
            <S.ListButtons>
              <li>
                <S.Visit href={modal.site} target={'_blank'}>
                  Visitar
                </S.Visit>
              </li>
              <li>
                <S.Code href={modal.code} target={'_blank'}>
                  Ver código
                </S.Code>
              </li>
            </S.ListButtons>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Projetos
