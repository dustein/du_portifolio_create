import { ProjectCard } from './ProjectCard';
export function ProjectsSection() {
  return (
    // Removido py-32 e adicionado pt-10 para não empurrar o título muito para baixo
    // O bg-slate-50 agora casa perfeitamente com o gradiente da Hero
    <section className="relative pb-32 pt-10 px-8 md:px-16 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-3xl sm:text-5xl font-black tracking-tighter mb-16 text-slate-600">
          /some_projects<span className="text-sky-400">_</span>
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