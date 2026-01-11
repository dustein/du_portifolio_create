import { ProjectCard } from './ProjectCard';
import { Globe } from 'lucide-react';

// Importação das imagens
import fisiocronosImg from '/fisiocronos-screenshot-iphone12pro.png';
import rascoreImg from '/rascore-screenshot-iphone12pro.png';
import pptDudaImg from '/ppt-duda-screenshot-iphone12pro.png';
import siteClubeImg from '/site_clube-screenshot-iphone12pro.png';
import iconPptduda from '/icon-ppt-duda.gif';
import iconFisiocronos from '/icon-fisiocronos.png';
import iconRascore from '/icon-rascore.png';


export function ProjectsSection() {
  return (
    <section className="relative pb-20 pt-10 px-8 md:px-16 bg-slate-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-texts text-2xl sm:text-5xl font-bold tracking-tighter mb-6 sm:mb-20 text-slate-600 bg-sky-100 px-4 p-2">
          /some_projects<span className="text-sky-500 animate-pulse">_</span>
        </h2>
        
        {/* Grid ajustado para 3 colunas no desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">

          <ProjectCard 
            Icon={iconFisiocronos}
            title="FisioCronos"
            description="A HIIT interval timer application designed to manage workout sessions with customizable activity and rest phases."
            tags={["React", "Typescript", "Vite", "TailwindCSS"]}
            screenshot={fisiocronosImg}
            link="https://fisio-cronos.vercel.app/"
          />

          <ProjectCard 
            Icon={iconRascore}
            title="RASCore"
            description="Automated appointment scheduling system with real-time availability tracking and professional notification services."
            tags={["Python", "Javascript", "Flask", "SQLite3", "HTML", "CSS"]}
            screenshot={rascoreImg}
            link="https://github.com/dustein/project_cs50"
          />

          <ProjectCard 
            Icon={iconPptduda}
            title="PPT Duda"
            description="Rock Paper Scissors. An interactive game featuring clean UI, score tracking, and logic-based computer opponents built with modern JS."
            tags={["Javascript", "HTML", "CSS"]}
            screenshot={pptDudaImg}
            link="/ppt-duda"
          />

          <ProjectCard 
            Icon={Globe}
            title="Simple React Site"
            description="Responsive landing page built for high conversion, focusing on clean typography and optimized performance across devices."
            tags={["TypeScript", "React", "Vite", "TailwindCSS"]}
            screenshot={siteClubeImg}
            link="https://dustein.github.io/site-novo-rio"
          />

        </div>
      </div>
    </section>
  );
}