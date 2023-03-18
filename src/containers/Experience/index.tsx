import Line from '../../components/Line'
import Paragrafo from '../../components/Paragrafo'
import Subtitulo from '../../components/Subtitle'
import Titulo from '../../components/Title'

import { Container } from '../../style'
import { Content, Info, Link, TextDiv } from './styles'

import Pousada from '../../images/projects/pousada-freelance.png'

const Experience = () => (
  <Content id="experience">
    <Container>
      <Titulo>Freelance</Titulo>
      <Line />
      <Info>
        <div>
          <img src={Pousada} alt="imagem pousada" />
        </div>
        <TextDiv>
          <Subtitulo>Hostel & Pousada Bahia Beach</Subtitulo>
          <Paragrafo>
            Este projeto foi desenvolvido para um hostel e pousada, localizado
            em Itanhaém - SP, e esta empresa utilizava apenas o Instagram e
            Facebook como plataforma de conteúdo sobre o local e divulgação para
            seus clientes.
          </Paragrafo>
          <br />
          <Paragrafo>
            O objetivo do projeto foi desenvolver um layout atraente e
            profissional, e dar mais credibilidade para pousada, aumentando a
            taxa de reservas.
          </Paragrafo>
          <br />
          <Paragrafo>
            Este projeto traz como solução para a empresa, mais uma forma de
            divulgação para atrair mais hóspedes, e também mais credibilidade no
            momento do contato com o cliente, onde em algumas situações o
            cliente poderia ficar desconfiado no momento de sua reserva via
            WhatsApp, e encaminhando para o mesmo o site da pousada, mostra mais
            profissionalismo desta empresa.
          </Paragrafo>
          <br />
          <Paragrafo>
            Desde o início, fui responsável por todo o processo de criação do
            site, desde a concepção do design até a implementação final.
            Utilizei minhas habilidades em HTML, CSS e JavaScript para criar um
            site totalmente responsivo e fácil de navegar.
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
    </Container>
  </Content>
)

export default Experience
