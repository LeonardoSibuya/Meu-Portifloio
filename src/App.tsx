import React from 'react'
import About from './containers/About'
import Contact from './containers/Contact'
import Experience from './containers/Experience'
import Hero from './containers/Hero'
import Nav from './containers/Nav'
import Projetos from './containers/Projetos'
import Skill from './containers/Skills'
import EstiloGlobal from './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Nav />
      <Hero />
      <main>
        <About />
        <Skill />
        <Experience />
        <Projetos />
        <Contact />
      </main>
    </>
  )
}

export default App
