// About section; content driven by src/data/site.json
import React from 'react'
import site from '../data/site.json'

export default function About(){
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About</h2>
        <p>{site.description} I build web applications with a focus on maintainable backends and intuitive frontends.</p>
      </div>
    </section>
  )
}
