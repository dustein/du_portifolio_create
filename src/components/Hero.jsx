import backgroundSvg from '../assets/media/edu-face_background.svg';

export function Hero() {
  return (
    <main className="relative w-full bg-slate-50 overflow-hidden flex flex-col justify-betwee pt-5 sm:pt-10">
      
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-slate-600 rounded-full blur-[120px] opacity-50 pointer-events-none z-0"></div>

      <div className="absolute inset-0 z-10 pointer-events-none flex items-start mt-20 justify-start sm:items-center sm:justify-end"> 
        <img 
          src={backgroundSvg} 
          className="w-1/3 h-auto opacity-5 sm:opacity-3 mr-[-5%] lg:mr-[-2%]" 
          alt="" 
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-80 bg-linear-to-t from-slate-50 via-slate-50/90 to-transparent z-20 pointer-events-none"></div>

      <div className="relative z-30 flex flex-col">
        
        <p className="text-6xl sm:text-7xl mt-6 ml-12 sm:ml-60 font-sans font-black tracking-tighter leading-none">
          Eduardo
        </p>
        <p className="text-7xl mt-2 ml-20 sm:ml-68 sm:text-8xl font-sans font-black tracking-widest leading-none text-sky-950/80">
          Stein
        </p>
        <p className="text-4xl sm:text-4xl ml-30 sm:ml-95 italic font-serif text-slate-500 mt-4">
          developer
        </p>
        
        <div className="text-xl sm:text-2xl mt-40 sm:mt-10 sm:max-w-3xl sm:pr-40 leading-tight flex flex-col items-end font-serif text-slate-700 gap-2 sm:gap-4 self-center sm:self-end">

          <p className='text-right'><span className='text-sky-600'>Full Stack</span></p>

          <p>Software Engineer</p>
          
          <p className=''>who loves <span className="text-sky-600">Frontend</span> impact</p>

          <p className='text-right'>and is passionate about</p>

          <p><span className="text-sky-600 tracking-widest">Backend</span> magic</p>

        </div>
        <div className="w-full h-30 bg-linear-to-b from-slate-50 to-slate-200"></div>
      </div>
    </main>
  );
}
