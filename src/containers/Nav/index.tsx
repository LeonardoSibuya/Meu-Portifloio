import React, { useState } from 'react'
import {
  Item,
  Lista,
  ListaItens,
  Link,
  LinkExterno,
  ListaItensContent,
  ItemNome
} from './styles'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav>
      <Lista>
        <ItemNome>Leonardo</ItemNome>
        <ListaItens>
          <button onClick={handleMenuClick}>&#9776;</button>
          <ListaItensContent isOpen={menuOpen}>
            <Item>
              <Link href="#about">About Me</Link>
            </Item>
            <Item>
              <Link href="#skill">Skills</Link>
            </Item>
            <Item>
              <Link href="#jobs">Jobs</Link>
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
              <LinkExterno href="tel:11974537646">Call Me</LinkExterno>
            </Item>
          </ListaItensContent>
        </ListaItens>
      </Lista>
    </nav>
  )
}

export default Nav
