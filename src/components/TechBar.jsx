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
  return (
    <div
      className="
        relative
        z-30
        left-1/2
        right-1/2
        -ml-[50vw]
        -mr-[50vw]
        w-screen
        bg-black
        py-6
    
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-10">
        {techs.map((tech) => (
          <img
            key={tech.name}
            src={tech.icon}
            alt={tech.name}
            className="h-10 opacity-70 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}
