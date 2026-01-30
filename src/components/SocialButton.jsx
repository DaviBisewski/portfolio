export default function SocialButton({ href, icon, label, download = false }) {
  return (
    <a
      href={href}
      download={download}
      target={!download ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="hover:scale-105 transition-all duration-300"
    >
      <div className="group relative flex items-center gap-3 w-fit">

        <img src={icon} alt={label} className="w-8 h-8" />

        <p className="text-xl font-bold">{label}</p>

        {/* LINHA ANIMADA */}
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
