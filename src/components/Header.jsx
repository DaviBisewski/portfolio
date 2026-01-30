import Menu from '../assets/img/menu.png'

export default function Header({ onMenuClick }) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">

      <div className="px-8 py-6 flex items-center justify-between">
        
        {/* LOGO / NAME */}
        <div 
          onClick={scrollToTop}
          className="leading-tight cursor-pointer group"
        >
          <p className="reveal font-bold text-2xl transition-colors duration-300 group-hover:text-gray-500">
            Davi Bisewski
          </p>

          <p className="reveal text-sm transition-colors duration-300 group-hover:text-gray-500">
            Desenvolvedor Júnior
          </p>
        </div>

        {/* MENU BUTTON */}
        <button
          onClick={onMenuClick}
          className="reveal cursor-pointer flex items-center gap-6 text-xl font-bold group transition-colors duration-300 hover:text-gray-500"
        >
          Menu

          <img 
            src={Menu}
            alt="Menu Icon"
            className="reveal w-8 h-6 transition-all duration-300 group-hover:h-8"
          />

        </button>

      </div>

    </header>
  )
}
