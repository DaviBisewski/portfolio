import { useEffect } from "react"
import gsap from "./animations/gsap"


function App() {


  useEffect(() => {

    gsap.utils.toArray(".reveal").forEach((el) => {

      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })

    })

  }, [])

  return (
    <>
  
    <div className="bg-black text-white text-6xl p-10">
      TAILWIND FUNCIONANDO
    </div>
  




    </>
  )
}

export default App
