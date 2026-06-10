// Simple footer for attribution and copyright
import React from 'react'

export default function Footer(){
  return (
    <footer className="py-4">
      <div className="container text-center small text-muted">© {new Date().getFullYear()} Alain Mimeault</div>
    </footer>
  )
}
