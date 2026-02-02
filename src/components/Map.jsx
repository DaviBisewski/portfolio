import React, { useEffect, useState, useRef } from 'react';
import SkillIcon from './SkillComponent';
import Figma from "../assets/img/figma.png";
import Github from "../assets/img/github.png";
import Git from "../assets/img/git.png";
import Mysql from "../assets/img/mySQL.png";
import Django from "../assets/img/django.png";
import ReactIcon from "../assets/img/react.png";
import Vue from "../assets/img/vue.png";
import JS from "../assets/img/javascript.png";
import Python from "../assets/img/python.png";
import Us from "../assets/img/usa.png";

const skillsList = [
  { name: "Figma", icon: Figma },
  { name: "GitHub", icon: Github },
  { name: "Git", icon: Git },
  { name: "MySQL", icon: Mysql },
  { name: "Vue", icon: Vue },
  { name: "JavaScript", icon: JS },
  { name: "Python", icon: Python },
  { name: "Django", icon: Django },
  { name: "React", icon: ReactIcon },
  { name: 'Inglês', icon: Us },
];

const EducationMap = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      const timer = setInterval(() => {
        setVisibleCount(prev => {
          if (prev < skillsList.length) return prev + 1;
          clearInterval(timer);
          return prev;
        });
      }, 200);
      return () => clearInterval(timer);
    }
  }, [hasStarted]);

  return (
    <div ref={sectionRef}  className="w-full max-w-7xl mx-auto py-20 px-6 font-sans">
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
        
        {/* LADO ESQUERDO: Iframe do Mapa */}
        <div className="relative w-full lg:w-3/5 h-[400px] md:h-[600px]  overflow-hidden  z-10">
          <div className="absolute inset-0 grayscale contrast-110 hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1132VdUX99pc6Lp-qEjhM-ZzEUyShcLc&ehbc=2E312F&noprof=1"
              width="100%" 
              height="100%" 
              style={{ border: 0, marginTop: '-60px' }}
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
          {/* Overlay suave para integrar com o design */}
          <div className="absolute inset-0 pointer-events-none" />
        </div>

        {/* LADO DIREITO: Grade de Ícones (Sobrepondo o mapa em Desktop) */}
        <div className="w-full lg:w-1/2 lg:-ml-32 z-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 md:gap-6">
            {skillsList.map((skill, index) => (
              <div 
                key={skill.name} 
                className="flex justify-center items-center"
              >
                <SkillIcon 
                  name={skill.name} 
                  icon={skill.icon} 
                  isVisible={visibleCount > index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Texto de Fundo (Opcional, estilo a imagem "LET'S WORK") */}
        <div className="absolute top-0 right-0 -z-0 opacity-[0.03] select-none pointer-events-none hidden xl:block">
          <h2 className="text-[180px] font-black leading-none uppercase text-black">
            ESTUDOS<br/>JORNADA<br/>SABEDORIA
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EducationMap;