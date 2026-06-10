// Projects section: loads project list from data file and renders cards
import React from 'react'
import projectsData from '../data/projects.json'
import ProjectCard from './ProjectCard'

export default function Projects(){
  const projects = projectsData.projects || []
  // Featured projects first
  projects.sort((a,b)=> (b.featured?1:0) - (a.featured?1:0))

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="row gy-4">
          {projects.map(p=> (
            <div className="col-12 col-md-6 d-flex" key={p.id}>
              <ProjectCard project={p} className="w-100"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
