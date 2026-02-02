export default function SocialButton({ href, icon, label, download = false }) {
  return (
    <a
      href={href}
      download={download}
      target={!download ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="hover:scale-105 transition-all duration-300 block w-fit"
    >
      <div className="group relative flex items-center gap-2 md:gap-3 w-fit">

        {/* Ícone: w-6 no mobile, w-8 no desktop */}
        <img src={icon} alt={label} className="reveal w-8 h-8 md:w-8 md:h-8 object-contain" />

        {/* Texto: text-base no mobile, text-xl no desktop */}
        <p className="reveal text-base md:text-xl font-bold whitespace-nowrap">{label}</p>

        {/* Linha animada de sublinhado */}
        <span
          className="
            absolute -bottom-1 left-0
            h-[2px] w-0
            bg-black
            group-hover:w-full
            transition-all duration-300
          "
        ></span>

      </div>
    </a>
  )
}