import {FileCheck} from 'lucide-react';

export function ExperienceCards({year, title, institution, certificate, description}) {
  return (
    <div className="relative">
      <div className="absolute -left-10.5 top-2 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-sm"></div>      
      <span className="font-texts text-sm font-bold text-sky-600 uppercase tracking-widest">{year}</span>
      <h3 className="font-texts text-lg sm:text-2xl font-bold text-slate-900 mt-1">{title}</h3>
      <div className='flex items-center gap-2'>
        <p className="font-texts text-md sm:text-lg text-slate-500 font-bold">{institution}</p>
        <a href={certificate} target="_blank" rel="noopener noreferrer">
          <FileCheck className='text-sky-800' />
        </a>
      </div>
      <p className="mr-4 font-texts text-xs sm:text-lg text-justify text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}