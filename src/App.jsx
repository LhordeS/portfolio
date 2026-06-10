// Main App: single-page layout combining header and sections; handles active nav state
import React, { useState, useCallback } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollObserver from './components/ScrollObserver'

const SECTIONS = ['hero','about','projects','skills','contact']

export default function App(){
  const [active, setActive] = useState('hero')

  const handleChange = useCallback((id)=> setActive(id), [])
  const handleNavClick = (id)=>{
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({behavior:'smooth'})
  }

  return (
    <div>
      <Header active={active} onNav={handleNavClick} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollObserver sectionIds={SECTIONS} onChange={handleChange} />
    </div>
  )
}
