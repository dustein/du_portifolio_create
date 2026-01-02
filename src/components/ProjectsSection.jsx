import { ProjectCard } from './ProjectCard';
import fisiocronosImg from '/fisiocronos-screenshot-iphone12pro.png';
import rascoreImg from '/rascore-screenshot-iphone12pro.png';
import pptDudaImg from '/ppt-duda-screenshot-iphone12pro.png';
import siteClubeImg from '/site_clube-screenshot-iphone12pro.png';

export function ProjectsSection() {
  return (
    <section className="relative pb-10 sm:pb-32 pt-5 sm:pt-10 px-8 md:px-16 bg-slate-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-texts text-2xl sm:text-5xl font-bold tracking-tighter mb-6 sm:mb-20 text-slate-600 bg-sky-200 px-4 pb-1">
          /some_projects<span className="text-sky-400">_</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 pt-10">

          <ProjectCard 
            screenshot={ <img src={fisiocronosImg} className="w-full h-full object-cover" alt="Projeto Fisiocronos" /> }
            title="HIT Stopwatche"
            description="A HIIT interval timer application designed to manage workout sessions with customizable activity and rest phases."
            tags={["React", "Node.js", "PostgreSQL"]}
            link="#"
          />

          <ProjectCard 
            screenshot={ <img src={rascoreImg} className="w-full h-full object-cover" alt="Projeto Fisiocronos" /> }
            title="Scheduling App"
            description="Arquitetura escalável de microsserviços para processamento de pagamentos e controle de estoque de alto volume."
            tags={["TypeScript", "Docker", "Redis"]}
            link="#"
          />

          <ProjectCard 
            screenshot={ <img src={pptDudaImg} className="w-full h-full object-cover" alt="Projeto Fisiocronos" /> }
            title="Rock Paper Scissors game"
            description="Arquitetura escalável de microsserviços para processamento de pagamentos e controle de estoque de alto volume."
            tags={["TypeScript", "Docker", "Redis"]}
            link="#"
          />

          <ProjectCard 
            screenshot={ <img src={siteClubeImg} className="w-full h-full object-cover" alt="Projeto Fisiocronos" /> }
            title="Simple Site"
            description="Arquitetura escalável de microsserviços para processamento de pagamentos e controle de estoque de alto volume."
            tags={["TypeScript", "Docker", "Redis"]}
            link="#"
          />

        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent pointer-events-none"></div>

      </div>
    </section>
  );
}