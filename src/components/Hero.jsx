import { useEffect, useRef } from "react";

import GithubIcon from "../assets/img/github.png";
import LinkedinIcon from "../assets/img/linkedin.png";
import DownloadIcon from "../assets/img/download.png";
import HeroImage from "../assets/img/Foto.png";

import SocialButton from "../components/SocialButton";
import { heroImageAnimation } from "../animations/heroImageAnimation";

export default function Hero() {
  const heroImageRef = useRef(null);

  // Lógica para inicializar animação da imagem se o usuário não preferir movimento reduzido
  useEffect(() => {
    if (!heroImageRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion) {
      heroImageAnimation(heroImageRef.current);
    }
  }, []);

  const socialLinks = [
    {
      href: "https://github.com/DaviBisewski",
      icon: GithubIcon,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/davibisewski",
      icon: LinkedinIcon,
      label: "LinkedIn",
    },
    {
      href: "/Davi Bisewski.pdf",
      icon: DownloadIcon,
      label: "Currículo",
      download: true,
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-white">
      
      {/* Texto decorativo de fundo - Ajustado para não quebrar no mobile */}
      <span
        aria-hidden
        className="hidden lg:block
          absolute
          top-32
          left-1/2 -translate-x-1/2
          font-extrabold
          text-[16vw]
          text-inner-shadow
          opacity-[0.2]
          whitespace-nowrap
          select-none pointer-events-none"
      >
        Dev Júnior
      </span>

      {/* Container Principal */}
      <div className="relative z-10 container mx-auto px-6 lg:px-10 flex-grow flex flex-col lg:grid lg:grid-cols-2">
        
        {/* Seção de Conteúdo (Texto e Links) */}
        <div className="flex flex-col justify-center pt-32 pb-10 lg:py-0 order-1 2xl:mt-90">
          <div className="max-w-xl">
            <p className="reveal text-lg md:text-xl text-gray-500 font-medium ">DAVI BISEWSKI</p>

            <h1 className="reveal text-4xl md:text-7xl font-bold leading-tight mb-6">
              Desenvolvedor <span className="text-gray-800">Júnior</span>
            </h1>

            <p className="reveal text-base md:text-lg leading-relaxed text-gray-700 mb-8">
              Formado no Instituto Federal Catarinense em Informática para
              Internet e futuro Engenheiro de Software pela Católica de Santa
              Catarina. Sou um jovem dev com experiências reais.
            </p>

            {/* Links Sociais */}
            <div className="flex flex-nowrap md:flex-wrap items-center gap-6 md:gap-6 mt-6">
              {socialLinks.map((item) => (
                <SocialButton
                  key={item.label}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  download={item.download}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Seção da Imagem - Agora abaixo no mobile e grudada no bottom */}
        <div className="relative flex justify-center lg:justify-end items-end order-2 mt-auto">
          <img
            ref={heroImageRef}
            src={HeroImage}
            alt="Davi Bisewski"
            className="
              reveal
              pointer-events-none
              w-[280px]
              sm:w-[350px]
              md:w-[420px]
              lg:w-[450px]
              xl:w-[580px]
              object-contain
              block
            "
            style={{ marginBottom: '-1px' }} // Garante que não haja frestas no fundo
          />
        </div>
      </div>

      {/* Indicador de Scroll - Oculto em telas muito pequenas para não sobrepor a imagem */}
      <div className="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <div className="mouse-indicator">
          <span className="wheel"></span>
        </div>
      </div>
    </section>
  );
}