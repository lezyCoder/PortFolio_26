import React from 'react'

import Layout from './Components/Layout'
import Hero from './Components/Hero'
import Services from './Components/Services'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'

const App = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Skills />
      <Projects />
    </Layout>

  )
}

export default App
