import backgroundSvg from '../assets/media/edu-face_background.svg';

export function MainContent() {
  return (
    <main className="relative w-full bg-white overflow-hidden">
      
      {/* --- CAMADA 1: MESH GRADIENT (Fundo do fundo) --- */}
      {/* Bolha superior esquerda */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-slate-600 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      
      {/* Bolha inferior direita */}
      <div className="absolute -bottom-24 -right-24 w-125 h-125 bg-slate-800 rounded-full blur-[80px] opacity-50 pointer-events-none"></div>

      {/* --- CAMADA 2: IMAGEM SVG (Alinhada à direita) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-end"> 
        <img 
          src={backgroundSvg} 
          className="w-1/2 h-auto opacity-3 mr-[-5%] lg:mr-[-2%]" 
          alt=""
        />
      </div>

      {/* --- CAMADA 3: CONTEÚDO (Frente) --- */}
      <div className="relative z-10 p-8 md:p-16 flex flex-col min-h-screen justify-start">
        
        {/* Nomes com Montserrat (font-sans definida no seu CSS) */}
        <p className="text-8xl md:text-8xl mt-6 md:ml-2 self-center font-sans font-black tracking-tighter leading-none">
          Eduardo
        </p>

        <p className="text-6xl md:text-9xl self-center font-sans font-black tracking-tighter leading-none text-sky-950/80">
          Stein
        </p>

        {/* Developer com Lora (font-serif definida no seu CSS) */}
        <p className="text-5xl ml-18 self-center italic font-serif text-slate-500 mt-4">
          developer
        </p>

        {/* Descrição Profissional */}
        <div className="text-3xl md:text-4xl mt-20 max-w-3xl pr-30 leading-tight flex flex-col items-end font-serif text-slate-700 gap-4">
          <p className='tracking-wide'>I am a <span className='text-sky-600'>Full Stack</span> Software Engineer</p>
          <p>who loves <span className="text-sky-700">frontend</span> impact</p>
          <p>and passionate about <span className="text-sky-800">backend</span> magic</p>
        </div>
      </div>
      
    </main>
  );
}