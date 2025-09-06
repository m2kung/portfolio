import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Resources from './Components/Resources/Resources'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Home'
import ResourcesPage from './Components/Resources/ResourcesPage'
import Guitar from './Components/Projects/Guitar'

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (

    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guitar" element={<Guitar />} />
          <Route path="/Resources" element={<ResourcesPage />} />
        </Routes>
        <Footer />

    </div>     
  )
}

export default App