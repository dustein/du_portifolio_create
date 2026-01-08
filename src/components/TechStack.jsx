import { 
  SiReact, SiTypescript, SiNodedotjs, 
  SiPython, SiPostgresql, SiFlask,  
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiGithub
} from '@icons-pack/react-simple-icons';

export function TechStack() {
  const stacks = [
    { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
    { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
    { icon: <SiHtml5 className="text-[#E34F26]" />, name: "HTML5" },
    { icon: <SiCss className="text-[#663399]" />, name: "CSS" },
    { icon: <SiJavascript className="text-[#F7DF1E]" />, name: "Javascript" },
    { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" },
    { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind" },    
    { icon: <SiPython className="text-[#3776AB]" />, name: "Python" },
    { icon: <SiFlask className="text-[#3BABC3]" />, name: "Flask" },
    { icon: <SiPostgresql className="text-[#4169E1]" />, name: "PostgreSQL" },
    { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
    { icon: <SiGithub className="text-[#F05032]" />, name: "GitHub" },
  ];

  return (
    <div className="bg-slate-200 pb-10">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <div className="flex flex-wrap justify-center gap-8 py-8 border-y border-slate-300">
          {stacks.map((stack, index) => (
            <div key={index} className="flex flex-col items-center gap-2 group">
              <span className="grayscale group-hover:grayscale-0 transition-all duration-300">
                {stack.icon}
              </span>
              <span className="text-sm font-texts font-bold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {stack.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}