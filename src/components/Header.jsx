import MenuIcon from '../assets/img/menu.png';

export default function Header({ onMenuClick }) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* WRAPPER FLEX FULL WIDTH */}
      <div className="flex items-center justify-between px-6 lg:px-16 py-6">

        {/* LOGO / NAME - Alterado para cinza fixo conforme solicitado */}
        <div
          onClick={scrollToTop}
          className="leading-tight cursor-pointer group text-black"
        >
          <p className="reveal font-bold text-2xl transition-colors duration-300 group-hover:text-gray-400">
            DAVI BISEWSKI
          </p>

          <p className="reveal text-sm transition-colors duration-300 group-hover:text-gray-400">
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