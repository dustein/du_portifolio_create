
import { useState, useEffect } from "react";
import { Maximize2, X } from "lucide-react";

export function ProjectCard({ Icon, title, description, tags, screenshot, link }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Bloqueia o scroll da página principal quando o modal abre
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group relative bg-white border border-slate-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl cursor-pointer hover:-translate-y-1 flex flex-col h-full"
      >
        <div className="flex items-start gap-4">
          <div className="relative shrink-0 mb-5 w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden group-hover:bg-sky-50 transition-colors">
            
            {/* LÓGICA DE ÍCONE OU IMAGEM */}
            {typeof Icon === 'string' ? (
              <img src={Icon} alt="" className="w-full h-full object-cover" />
            ) : (
              Icon && <Icon size={28} className="text-sky-600" />
            )}
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white/40 backdrop-blur-xs rounded-lg transition-opacity">
              <Maximize2 size={18} className="text-sky-700" />
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="font-titles text-xl font-black tracking-tighter text-slate-900 mb-1 truncate">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="font-texts text-sm text-slate-500 leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <div className="mt-auto pt-4 text-sky-600 text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
          PREVIEW →
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-sm w-full bg-white rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-white/90 hover:bg-white backdrop-blur-md rounded-full text-slate-800 shadow-sm border border-slate-100 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Container com scroll interno para telas pequenas */}
            <div className="overflow-y-auto">
              {/* Imagem Mobile */}
              <div className="bg-slate-100 flex justify-center pt-10 px-6">
                 <img 
                    src={screenshot} 
                    className="w-2/3 h-auto max-h-[50vh] object-contain rounded-t-2xl shadow-2xl" 
                    alt={title} 
                  />
              </div>

              <div className="p-8">
                 <h3 className="text-2xl font-black text-slate-900 mb-2">{title}</h3>
                 <p className="text-slate-600 text-sm mb-6 leading-relaxed">{description}</p>
                 
                 <a 
                   href={link} 
                   target="_blank" 
                   rel="noreferrer"
                   className="block w-full text-center py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold transition-colors"
                 >
                   It's Alive !
                 </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}