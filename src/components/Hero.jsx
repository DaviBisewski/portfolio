import { useEffect, useRef } from "react";

import GithubIcon from "../assets/img/github.png";
import LinkedinIcon from "../assets/img/linkedin.png";
import DownloadIcon from "../assets/img/download.png";
import HeroImage from "../assets/img/foto.png";

import SocialButton from "../components/SocialButton";
import { heroImageAnimation } from "../animations/heroImageAnimation";

export default function Hero() {
  const heroImageRef = useRef(null);

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
      href: "https://linkedin.com/in/seuperfil",
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
    <section className="relative min-h-screen overflow-hidden">
      {/* TEXTO DECORATIVO */}
      <span
        aria-hidden
        className="
          hidden lg:block
          absolute
          top-32
          left-1/2 -translate-x-1/2
          font-extrabold
          text-[16vw]
          text-inner-shadow
          opacity-[0.2]
          whitespace-nowrap
          select-none pointer-events-none
        "
      >
        Dev Júnior
      </span>

      {/* CONTAINER DA HERO (1300px) */}
      <div className="relative z-10 container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* TEXTO */}
          <div
            className="relative z-10 flex flex-col gap-4 max-w-xl order-2 lg:order-1
                pt-40 lg:pt-90 2xl:pt-120"
          >
            <p className="reveal text-xl text-gray-500">Davi Bisewski</p>

            <h1 className="reveal text-4xl md:text-6xl font-bold">
              Desenvolvedor Júnior
            </h1>

            <p className="reveal text-lg leading-relaxed">
              Formado no Instituto Federal Catarinense em Informática para
              Internet e futuro Engenheiro de Software pela Católica de Santa
              Catarina. Sou um jovem dev com experiências reais.
            </p>

            <div className="flex flex-wrap gap-6 mt-6">
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

          {/* IMAGEM */}
          <div className="relative z-20 flex justify-center lg:justify-end items-end order-1 lg:order-2">
            <img
              ref={heroImageRef}
              src={HeroImage}
              alt="Davi Bisewski"
              className="
                reveal
                pointer-events-none
                -translate-y-6
                w-[260px]
                sm:w-[320px]
                md:w-[380px]
                lg:w-[400px]
                xl:w-[540px]
              "
            />
          </div>
        </div>
      </div>
      {/* SCROLL INDICATOR */}
      <div className="hidden md:block absolute lg:bottom-25 2xl:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="mouse-indicator">
          <span className="wheel"></span>
        </div>
      </div>
    </section>
  );
}
