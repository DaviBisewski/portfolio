import gsap from "gsap";

export function heroImageAnimation(target) {
  return gsap.fromTo(
    target,
    {
      opacity: 0,
      filter: "blur(20px)",
    },
    {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    }
  );
}
