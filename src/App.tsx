import React from 'react'
import About from './containers/About'
import Hero from './containers/Hero'
import Nav from './containers/Nav'
import EstiloGlobal from './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Nav />
      <Hero />
      <main>
        <About />
      </main>
    </>
  )
}

export default App
