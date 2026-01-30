import GithubIcon from "../assets/img/github.png";
import LinkedinIcon from "../assets/img/linkedin.png";
import SocialButton from "../components/SocialButton";
import Download from "../assets/img/download.png";
import HeroImage from "../assets/img/foto.png";
import { useEffect, useRef } from "react";
import { heroImageAnimation } from "../animations/heroImageAnimation";

export default function Hero() {
  const heroImageRef = useRef(null);

  useEffect(() => {
    if (heroImageRef.current) {
      heroImageAnimation(heroImageRef.current);
    }
  }, []);

  return (
   <section className="relative min-h-[90vh] flex items-center">
  {/* TEXTO BACKGROUND */}
  <h1 className="reveal -mt-20 text-inner-shadow text-[16vw] font-bold">
    Dev Júnior
  </h1>

  {/* IMAGEM HERO */}
  <img
    ref={heroImageRef}
    src={HeroImage}
    alt="Davi Bisewski"
    className="
      absolute
      right-0
      top-1/2
      -translate-y-1/2
      w-[520px]
      z-20
      pointer-events-none
    "
  />

  {/* BLOCO DOS PARÁGRAFOS */}
  <div className="absolute left-10 top-1/2 translate-y-20 flex flex-col gap-4 max-w-3xl z-10">
    <p className="reveal text-xl text-gray-500">Davi Bisewski</p>

    <p className="reveal text-6xl font-bold">Desenvolvedor Júnior</p>

    <p className="reveal text-lg max-w-2xl">
      Formado no Instituto Federal Catarinense em Informática para Internet
      e futuro Engenheiro de Software pela Católica de Santa Catarina. Sou
      um jovem dev com experiências reais.
    </p>

    <div className="flex gap-8 mt-6">
      <SocialButton
        href="https://github.com/DaviBisewski"
        icon={GithubIcon}
        label="GitHub"
        className="reveal"
      />

      <SocialButton
        href="https://linkedin.com/in/seuperfil"
        icon={LinkedinIcon}
        label="LinkedIn"
      />

      <SocialButton
        href="/Davi Bisewski.pdf"
        icon={Download}
        label="Currículo"
        download
      />
    </div>
  </div>
</section>

  );
}
