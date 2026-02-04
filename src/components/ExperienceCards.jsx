import {FileCheck} from 'lucide-react';

export function ExperienceCards({year, title, icone, institution, certificate, description}) {
  return (
    <div className="relative">

      <div className="absolute -left-10.5 top-2 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-sm"></div>      
      
      <span className="font-texts text-sm font-bold text-sky-600 uppercase tracking-widest">{year}</span>      
      
      <h3 className="font-texts text-lg sm:text-2xl font-bold text-slate-900 mt-1">{title}</h3>
      
      <div className='flex items-center gap-2'>
        <img src={icone} alt={`${title} icon`} className="w-6 sm:w-8 h-6 sm:h-8 mt-1 mb-2 rounded-md" />
        <p className="font-texts text-md sm:text-lg text-slate-500 font-bold">{institution}</p>
      </div>
      
      <p className="mr-4 font-texts text-md sm:text-lg text-justify text-slate-600 leading-relaxed">
        {description}
        <a className='inline-block ml-2' href={certificate} target="_blank" rel="noopener noreferrer">
          <FileCheck className='text-sky-800' />
        </a>
      </p>
    </div>
  );
}