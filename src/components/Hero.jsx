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
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      heroImageAnimation(heroImageRef.current);
    }
  }, []);

  const socialLinks = [
    { href: "https://github.com/DaviBisewski", icon: GithubIcon, label: "GitHub" },
    { href: "https://linkedin.com/in/seuperfil", icon: LinkedinIcon, label: "LinkedIn" },
    { href: "/Davi Bisewski.pdf", icon: DownloadIcon, label: "Currículo", download: true },
  ];

  return (
<section className="relative min-h-screen overflow-hidden px-6 lg:px-20">
  {/* TEXTO DECORATIVO */}
  <span
    aria-hidden
    className="
      absolute inset-0
      flex items-start justify-center
      pt-24
      font-extrabold text-[16vw]
      text-inner-shadow opacity-20
      select-none pointer-events-none
    "
  >
    Dev Júnior
  </span>

  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">
    {/* TEXTO */}
    <div className="flex flex-col justify-center gap-4 max-w-xl translate-y-  0">
      <p className="reveal text-xl text-gray-500">
        Davi Bisewski
      </p>

      <h1 className="reveal text-4xl md:text-6xl font-bold">
        Desenvolvedor Júnior
      </h1>

      <p className="reveal text-lg leading-relaxed max-w-2xl">
        Formado no Instituto Federal Catarinense em Informática para Internet
        e futuro Engenheiro de Software pela Católica de Santa Catarina.
        Sou um jovem dev com experiências reais.
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
    <div className="flex justify-center lg:justify-end items-center">
      <img
        ref={heroImageRef}
        src={HeroImage}
        alt="Davi Bisewski"
        className="reveal w-full max-w-lg pointer-events-none"
      />
    </div>
  </div>
</section>

  );
}
