export default function SectionTitle({ small, big }) {
  return (
    // Container com margem e preenchimento reduzidos no mobile para melhor aproveitamento de tela
    <div className="container mx-auto px-6 lg:px-10 mt-12 md:mt-20 py-8 md:py-12">
      
      {/* Subtítulo em caixa alta com rastreamento de letras */}
      <p className="text-gray-400 uppercase tracking-widest text-xs md:text-sm reveal mb-2">
        {small}
      </p>

      {/* Título principal com ajuste de escala responsiva */}
      <h2 className="text-4xl md:text-7xl font-bold reveal leading-tight">
        {big}
      </h2>
    </div>
  );
}