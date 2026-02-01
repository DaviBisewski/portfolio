import { useState } from "react";



import Figma from "../assets/img/figma.png";
import Github from "../assets/img/githubwhite.png";
import Git from "../assets/img/git.png";
import Mysql from "../assets/img/mySQL.png";
import Django from "../assets/img/django.png";
import ReactIcon from "../assets/img/react.png";
import Vue from "../assets/img/vue.png";
import JS from "../assets/img/javascript.png";
import Python from "../assets/img/python.png";

const techs = [
  { name: "Figma", icon: Figma },
  { name: "GitHub", icon: Github },
  { name: "Git", icon: Git },
  { name: "MySQL", icon: Mysql },
  { name: "Django", icon: Django },
  { name: "React", icon: ReactIcon },
  { name: "Vue", icon: Vue },
  { name: "JavaScript", icon: JS },
  { name: "Python", icon: Python },
];

export default function TechBar() {
  const [activeTech, setActiveTech] = useState(null);

  const handleCursorChange = (icon) => {
    document.body.style.cursor = `url(${icon}) 16 16, auto`;
    setActiveTech(icon);
  };

  const resetCursor = () => {
    document.body.style.cursor = "auto";
    setActiveTech(null);
  };

  return (
    <section
      className="relative w-full bg-black py-6 z-30"
      onClick={resetCursor}
    >

      {/* DESKTOP */}
      <div
        className="tech-reveal hidden lg:flex max-w-[1300px] mx-auto justify-center gap-6"
        onClick={(e) => e.stopPropagation()} // impede reset ao clicar em botão
      >

        {techs.map((tech) => (
          <button
            key={tech.name}
            onClick={() => handleCursorChange(tech.icon)}
            className={`
              cursor-pointer
              p-3 rounded-xl
              transition-all duration-300
              hover:scale-110
              hover:bg-white/10
              ${activeTech === tech.icon ? "bg-white/20 scale-110" : ""}
            `}
          >
            
            <img
              src={tech.icon}
              alt={tech.name}
              className="tech-item h-10 pointer-events-none "
            />
          </button>
        ))}

      </div>

      {/* MOBILE */}
      <div className="lg:hidden overflow-x-auto">
        <div className="flex gap-5 px-6 w-max">

          {techs.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center min-w-[70px]"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-8 opacity-80"
              />

              <span className="text-white text-xs mt-2">
                {tech.name}
              </span>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
