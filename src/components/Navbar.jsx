import { useState, useEffect } from 'react';
import { CodeXml, X, Mail } from 'lucide-react';
import { SiGithub } from "@icons-pack/react-simple-icons";
import linkedIn from "../assets/linkedin.svg"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bloqueia o scroll da página quando o modal do menu estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="bg-gray-50/90 p-4 text-slate-900 text-4xl flex justify-between border-b-slate-500 border-b-2 sticky top-0 z-40 shadow-sm shadow-slate-200 backdrop-blur-md">
        <div className='flex justify-between items-center gap-2'>
          <CodeXml className="w-10 h-10 text-slate-500" />
          <div className='font-logo'>
            <span className='font-bold border-b-6 leading-[0.8] inline-block border-b-sky-600'>Du</span>Stein
          </div>
        </div>

        <button 
          onClick={() => setIsMenuOpen(true)}
          className='font-logo text-6xl hover:text-sky-600 transition-colors cursor-pointer leading-none outline-none'
          aria-label="open memu"
        >
          =
        </button>
      </nav>

      {/* MODAL DE CONTATO */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // impede fechar ao clicar dentro do card
          >

            <div className="bg-slate-50 p-6 flex justify-between items-center border-b border-slate-100">
              <h2 className="font-texts text-2xl font-black text-slate-800 tracking-tighter bg-sky-100 px-4 p-2">
                /get_in_touch<span className="text-sky-500 animate-pulse">_</span>
              </h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 flex flex-col justify-center gap-6">
              <a href="mailto:steindu@gmail.com">
                <div className='flex items-center justify-center gap-4'>
                  <div className="w-10 h-10 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center">
                    <Mail size={28} />
                  </div>              
                  <p className="font-texts text-slate-600 leading-relaxed">
                    e-Mail
                  </p>
                </div>
              </a>

               <a href="https://github.com/dustein">
                  <div className="text-black font-texts flex  justify-center items-center gap-4">
                    <SiGithub size={36} title="GitHub" />
                    GitHub
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/eduardo-s-7723701a3/">
                  <div className="text-black font-texts flex justify-center items-center gap-4">
                    <img className="h-7 w-7 bg-white" src={linkedIn} alt="LinkedIn" />
                    LinkedIn
                  </div>
                </a>

            </div>
          </div>
        </div>
      )}
    </>
  );
}