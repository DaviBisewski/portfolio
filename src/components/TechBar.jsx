import { useState } from "react";
import { TECHNOLOGIES } from "../constants";

export default function TechBar() {
  const [activeTech, setActiveTech] = useState(null);

  // Alterar o cursor do mouse para o ícone da tecnologia selecionada
  const handleCursorChange = (icon) => {
    if (typeof window !== 'undefined') {
      document.body.style.cursor = `url(${icon}) 16 16, auto`;
    }
    setActiveTech(icon);
  };

  // Reseta o cursor para o padrão do sistema
  const resetCursor = () => {
    if (typeof window !== 'undefined') {
      document.body.style.cursor = "auto";
    }
    setActiveTech(null);
  };

  return (
    <section
      className="relative w-full bg-black py-6 z-30"
      onClick={resetCursor}
    >
      {/* 
        Container de tecnologias:
        - Desktop: Grid centralizado
        - Mobile: Slider horizontal com scroll escondido
      */}
      <div className="max-w-[1300px] mx-auto">
        <div 
          className="
            flex items-center gap-6 px-6
            overflow-x-auto lg:overflow-visible
            lg:justify-center
            scrollbar-hide
          "
          style={{ 
            msOverflowStyle: 'none',  /* IE and Edge */
            scrollbarWidth: 'none'    /* Firefox */
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Estilo inline para esconder scrollbar no Chrome/Safari */}
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {TECHNOLOGIES.map((tech) => (
            <button
              key={tech.name}
              onClick={() => handleCursorChange(tech.icon)}
              className={`
                flex-shrink-0
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
                className="reveal tech-item h-8 md:h-10 pointer-events-none opacity-80 hover:opacity-100 transition-opacity"
              />
              
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}