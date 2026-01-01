export function ProjectCard({ title, description, tags, link, github }) {
  return (
    <div className="group relative bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10">
      
      {/* 1. IMAGEM / THUMBNAIL */}
      <div className="aspect-video bg-slate-100 overflow-hidden">
        {/* Aqui você colocaria a imagem do projeto */}
        <div className="w-full h-full bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400 font-sans font-bold">
          [Projeto Screenshot]
        </div>
      </div>

      {/* 2. CONTEÚDO */}
      <div className="p-6">
        {/* Título com Montserrat */}
        <h3 className="font-sans text-2xl font-black tracking-tighter text-slate-900 mb-2">
          {title}
        </h3>

        {/* Tags sutis */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-sans font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Descrição com Lora (Serif) */}
        <p className="font-serif text-slate-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Links de Ação */}
        <div className="flex items-center gap-6">
          <a href={link} className="font-sans text-sm font-bold text-sky-600 hover:text-sky-800 transition-colors border-b-2 border-sky-600/20 pb-0.5">
            LIVE DEMO →
          </a>
          <a href={github} className="font-sans text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
}

// Como usar na sua página de projetos:
export function ProjectsSection() {
  return (
    <section className="py-32 px-8 md:px-16 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-5xl font-black tracking-tighter mb-16 text-slate-900">
          /projetos<span className="text-sky-600">_</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard 
            title="Finance Dashboard"
            description="Uma plataforma full-stack para gestão financeira pessoal com gráficos em tempo real e integração com APIs bancárias."
            tags={["React", "Node.js", "PostgreSQL"]}
            link="#"
            github="#"
          />
          <ProjectCard 
            title="E-commerce API"
            description="Arquitetura escalável de microsserviços para processamento de pagamentos e controle de estoque de alto volume."
            tags={["TypeScript", "Docker", "Redis"]}
            link="#"
            github="#"
          />
        </div>
      </div>
    </section>
  );
}