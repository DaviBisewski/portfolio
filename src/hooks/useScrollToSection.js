import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Registra o plugin uma única vez
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin);
}

/**
 * Hook para fazer scroll suave para seções usando GSAP
 * @returns {object} Objeto com função de scroll
 */
export const useScrollToSection = () => {
  const scrollToSection = (target, isTop = false) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: isTop ? 0 : target,
      ease: 'power4.inOut',
    });
  };

  return { scrollToSection };
};

/**
 * Scroll suave para o topo da página
 */
export const scrollToTop = () => {
  gsap.to(window, {
    duration: 1.2,
    scrollTo: { y: 0 },
    ease: 'power3.inOut',
  });
};
