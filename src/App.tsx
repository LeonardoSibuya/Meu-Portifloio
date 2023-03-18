import React from 'react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import About from './containers/About'
import Contact from './containers/Contact'
import Experience from './containers/Experience'
import Hero from './containers/Hero'
import Nav from './containers/Nav'
import Projetos from './containers/Projetos'
import Skill from './containers/Skills'

import EstiloGlobal from './style'
import temaDark from './themes/dark'
import temaLight from './themes/light'

function App() {
  const [estaUsandoTemaLight, setEstaUsandoTemaLight] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaLight(!estaUsandoTemaLight)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaLight ? temaLight : temaDark}>
      <EstiloGlobal />
      <Nav />
      <Hero trocaTema={trocaTema} />
      <main>
        <About />
        <Skill />
        <Experience />
        <Projetos />
        <Contact />
      </main>
    </ThemeProvider>
  )
}

export default App
