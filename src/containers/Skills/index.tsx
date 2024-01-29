import Line from '../../components/Line'
import Pill from '../../components/Pills'
import Subtitulo from '../../components/Subtitle'
import Titulo from '../../components/Title'

import { Container } from '../../style'
import { TecItens, Tecnologies } from './styles'

//IMAGES:
//Languages
import Html from '../../images/icons/html5.svg'
import Css from '../../images/icons/css3.svg'
import JS from '../../images/icons/javascript.svg'
import TS from '../../images/icons/typescript.svg'
import Py from '../../images/icons/python.svg'
import node from '../../images/icons/node.png'

//Frameworks & Libs
import bootstrap from '../../images/icons/bootstrap.svg'
import react from '../../images/icons/react.svg'
import vue from '../../images/icons/vuejs.svg'
import jquery from '../../images/icons/jquery.svg'
import styledc from '../../images/icons/sc.png'
import django from '../../images/icons/django.png'
import nest from '../../images/icons/nest.png'
import next from '../../images/icons/next.png'

//Other Tecnologies
import Redux from '../../images/icons/redux.png'
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
import coding from '../../images/icons/coding.jpg'
import rest from '../../images/icons/rest.png'
import docker from '../../images/icons/docker.png'
import cicd from '../../images/icons/cicd.png'
import cypress from '../../images/icons/cypress.png'
import mysql from '../../images/icons/mysql.png'
import postgree from '../../images/icons/postgree.png'

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
        <Pill bgColor={'cebf4a'} image={node} child={'NodeJs'}></Pill>
      </TecItens>
      <Subtitulo>Frameworks & Libs</Subtitulo>
      <TecItens>
        <Pill bgColor={'8912FF'} image={bootstrap} child={'Bootstrap'}></Pill>
        <Pill bgColor={'2B2E34'} image={react} child={'React'}></Pill>
        <Pill bgColor={'356994'} image={django} child={'Django'}></Pill>
        <Pill bgColor={'394B5D'} image={vue} child={'VueJS'}></Pill>
        <Pill bgColor={'394B5D'} image={next} child={'NextJs'}></Pill>
        <Pill bgColor={'33517F'} image={jquery} child={'JQuery'}></Pill>
        <Pill
          bgColor={'CD6D8D'}
          image={styledc}
          child={'Styled-Components'}
        ></Pill>
        <Pill bgColor={'cebf4a'} image={nest} child={'NestJs'}></Pill>
      </TecItens>
      <Subtitulo>Other Tecnologies</Subtitulo>
      <TecItens>
        <Pill bgColor={'bb96f7'} image={Redux} child={'Redux'}></Pill>
        <Pill bgColor={'356994'} image={rest} child={'Django Rest'}></Pill>
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
        <Pill bgColor={'2B2E34'} image={coding} child={'Tests'}></Pill>
        <Pill bgColor={'21374B'} image={docker} child={'Docker'}></Pill>
        <Pill bgColor={'2B2E34'} image={mysql} child={'MySQL'}></Pill>
        <Pill bgColor={'657B88'} image={postgree} child={'PostgreSQL'}></Pill>
        <Pill bgColor={'2B2E34'} image={cicd} child={'CI/CD'}></Pill>
        <Pill bgColor={'af9d33'} image={cypress} child={'Cypress'}></Pill>
      </TecItens>
    </Container>
  </Tecnologies>
)

export default Skill
