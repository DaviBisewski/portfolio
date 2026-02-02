import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const emailRef = useRef(null);
  const [localTime, setLocalTime] = useState('');
  const hasAnimated = useRef(false);

  // Função para obter o horário de Brasília em tempo real
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const brasiliaTime = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now);
      setLocalTime(brasiliaTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Animação GSAP para o email aparecer letra por letra
  useEffect(() => {
    const email = 'davimbisewski@gmail.com';
    const emailElement = emailRef.current;

    if (!emailElement) return;

    emailElement.innerHTML = '';
    const letters = email.split('').map((letter) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      emailElement.appendChild(span);
      return span;
    });

    ScrollTrigger.create({
      trigger: emailElement,
      start: 'top 90%',
      onEnter: () => {
        if (!hasAnimated.current) {
          gsap.to(letters, {
            opacity: 1,
            duration: 0.09,
            stagger: 0.1,
            ease: 'power2.out'
          });
          hasAnimated.current = true;
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer id='contatos' className="w-full bg-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Contato */}
        <div className="mb-2">
          <h2 className="text-xl font-bold text-black uppercase tracking-tight">Contato</h2>
        </div>

        {/* 2. Linha Divisória Superior */}
        <div className="w-full h-[1px] bg-gray-300 mb-12"></div>

        {/* 3. Email com Animação e Hover Criativo */}
        <div className="mb-16">
          <a
            href="mailto:davimbisewski@gmail.com"
            ref={emailRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-400  hover:bg-clip-text  hover:text-black transition-colors duration-500 ease-in-out inline-block break-all"
          >
            {/* GSAP preenche aqui */}
          </a>
        </div>

        {/* 4. Linha Divisória Inferior */}
        <div className="w-full h-[1px] bg-gray-300 mb-8"></div>

        {/* 5. Links Sociais */}
        <div className="grid grid-cols-2 md:flex md:justify-between gap-6 mb-16">
          <a href="https://github.com/davimbisewski" target="_blank" rel="noreferrer" className="text-xl font-bold text-black hover:opacity-60 transition-opacity">Github</a>
          <a href="https://linkedin.com/in/davibisewski" target="_blank" rel="noreferrer" className="text-xl font-bold text-black hover:opacity-60 transition-opacity">Linkedin</a>
          <a href="https://instagram.com/davi_bisewski" target="_blank" rel="noreferrer" className="text-xl font-bold text-black hover:opacity-60 transition-opacity">Instagram</a>
          <a href="https://wa.me/5547984828184?text=Olá Davi! Gostaria de saber mais sobre seu trabalho." target="_blank" rel="noreferrer" className="text-xl font-bold text-black hover:opacity-60 transition-opacity">Whatsapp</a>
        </div>

        {/* 6. Rodapé Final (Nome e Localização/Tempo) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] md:text-xs text-gray-400 font-medium tracking-widest uppercase gap-4">
          <div className="flex items-center gap-1">
            <span>©</span>
            <span>DAVI BISEWSKI</span>
          </div>
          
          <div className="flex gap-6 md:gap-10">
            <span>Joinville, BR</span>
            <span>TEMPO LOCAL: {localTime}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;