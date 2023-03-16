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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            possimus, illum sapiente sit quod saepe quasi officia maxime, et
            totam doloribus hic quo aliquam sunt temporibus nihil accusamus
            ipsa. Veniam!Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Odio elit. Odio elit. Odio elit. Odio elit. Odio possimus,
            illum sapiente sit quod saepe quasi maxime, et maxime, et maxime, et
            totam doloribus hic quo temporibus nihil ipsa. Veniam!Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Odio possimus, illum
            sapiente sit quod saepe quasi officia maxime, et totam doloribus hic
            quo aliquam
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
