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

import Pousada from '../../images/projects/pousada-freelance.png'

const Projetos = () => (
  <ContentProjects id="project">
    <Container>
      <Titulo>Projects</Titulo>
      <Line />
      <ListProjects>
        <ItemProject>
          <Subtitulo>Titulo</Subtitulo>
          <img src={Pousada} alt="" />
          <Paragrafo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            consequatur magni, at eius minima repellendus voluptatibus amet
            voluptate veniam, eveniet cum
          </Paragrafo>
          <ListButtons>
            <li>
              <Visit href="" target={'_blank'}>
                Visitar
              </Visit>
            </li>
            <li>
              <Code href="" target={'_blank'}>
                Ver código
              </Code>
            </li>
          </ListButtons>
        </ItemProject>

        <ItemProject>
          <Subtitulo>Titulo</Subtitulo>
          <img src={Pousada} alt="" />
          <Paragrafo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            consequatur magni, at eius minima repellendus voluptatibus amet
            voluptate veniam, eveniet cum
          </Paragrafo>
          <ListButtons>
            <li>
              <Visit href="" target={'_blank'}>
                Visitar
              </Visit>
            </li>
            <li>
              <Code href="" target={'_blank'}>
                Ver código
              </Code>
            </li>
          </ListButtons>
        </ItemProject>

        <ItemProject>
          <Subtitulo>Titulo</Subtitulo>
          <img src={Pousada} alt="" />
          <Paragrafo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            consequatur magni, at eius minima repellendus voluptatibus amet
            voluptate veniam, eveniet cum
          </Paragrafo>
          <ListButtons>
            <li>
              <Visit href="" target={'_blank'}>
                Visitar
              </Visit>
            </li>
            <li>
              <Code href="" target={'_blank'}>
                Ver código
              </Code>
            </li>
          </ListButtons>
        </ItemProject>

        <ItemProject>
          <Subtitulo>Titulo</Subtitulo>
          <img src={Pousada} alt="" />
          <Paragrafo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            consequatur magni, at eius minima repellendus voluptatibus amet
            voluptate veniam, eveniet cum
          </Paragrafo>
          <ListButtons>
            <li>
              <Visit href="" target={'_blank'}>
                Visitar
              </Visit>
            </li>
            <li>
              <Code href="" target={'_blank'}>
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
