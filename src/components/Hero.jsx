import backgroundSvg from '../assets/media/edu-face_background.svg';

export function Hero() {
  return (
    <main className="relative w-full bg-white overflow-hidden h-full">
      
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-slate-600 rounded-full blur-[120px] opacity-50 pointer-events-none z-0"></div>

      {/* --- CAMADA 2: IMAGEM SVG (z-10) --- 
          Atrás do texto, mas acima do degradê de fundo. */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-start mt-20 justify-start sm:items-center sm:justify-end"> 
        <img 
          src={backgroundSvg} 
          className="w-1/3 h-auto opacity-5 sm:opacity-3 mr-[-5%] lg:mr-[-2%]" 
          alt="" 
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-80 bg-linear-to-t from-slate-50 via-slate-50/90 to-transparent z-20 pointer-events-none"></div>

      {/* --- CAMADA 4: CONTEÚDO PRINCIPAL (z-30) --- 
          Elevamos para z-30 para garantir que as frases fiquem nítidas e visíveis. */}
      <div className="relative z-30 p-8 sm:p-16 flex flex-col justify-start sm:pb-40">
        
        {/* Bloco de Nome */}
        <p className="text-6xl sm:text-8xl mt-6 sm:ml-2 self-center font-sans font-black tracking-tighter leading-none">
          Eduardo
        </p>

        <p className="text-7xl ml-1 sm:ml-4 sm:text-9xl self-center font-sans font-black tracking-widest leading-none text-sky-950/80">
          Stein
        </p>

        <p className="text-4xl sm:text-5xl ml-10 sm:ml-18 self-center italic font-serif text-slate-500 mt-4">
          developer
        </p>

        {/* Bloco de Frases (Descrição) */}
        <div className="text-lg sm:text-4xl mt-20 sm:max-w-3xl pr-5 leading-tight flex flex-col items-end font-serif text-slate-700 gap-2 sm:gap-4 self-center sm:self-end">
          <p className='tracking-wide'>
            <span className='text-sky-600'>Full Stack</span> Software Engineer
          </p>
          <p className='tracking-tight'>
            who loves <span className="text-sky-700">frontend</span> impact
          </p>
          <p className='text-right'>
            and is passionate about <span className="text-sky-800">backend</span> magic
          </p>
        </div>
      </div>
    </main>
  );
}
