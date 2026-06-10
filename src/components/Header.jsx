// Header with navigation and theme toggle
import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header({ active, onNav }){
  const nav = [
    {id:'hero',label:'Home'},
    {id:'about',label:'About'},
    {id:'projects',label:'Projects'},
    {id:'skills',label:'Skills'},
    {id:'contact',label:'Contact'}
  ]

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white" aria-label="Main navigation">
      <div className="container">
        <a className="navbar-brand" href="#hero">Alain Mimeault</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {nav.map(item => (
              <li className="nav-item" key={item.id}>
                <a className={`nav-link ${active===item.id? 'active':''}`} href={`#${item.id}`} onClick={(e)=>{onNav(item.id)}}>{item.label}</a>
              </li>
            ))}
            <li className="nav-item d-flex align-items-center ms-3">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
