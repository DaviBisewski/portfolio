import React from 'react';

export default function CallToAction({ 
  smallText, 
  largeText, 
  link, 
  Icon 
}) {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-30 my-4 md:my-0 text-center px-4">
      
      <span className="reveal text-[10px] md:text-base font-medium tracking-[0.2em] text-gray-500 uppercase mb-2 md:mb-4">
        {smallText}
      </span>

      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-3 font-bold text-black transition-colors"
      >
        {/* 
          Ajuste de Texto:
          - max-[400px]:text-2xl -> Aplica text-2xl apenas em telas menores que 400px
          - text-3xl -> Tamanho padrão para mobile (acima de 400px)
          - md:text-7xl -> Tamanho para desktop
        */}
        <span className="relative reveal whitespace-nowrap text-2xl min-[401px]:text-3xl md:text-7xl">
          {largeText}
          
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </span>

        {Icon && (
          <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center transition-transform group-hover:scale-110">
             <img src={Icon} alt="icon" className="reveal w-full h-full object-contain" />
          </div>
        )}
      </a>
    </div>
  );
}