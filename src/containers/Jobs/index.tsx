import Line from '../../components/Line'
import Paragrafo from '../../components/Paragrafo'
import Subtitulo from '../../components/Subtitle'
import Titulo from '../../components/Title'

import { Container } from '../../style'
import { Content, ProjectsList, TextDiv } from './styles'

import Job1 from '../../images/projects/six.png'

const Jobs = () => (
  <Content id="jobs">
    <Container>
      <Titulo>Jobs</Titulo>
      <Line />
      <ProjectsList>
        <li>
          <div>
            <img src={Job1} alt="imagem pousada" />
          </div>
          <TextDiv>
            <Subtitulo>SIX Comérico - Desenvolvedor Full-stack</Subtitulo>
            <Paragrafo>
              Desenvolvedor Full Stack, exercendo funções de criação de Landing
              Pages, manutenção em Softwares já existentes, integração de API’s
              entre Front-end e Back-end, apoio aos desenvolvedores Plenos.
            </Paragrafo>
            <br />
            <Paragrafo>
              Implementei melhorias nos códigos existentes da empresa, onde eram
              escritos com HTML, CSS e JavaScript, e implementei React com
              TypeScript, trazendo melhorias e facilidades para novas
              funcionalidades e/ou manutenções futuras.
            </Paragrafo>
            <br />
            <Paragrafo>
              Tive como desafio implementar novos projetos com a saída de
              desenvolvedores plenos da empresa, então liderei projetos,
              compartilhei meus conhecimentos com outro desenvolvedor júnior,
              para que assim pudéssemos agregar e crescer junto da empresa.
            </Paragrafo>
            <br />
            <Paragrafo>
              Construí sistema de integração de uma página de venda com uma
              empresa externa de entregas LATAM, onde clientes de outros países
              da américa do sul pudesse comprar com facilidade os produtos
              vendidos pela Six comércio.
            </Paragrafo>
          </TextDiv>
        </li>
      </ProjectsList>
    </Container>
  </Content>
)

export default Jobs
