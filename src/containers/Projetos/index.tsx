import { useState } from 'react'

import Titulo from '../../components/Title'
import Subtitulo from '../../components/Subtitle'
import Paragrafo from '../../components/Paragrafo'
import Line from '../../components/Line'
import { Container } from '../../style'
import {
  Code,
  ContentProjects,
  ItemProject,
  ListButtons,
  ListProjects,
  Visit,
  Modal,
  ModalContent,
  ImageClose,
  ImgProject,
  Action
} from './styles'

import Financy from '../../images/projects/financy.png'
import ecommerce from '../../images/projects/Eplay.png'
import CloneDisney from '../../images/projects/clone-disney.png'
import lista from '../../images/projects/todo-list.png'

import fechar from '../../images/icons/fechar.png'
import zoom from '../../images/icons/zoom.png'

import Projects from '../../class'

const Mock: Projects[] = [
  {
    id: 1,
    description:
      'Projeto idealizado para simular uma plataforma de investimentos,onde teria planos de assinatura para o usuário. Utilizei API para mostrar ao usuário a cotação atual máxima e mínima do dólar em real, um FAQ de perguntas frequentes, e um formulário simulando uma Newsletter.',
    image: Financy,
    site: 'https://financy-one.vercel.app/',
    title: 'FinancY',
    code: 'https://github.com/LeonardoSibuya/financy'
  },
  {
    id: 2,
    description:
      'E-commerce de jogos de video-game, onde simulamos toda interatividade do usuário, como adicionar e remover jogos do carrinho de compra, com o preço sendo atualizado automaticamente, e também galeria de imagens e videos feita com modal. Foi desenvolvido com React.js, TypeScirpt, consumo de Api AJAX e tests.',
    image: ecommerce,
    site: 'https://projeto-eplay.vercel.app/',
    title: 'E-Play',
    code: 'https://github.com/LeonardoSibuya/projeto-ebac-eplay'
  },
  {
    id: 3,
    description:
      'Este projeto é um clone da Landing Page da Disney Plus, criado para aprimorar minhas habilidades com HTML, CSS e JavaScript, onde foi desenvolvido durante meu aprendizado no curso da EBAC, desta forma acrescentou muito em meus conhecimentos e técnicas de desenvolvimento.',
    image: CloneDisney,
    site: 'https://ls-clone-disneyplus.vercel.app/',
    title: 'Clone Disney Plus',
    code: 'https://github.com/LeonardoSibuya/clone_disneyplus'
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
      <ContentProjects id="project">
        <Container>
          <Titulo>Projects</Titulo>
          <Line />
          <ListProjects>
            {Mock.map((projeto) => (
              <ItemProject
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
                <Action>
                  <img src={zoom} alt="" />
                </Action>
              </ItemProject>
            ))}
          </ListProjects>
          <Visit
            href="https://github.com/LeonardoSibuya?tab=repositories"
            target={'_blank'}
          >
            Mais projetos +
          </Visit>
        </Container>
      </ContentProjects>

      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent>
          <ImageClose src={fechar} alt="" onClick={closeModal} />
          <ImgProject src={modal.image} alt="" />
          <div>
            <Subtitulo>{modal.title}</Subtitulo>
            <Paragrafo>{modal.description}</Paragrafo>
            <ListButtons>
              <li>
                <Visit href={modal.site} target={'_blank'}>
                  Visitar
                </Visit>
              </li>
              <li>
                <Code href={modal.code} target={'_blank'}>
                  Ver código
                </Code>
              </li>
            </ListButtons>
          </div>
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default Projetos
