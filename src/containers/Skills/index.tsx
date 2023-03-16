import Line from '../../components/Line'
import Pill from '../../components/Pills'
import Subtitulo from '../../components/Subtitle'
import Titulo from '../../components/Title'

import { Container } from '../../style'
import { TecItens, Tecnologies } from './styles'

import Html from '../../images/icons/html5.svg'
import Css from '../../images/icons/css3.svg'
import JS from '../../images/icons/javascript.svg'
import TS from '../../images/icons/typescript.svg'
import Py from '../../images/icons/python.svg'

import bootstrap from '../../images/icons/bootstrap.svg'
import react from '../../images/icons/react.svg'
import vue from '../../images/icons/vuejs.svg'
import jquery from '../../images/icons/jquery.svg'
import styledc from '../../images/icons/sc.png'

import Gulp from '../../images/icons/gulp.svg'
import Less from '../../images/icons/less.svg'
import sass from '../../images/icons/sass.svg'
import figma from '../../images/icons/figma.svg'
import git from '../../images/icons/git.svg'
import Github from '../../images/icons/github.png'
import gimp from '../../images/icons/gimp.svg'
import grunt from '../../images/icons/grunt.svg'
import es from '../../images/icons/es6.png'
import parcel from '../../images/icons/parcel.png'
import ajax from '../../images/icons/ajax.jpg'

const Skill = () => (
  <Tecnologies id="skill">
    <Container>
      <Titulo>Skills</Titulo>
      <Line />
      <Subtitulo>Languages</Subtitulo>
      <TecItens>
        <Pill bgColor={'D24D28'} image={Html} child={'HTML5'}></Pill>
        <Pill bgColor={'2074B1'} image={Css} child={'CSS3'}></Pill>
        <Pill bgColor={'F7DF1E'} image={JS} child={'JavaScript'}></Pill>
        <Pill bgColor={'0C7AC4'} image={TS} child={'TypeScript'}></Pill>
        <Pill bgColor={'356994'} image={Py} child={'Python'}></Pill>
      </TecItens>
      <Subtitulo>Frameworks & Libs</Subtitulo>
      <TecItens>
        <Pill bgColor={'8912FF'} image={bootstrap} child={'Bootstrap'}></Pill>
        <Pill bgColor={'2B2E34'} image={react} child={'React'}></Pill>
        <Pill bgColor={'394B5D'} image={vue} child={'VueJS'}></Pill>
        <Pill bgColor={'33517F'} image={jquery} child={'JQuery'}></Pill>
        <Pill
          bgColor={'CD6D8D'}
          image={styledc}
          child={'Styled-Components'}
        ></Pill>
      </TecItens>
      <Subtitulo>Other Tecnologies</Subtitulo>
      <TecItens>
        <Pill bgColor={'772222'} image={Gulp} child={'Gulp'}></Pill>
        <Pill bgColor={'0480CC'} image={Less} child={'Less'}></Pill>
        <Pill bgColor={'F56EB1'} image={sass} child={'SASS'}></Pill>
        <Pill bgColor={'DD4A1F'} image={figma} child={'Figma'}></Pill>
        <Pill bgColor={'333333'} image={git} child={'Git'}></Pill>
        <Pill bgColor={'111111'} image={Github} child={'GitHub'}></Pill>
        <Pill bgColor={'657B88'} image={gimp} child={'Gimp'}></Pill>
        <Pill bgColor={'FFA901'} image={grunt} child={'Grunt'}></Pill>
        <Pill bgColor={'af9d33'} image={es} child={'ES6'}></Pill>
        <Pill bgColor={'21374B'} image={parcel} child={'Parcel'}></Pill>
        <Pill bgColor={'126799'} image={ajax} child={'AJAX'}></Pill>
      </TecItens>
    </Container>
  </Tecnologies>
)

export default Skill
