import Line from '../../components/Line'
import Paragrafo from '../../components/Paragrafo'
import Subtitulo from '../../components/Subtitle'
import Titulo from '../../components/Title'

import { Container } from '../../style'
import { Content, ProjectsList, Link, TextDiv } from './styles'

import Pousada from '../../images/projects/pousada-freelance.png'
import lreixos from '../../images/projects/lreixos.png'

const Experience = () => (
  <Content id="experience">
    <Container>
      <Titulo>Freelance</Titulo>
      <Line />
      <ProjectsList>
        <li>
          <div>
            <img src={Pousada} alt="imagem pousada" />
          </div>
          <TextDiv>
            <Subtitulo>Hostel & Pousada Bahia Beach</Subtitulo>
            <Paragrafo>
              Este projeto foi desenvolvido para um hostel e pousada, e esta
              empresa utilizava apenas o Instagram e Facebook como plataforma de
              conteúdo sobre o local e divulgação para seus clientes.
            </Paragrafo>
            <br />
            <Paragrafo>
              O objetivo do projeto foi desenvolver um layout atraente e
              profissional, e dar mais credibilidade para a pousada, aumentando
              a taxa de reservas.
            </Paragrafo>
            <br />
            <Paragrafo>
              Desde o início, fui responsável por todo o processo de criação do
              site, desde a concepção do design até a implementação final.
              Utilizei minhas habilidades em HTML, CSS e JavaScript para criar
              um site totalmente responsivo e fácil de navegar.
            </Paragrafo>
            <br />
            <Paragrafo>
              Para melhorar ainda mais o desenvolvimento, usei ferramentas como
              SASS e Gulp para agilizar e minificar o processo de criação, e
              também algumas estruturas do Bootstrap.
            </Paragrafo>
            <Link
              href="https://pousada-bahia-beach.vercel.app/"
              target={'_blank'}
            >
              Visitar
            </Link>
          </TextDiv>
        </li>
        <li>
          <div>
            <img src={lreixos} alt="imagem capa site lr eixos" />
          </div>
          <TextDiv>
            <Subtitulo>LR Eixos</Subtitulo>
            <Paragrafo>
              Fui responsável pela criação do site da empresa LrEixos,
              especializada na venda de eixos para carros clássicos.
            </Paragrafo>
            <br />
            <Paragrafo>
              Como a empresa utiliza exclusivamente o WhatsApp como canal de
              vendas, implementei o WhatsApp Business para facilitar o contato
              do cliente final direto com a empresa. Utilizei a API
              disponibilizada pelo aplicativo para tornar os botões de contato
              mais dinâmicos no site, proporcionando aos clientes uma forma
              fácil de se conectarem.
            </Paragrafo>
            <br />
            <Paragrafo>
              Desde o início, fui responsável por todo o processo de criação,
              desde a concepção do design até a hospedagem do site. No
              desenvolvimento desse projeto, utilizei tecnologias como React,
              styled-components, TypeScript, Redux e React Router Dom. E para
              hospedar o site, optei pela plataforma da Hostinger, garantindo
              uma excelente performance e um domínio personalizado.
            </Paragrafo>
            <Link href="https://www.lreixos.com.br/" target={'_blank'}>
              Visitar
            </Link>
          </TextDiv>
        </li>
      </ProjectsList>
    </Container>
  </Content>
)

export default Experience
