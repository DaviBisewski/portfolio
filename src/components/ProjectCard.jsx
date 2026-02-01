export default function ProjectCard({
  year,
  title,
  image,
  link,
  bgColor
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`
        group
        relative
        block
        overflow-hidden
        cursor-pointer
        ${bgColor}
      `}
    >
      {/* IMAGEM */}
      <img
        src={image}
        alt={title}
        className="
          w-full h-full object-cover
          transition-all duration-500
          group-hover:scale-105
          group-hover:brightness-50
        "
      />

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0
          flex flex-col justify-between
          p-6
          opacity-0
          group-hover:opacity-100
          transition duration-500
          bg-black/40
        "
      >
        {/* TOPO */}
        <div>
          <p className="text-sm text-white/70">
            {year}
          </p>

          <h3 className="text-4xl font-bold text-white leading-tight mt-1">
            {title}
          </h3>
          
          <span className="
            inline-block
            mt-4
            text-white/80
            font-medium
            text-md
            transition
            group-hover:translate-x-2
          ">
            Ver mais →
          </span>
        </div>
      </div>
    </a>
  );
}
