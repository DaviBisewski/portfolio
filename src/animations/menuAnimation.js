import gsap from "gsap"

export const openMenu = (menuRef) => {
  gsap.fromTo(
    menuRef.current,
    {
      y: "100%",
    },
    {
      y: "0%",
      duration: 0.8,
      ease: "power4.out",
    }
  )
}

export const closeMenu = (menuRef, onComplete) => {
  gsap.to(menuRef.current, {
    y: "100%",
    duration: 0.6,
    ease: "power4.in",
    onComplete,
  })
}
