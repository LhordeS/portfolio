// Observes sections to add 'in-view' class and report active section via callback
import { useEffect } from 'react'

export default function ScrollObserver({ sectionIds, onChange }){
  useEffect(()=>{
    const sections = sectionIds.map(id=>document.getElementById(id)).filter(Boolean)

    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('in-view')
          onChange && onChange(entry.target.id)
        }
      })
    }, { threshold: 0.45 })

    sections.forEach(s=>{
      s.classList.add('reveal')
      io.observe(s)
    })

    return ()=> io.disconnect()
  }, [sectionIds, onChange])

  return null
}
