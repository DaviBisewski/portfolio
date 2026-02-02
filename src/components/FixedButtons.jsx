import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Letter from '../assets/img/mensagem.png'; 
import ArrowUp from '../assets/img/arrowup.png';

// Registra o plugin do GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin);
}

const FixedButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitora o scroll para mostrar/esconder o botão de voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      // Aparece após 300px de scroll
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    // Implementação do scroll suave com GSAP para garantir funcionamento no Opera GX
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: 0 },
      ease: "power3.inOut"
    });
  };

  const buttonBaseStyle = "fixed bottom-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-[#E5E5E5] backdrop-blur-sm shadow-sm hover:bg-[#D4D4D4] transition-all duration-500 ease-in-out group overflow-hidden";

  return (
    <>
      <a
        href="https://wa.me/5547984828184?text=Olá Davi! Gostaria de saber mais sobre seu trabalho."
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBaseStyle} left-8`}
        aria-label="Enviar mensagem no WhatsApp"
      >
        <img 
          src={Letter} 
          alt="Mensagem" 
          className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </a>

      {/* Botão Voltar ao Topo (Canto Inferior Direito) */}
      <button
        onClick={scrollToTop}
        className={`${buttonBaseStyle} right-8 cursor-pointer ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <img 
          src={ArrowUp}
          alt="Voltar ao topo" 
          className=" w-6 h-6 object-contain group-hover:-translate-y-1 transition-transform duration-300"
        />
      </button>
    </>
  );
};

export default FixedButtons;