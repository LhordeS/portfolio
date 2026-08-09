// About section; content driven by src/data/site.json
import React from 'react'
import site from '../data/site.json'

export default function About(){
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About</h2>
        <p>{site.description} Software engineer specializing in Ruby on Rails, TypeScript, and PostgreSQL. I build web applications and data-driven tools, with experience in data aggregation, web scraping, APIs, and backend development. I enjoy working across the stack, from collecting and processing data to building practical, intuitive interfaces.</p>
      </div>
    </section>
  )
}
