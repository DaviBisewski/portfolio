import MenuIcon from '../assets/img/menu.png';

export default function Header({ onMenuClick }) {
  
  // Lógica para rolar a página até o topo suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    // Header fixo com fundo translúcido (glassmorphism) em telas menores
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      
      {/* Container principal com espaçamento responsivo */}
      <div className="flex items-center justify-between px-6 lg:px-16 py-4 md:py-6">

        {/* Identidade Visual / Logo */}
        <div
          onClick={scrollToTop}
          className="leading-tight cursor-pointer group text-black"
        >
          <p className="reveal font-bold text-xl md:text-2xl transition-colors duration-300 group-hover:text-gray-400">
            DAVI BISEWSKI
          </p>
          <p className="reveal text-xs md:text-sm transition-colors duration-300 group-hover:text-gray-400">
            Desenvolvedor Júnior
          </p>
        </div>

        {/* MENU BUTTON */}
        <button
          onClick={onMenuClick}
          className="reveal cursor-pointer flex items-center gap-4 text-lg font-bold group transition-colors duration-300 text-black hover:text-gray-500"
        >
          Menu

          <img
            src={MenuIcon}
            alt="Menu Icon"
            className="reveal w-7 h-5 transition-all duration-300 group-hover:h-7"
          />
        </button>
      </div>
    </header>
  );
}