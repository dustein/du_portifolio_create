import backgroundSvg from '../assets/media/edu-face_background.svg';

export function MainContent() {
  return (
    <main className="relative min-h-screen w-full bg-white overflow-x-hidden">
      
      {/* 1. BACKGROUND AJUSTADO */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-end"> 
        {/* justify-start alinha à esquerda | items-center centraliza verticalmente */}
        <img 
          src={backgroundSvg} 
          className="w-1/3 h-auto opacity-10 ml-[-5%]" 
          /* w-1/2 define que a imagem terá 50% da largura da tela. 
             h-auto mantém a proporção. 
             ml-[-5%] é um toque opcional para "cortar" um pouco da borda e dar um ar artístico. */
          alt=""
        />
      </div>

      {/* 2. CONTEÚDO */}
      <div className="relative z-10 p-8 flex flex-col">
        <p className="text-8xl mt-6 ml-10 font-sans font-black tracking-tighter">Eduardo</p>
        <p className="text-8xl ml-24 font-sans font-black tracking-tighter">Stein</p>
        <p className="text-5xl ml-36 italic font-serif">developer</p>

        <div className="text-4xl mt-20 max-w-3xl leading-tight text-right self-end pr-50 font-serif text-slate-700">
          <p>I'm a Full Stack Software Engineer</p>
          <p>who loves Front End</p>
          <p>and passionate about Back End.</p>
        </div>
      </div>
    </main>
  );
}