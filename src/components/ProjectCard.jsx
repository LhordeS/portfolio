// Single project card component
import React from 'react'

export default function ProjectCard({ project }){
  const { title, description, tech, repo, demo, featured, image } = project
  return (
    <article className={`card project-card p-3 ${featured? 'featured':''}`} aria-labelledby={`${project.id}-title`}>
      {image && <img src={image} alt={title} className="card-img-top" />}
      <div className="card-body">
        <h3 id={`${project.id}-title`} className="h5">{title}</h3>
        <p className="text-muted small">{description}</p>
        <div className="mb-2">
          {tech.map(t=> <span key={t} className="badge bg-light text-dark me-1">{t}</span>)}
        </div>
        <div className="d-flex gap-2">
          <a className="btn btn-sm btn-outline-primary" href={repo} target="_blank" rel="noopener noreferrer">Repo</a>
          {demo && <a className="btn btn-sm btn-primary" href={demo} target="_blank" rel="noopener noreferrer">Live</a>}
        </div>
      </div>
    </article>
  )
}
