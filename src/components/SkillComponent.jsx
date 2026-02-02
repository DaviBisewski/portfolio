import React from 'react';

const SkillIcon = ({ name, icon, isVisible }) => {
  return (
    // Animação de entrada (reveal)
    <div 
      className={`transition-all duration-700 ease-out transform 
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
      `}
    >
      {/* 
        Card da Skill:
        - Mantém proporções originais (w-20/w-28)
        - Adicionado 'active:' para simular hover no mobile ao clicar
      */}
      <div className="
        group relative flex items-center justify-center 
        w-20 h-20 md:w-28 md:h-28 
        bg-white rounded-2xl shadow-lg 
        transition-all duration-300 
        hover:scale-110 hover:shadow-2xl hover:-translate-y-2 
        active:scale-110 active:shadow-2xl active:-translate-y-2
        cursor-pointer overflow-hidden
      ">
        
        {/* Fundo sutil no hover/active */}
        <div className="absolute inset-0 from-gray-50 to-white opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity" />
        
        {/* Ícone da Tecnologia */}
        <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-active:scale-110">
          {icon ? (
            <img 
              src={icon} 
              alt={name} 
              className="w-full h-full object-contain"
              onError={(e) => {
                if (typeof icon === 'object' && icon.src) e.target.src = icon.src;
              }}
            />
          ) : (
            <div className="w-full h-full bg-gray-100 rounded-full animate-pulse" />
          )}
        </div>

        {/* Nome da tecnologia: aparece no hover (Desktop) ou no toque (Mobile) */}
        <div className="absolute bottom-2 left-0 right-0 text-center">
          <span className="
            text-[10px] font-bold uppercase tracking-widest text-gray-400 
            opacity-0 group-hover:opacity-100 group-active:opacity-100 
            transition-all duration-300 
            translate-y-2 group-hover:translate-y-0 group-active:translate-y-0
          ">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillIcon;