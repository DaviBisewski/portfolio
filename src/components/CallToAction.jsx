import React from 'react';

export default function CallToAction({ 
  smallText , 
  largeText , 
  link , 
  Icon 
} ) {
  return (
    <div className="flex flex-col items-center justify-center py-30 text-center">
      {/* TEXTO PEQUENO */}
      <span className="reveal text-xs md:text-base font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">
        {smallText}
      </span>

      {/* LINK COM TEXTO GRANDE E ÍCONE */}
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 text-4xl md:text-7xl font-bold text-black transition-colors"
      >
        <span className="relative reveal">
          {largeText}
          {/* LINHA DE SUBLINHADO (HOVER) */}
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </span>

        {/* ÍCONE */}
        {Icon && (
          <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center transition-transform group-hover:scale-110">
             <img src={Icon} alt="icon" className="reveal w-full h-full object-contain" />
          </div>
        )}
      </a>
    </div>
  );
}
