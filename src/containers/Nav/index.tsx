import { Item, Lista, ListaItens, Link, LinkExterno } from './styles'

const Nav = () => (
  <nav>
    <Lista>
      <Item>Leonardo</Item>
      <ListaItens>
        <Item>
          <Link href="">About Me</Link>
        </Item>
        <Item>
          <Link href="">Skills</Link>
        </Item>
        <Item>
          <Link href="">Experience</Link>
        </Item>
        <Item>
          <Link href="">Projects</Link>
        </Item>
        <Item>
          <Link href="">Contact</Link>
        </Item>
        <Item>
          <LinkExterno href="">Contact Me</LinkExterno>
        </Item>
      </ListaItens>
    </Lista>
  </nav>
)

export default Nav
