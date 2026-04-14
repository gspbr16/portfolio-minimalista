export default function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="group bg-[#111827] border border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
      {/* Container da Imagem: Agora renderiza a prop 'image' */}
      <div className="h-48 bg-[#1f2937] overflow-hidden flex items-center justify-center border-b border-white/5 relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
          />
        ) : (
          <div className="text-gray-500 italic text-sm">Sem imagem disponível</div>
        )}
        {/* Overlay de brilho sutil no hover */}
        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </div>
      
      <div className="p-8">
        {/* Título: Branco por padrão, azul no hover */}
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#00D1FF] transition-colors uppercase tracking-tight">
          {title}
        </h3>
        
        {/* Descrição: Cinza claro */}
        <p className="text-gray-400 mb-6 leading-relaxed font-medium">
          {description}
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 text-[#00D1FF] px-3 py-1 rounded-full border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}