// Contact & social links; uses IconButton for accessible icon links
import React from 'react'
import site from '../data/site.json'
import IconButton from './IconButton'
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa'

export default function Contact(){
  return (
    <section id="contact" className="section">
      <div className="container text-center">
        <h2>Contact</h2>
        <p>Find me on these platforms or download my CV.</p>
        <div className="d-flex justify-content-center gap-2 mb-3">
          <IconButton href={site.social.github} label="GitHub" icon={<FaGithub/>} />
          <IconButton href={site.social.linkedin} label="LinkedIn" icon={<FaLinkedin/>} />
          <IconButton href={site.social.email} label="Email" icon={<FaEnvelope/>} />
          <IconButton href={site.resume} label="Résumé" icon={<FaFilePdf/>} />
          <IconButton href={site.履歴書} label="履歴書" icon={<FaFilePdf/>} />
          <IconButton href={site.職務経歴書} label="職務経歴書" icon={<FaFilePdf/>} />
        </div>
      </div>
    </section>
  )
}
