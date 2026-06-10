// Skills grid pulled from data file, grouped by category
import React from 'react'
import skillsData from '../data/skills.json'

export default function Skills(){
  const cats = skillsData.categories || []
  return (
    <section id="skills" className="section bg-light">
      <div className="container">
        <h2>Skills</h2>
        <div className="row">
          {cats.map(cat=> (
            <div className="col-6 col-md-3" key={cat.name}>
              <h5>{cat.name}</h5>
              <div>
                {cat.skills.map(s=> <span key={s} className="badge bg-secondary me-1 mb-1">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
