import Line from '../../components/Line'
import Paragrafo from '../../components/Paragrafo'
import Subtitulo from '../../components/Subtitle'
import Titulo from '../../components/Title'

import { Container } from '../../style'
import { Content, Info, Link, TextDiv } from './styles'

import Pousada from '../../images/projects/pousada-freelance.png'
import lreixos from '../../images/projects/lreixos.png'

const Experience = () => (
  <Content id="experience">
    <Container>
      <Titulo>Freelance</Titulo>
      <Line />
      <ul>
        <Info>
          <div>
            <img src={Pousada} alt="imagem pousada" />
          </div>
          <TextDiv>
            <Subtitulo>Hostel & Pousada Bahia Beach</Subtitulo>
            <Paragrafo>
              Este projeto foi desenvolvido para um hostel e pousada, que
              utilizava apenas o Instagram e Facebook como plataformas de
              conteúdo sobre o local e divulgação para seus clientes, e tem como
              solução para a empresa mais uma forma de divulgação para atrair
              hóspedes.
            </Paragrafo>
            <br />
            <Paragrafo>
              O objetivo do projeto foi desenvolver um layout atraente e
              profissional, e dar mais credibilidade para a pousada.
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
        </Info>

        <Info>
          <div>
            <img src={lreixos} alt="imagem pousada" />
          </div>
          <TextDiv>
            <Subtitulo>LR Eixos</Subtitulo>
            <Paragrafo>
              Este projeto foi desenvolvido para uma empresa especializada em
              vendas de eixos automotivos para carros clássicos.
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
              Desde o início, fui responsável por todo o processo de criação do
              site, desde a concepção do design até a hospedagem. Para hospedar
              o site, optei pela plataforma da Hostinger, garantindo uma
              excelente performance e um domínio personalizado.
            </Paragrafo>
            <br />
            <Paragrafo>
              No desenvolvimento deste projeto, utilizei tecnologias como React,
              styled-components, TypeScript, Redux e React Router Dom.
            </Paragrafo>
            <Link href="https://www.lreixos.com.br/" target={'_blank'}>
              Visitar
            </Link>
          </TextDiv>
        </Info>
      </ul>
    </Container>
  </Content>
)

export default Experience
