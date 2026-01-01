import { ProjectCard } from './ProjectCard';
export function ProjectsSection() {
  return (
    <section className="relative pb-10 sm:pb-32 pt-5 sm:pt-10 px-8 md:px-16 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-texts text-2xl sm:text-5xl font-bold tracking-tighter mb-6 sm:mb-20 text-slate-600 bg-sky-200 px-4 pb-1">
          /some_projects<span className="text-sky-400">_</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <ProjectCard 
            title="Finance Dashboard"
            description="Uma plataforma full-stack para gestão financeira pessoal com gráficos em tempo real e integração com APIs bancárias."
            tags={["React", "Node.js", "PostgreSQL"]}
            link="#"
          />

          <ProjectCard 
            title="E-commerce API"
            description="Arquitetura escalável de microsserviços para processamento de pagamentos e controle de estoque de alto volume."
            tags={["TypeScript", "Docker", "Redis"]}
            link="#"
          />
        </div>
      </div>
    </section>
  );
}