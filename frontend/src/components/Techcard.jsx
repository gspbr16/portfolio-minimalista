export default function TechCard({ name, category }) {
  return (
    <div className="group bg-[#111827] border border-white/10 p-6 rounded-2xl hover:border-[#00D1FF]/50 hover:shadow-lg hover:shadow-[#00D1FF]/10 transition-all duration-300">
      <div className="flex flex-col gap-1">
        {/* Categoria: Azul Ciano (igual ao badge 'Olá, eu sou') e sempre visível */}
        <span className="text-[10px] font-bold text-[#00D1FF] uppercase tracking-[0.2em] mb-1 block">
          {category}
        </span>
        
        {/* Nome da Tech: Branco (sempre visível), muda para azul no hover */}
        <h3 className="text-xl font-semibold text-white group-hover:text-[#00D1FF] transition-colors duration-300">
          {name}
        </h3>
      </div>
    </div>
  )
}