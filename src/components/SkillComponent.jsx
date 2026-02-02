const SkillIcon = ({ name, icon, isVisible }) => {
  return (
    <div 
      className={`transition-all duration-700 ease-out transform 
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
      `}
    >
      <div className="group relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-white rounded-2xl shadow-lg  transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden">
       
        <div className="absolute inset-0  from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
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

        {/* Badge discreto com nome no hover */}
        <div className="absolute bottom-2 left-0 right-0 text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillIcon;
