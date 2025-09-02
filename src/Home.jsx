import React from 'react'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Resources from './Components/Resources/Resources'
import Contact from './Components/Contact/Contact'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Projects/>
        <Resources/>
        <Contact/>
    </div>
  )
}

export default Home