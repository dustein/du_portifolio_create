export function ProjectCard({ screenshot, title, description, tags, link }) {
  return (
    <div className="group relative bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/10 mb-10">
      
      <div className="bg-slate-100 overflow-hidden flex justify-center pt-2">
        
        <div className="w-40 bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400 font-texts font-bold">
          { screenshot }
        </div>
      </div>

      {/* 2. CONTEÚDO */}
      <div className="p-6">

        <h3 className="font-titles text-lg sm:text-2xl font-black tracking-tighter text-slate-900 mb-2">
          {title}
        </h3>

        {/* Tags sutis */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] sm:text-xs uppercase tracking-widest font-texts font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Descrição com Lora (Serif) */}
        <p className="font-texts sm:text-2xl text-slate-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Links de Ação */}
        <div className="flex items-center gap-6">
          <a href={link} className="font-texts text-sm font-bold text-sky-600 hover:text-sky-800 transition-colors border-b-2 border-sky-600/20 pb-0.5 tracking-widest">
            LINK →
          </a>          
        </div>
      </div>
    </div>
  );
}