import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useReveal() {

  useEffect(() => {

    const elements = document.querySelectorAll('.reveal')

    elements.forEach((el) => {

      gsap.fromTo(el,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true // 🔥 só anima UMA vez
          }
        }
      )

    })

  }, [])

}
