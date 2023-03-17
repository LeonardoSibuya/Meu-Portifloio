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
  Visit
} from './styles'

import Financy from '../../images/projects/financy.png'
import Spider from '../../images/projects/spider.png'
import CloneDisney from '../../images/projects/clone-disney.png'
import Portfólio from '../../images/projects/portfólio.png'

const Projetos = () => (
  <ContentProjects id="project">
    <Container>
      <Titulo>Projects</Titulo>
      <Line />
      <ListProjects>
        <ItemProject>
          <Subtitulo>FinancY</Subtitulo>
          <img src={Financy} alt="capa site de finanças" />
          <Paragrafo>
            Projeto idealizado para simular uma plataforma de investimentos,
            onde teria planos de assinatura para o usuário. Utilizei API para
            mostrar ao usuário a cotação atual máxima e mínima do dólar em real,
            um FAQ de perguntas frequentes, e um formulário simulando uma
            Newsletter.
          </Paragrafo>
          <ListButtons>
            <li>
              <Visit href="https://financy-one.vercel.app/" target={'_blank'}>
                Visitar
              </Visit>
            </li>
            <li>
              <Code
                href="https://github.com/LeonardoSibuya/financy"
                target={'_blank'}
              >
                Ver código
              </Code>
            </li>
          </ListButtons>
        </ItemProject>

        <ItemProject>
          <Subtitulo>Spiderverse</Subtitulo>
          <img src={Spider} alt="capa site homem aranha" />
          <Paragrafo>
            Este projeto é uma Landing Page para o filme Spider-Man
            Spider-Verse, feito para divulgação do filme, e para informações
            como sinopse, elenco, onde assistir e preço do streaming. E criei a
            seção de wallpaper, para salvar aquela aquela aquela imagem legal do
            filme.
          </Paragrafo>
          <ListButtons>
            <li>
              <Visit
                href="https://spiderverse-leonardo-sibuya.vercel.app/"
                target={'_blank'}
              >
                Visitar
              </Visit>
            </li>
            <li>
              <Code
                href="https://github.com/LeonardoSibuya/spiderverse"
                target={'_blank'}
              >
                Ver código
              </Code>
            </li>
          </ListButtons>
        </ItemProject>

        <ItemProject>
          <Subtitulo>Clone Disney Plus</Subtitulo>
          <img src={CloneDisney} alt="" />
          <Paragrafo>
            Este projeto é um clone da Landing Page da Disney Plus, criado para
            aprimorar minhas habilidades com HTML, CSS e JavaScript, onde foi
            desenvolvido durante meu aprendizado no curso da EBAC, desta forma
            acrescentou muito em meus conhecimentos e técnicas de
            desenvolvimento.
          </Paragrafo>
          <ListButtons>
            <li>
              <Visit
                href="https://ls-clone-disneyplus.vercel.app/"
                target={'_blank'}
              >
                Visitar
              </Visit>
            </li>
            <li>
              <Code
                href="https://github.com/LeonardoSibuya/clone_disneyplus"
                target={'_blank'}
              >
                Ver código
              </Code>
            </li>
          </ListButtons>
        </ItemProject>

        <ItemProject>
          <Subtitulo>Portfólio</Subtitulo>
          <img src={Portfólio} alt="" />
          <Paragrafo>
            Aqui adicionei este mesmo Portfólio, para compartilhar o acesso ao
            código de desenvolvimento deste projeto, onde foi criado utilizando
            React, Typescript e styled-components, utilizados também em muitos
            projetos atualmente no mercado de tecnologia. No botão visitar, você
            poderá conferir também outros projetos em meu GitHub.
          </Paragrafo>
          <ListButtons>
            <li>
              <Visit href="https://github.com/LeonardoSibuya" target={'_blank'}>
                Visitar
              </Visit>
            </li>
            <li>
              <Code
                href="https://github.com/LeonardoSibuya/Meu-Portifloio"
                target={'_blank'}
              >
                Ver código
              </Code>
            </li>
          </ListButtons>
        </ItemProject>
      </ListProjects>
    </Container>
  </ContentProjects>
)

export default Projetos
