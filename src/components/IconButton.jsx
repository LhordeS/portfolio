// Reusable icon button for social links with accessible labels
import React from 'react'

export default function IconButton({ href, label, icon }){
  return (
    <a className="btn btn-outline-secondary" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <span className="me-2" aria-hidden>{icon}</span>
      <span className="d-none d-sm-inline">{label}</span>
    </a>
  )
}
