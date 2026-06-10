// Hero section with name, tagline and quick CTA
import React from 'react'
import site from '../data/site.json'

export default function Hero(){
  return (
    <header id="hero" className="section">
      <div className="container text-center">
        <h1 className="display-5">{site.name}</h1>
        <p className="lead text-muted">{site.tagline}</p>
        <p className="mb-4">{site.description}</p>
        <a className="btn btn-primary" href="#projects" role="button">See Projects</a>
      </div>
    </header>
  )
}
