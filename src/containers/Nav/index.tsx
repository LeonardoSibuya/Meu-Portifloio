import { Item, Lista, ListaItens, Link, LinkExterno } from './styles'

const Nav = () => (
  <nav>
    <Lista>
      <Item>Leonardo</Item>
      <ListaItens>
        <Item>
          <Link href="#about">About Me</Link>
        </Item>
        <Item>
          <Link href="#skill">Skills</Link>
        </Item>
        <Item>
          <Link href="#experience">Experience</Link>
        </Item>
        <Item>
          <Link href="#project">Projects</Link>
        </Item>
        <Item>
          <Link href="#contact">Contact</Link>
        </Item>
        <Item>
          <LinkExterno href="tel:11974537646">Contact Me</LinkExterno>
        </Item>
      </ListaItens>
    </Lista>
  </nav>
)

export default Nav
