// Theme toggle button; persists preference in localStorage and toggles dark class on <html>
import React, { useEffect, useState } from 'react'

export default function ThemeToggle(){
  const [dark, setDark] = useState(true)

  useEffect(()=>{
    const saved = localStorage.getItem('prefers-dark')
    if(saved!==null){
      const next = saved === 'true'
      setDark(next)
      document.documentElement.classList.toggle('light', !next)
    }
  },[])

  function toggle(){
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('light', !next)
    localStorage.setItem('prefers-dark', next)
  }

  return (
    <button className="btn btn-outline-secondary btn-sm" onClick={toggle} aria-label="Toggle color mode">
      {dark? 'Light' : 'Dark'}
    </button>
  )
}
