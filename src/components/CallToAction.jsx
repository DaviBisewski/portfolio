import React from 'react';

export default function CallToAction({ 
  smallText, 
  largeText, 
  link, 
  Icon 
}) {
  return (
    
    <div className="flex flex-col items-center justify-center  md:py-30 my-4 md:my-0 text-center px-4">
      
      {/* Texto pequeno superior */}
      <span className="reveal text-[10px] md:text-base font-medium tracking-[0.2em] text-gray-500 uppercase mb-2 md:mb-4">
        {smallText}
      </span>

      {/* 
        Link Principal:
        - Mobile: Flex-col para colocar o ícone abaixo do texto
        - Desktop: Flex-row (padrão) para manter o ícone ao lado
      */}
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-3 text-3xl md:text-7xl font-bold text-black transition-colors"
      >
        <span className="relative reveal whitespace-nowrap">
          {largeText}
          
          {/* Linha de sublinhado original */}
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </span>

        {/* Ícone: Abaixo do texto no mobile, ao lado no desktop */}
        {Icon && (
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform group-hover:scale-110">
             <img src={Icon} alt="icon" className="reveal w-full h-full object-contain" />
          </div>
        )}
      </a>
    </div>
  );
}