import { CodeXml } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-gray-200 p-4 text-slate-900 text-4xl flex justify-between">
      <div className='flex justify-between items-center gap-2'>
        <CodeXml className="w-10 h-10 text-slate-500" />
        <div className='font-logo'>
          <span className='font-bold border-b-6 leading-[0.8] inline-block border-b-sky-600'>Du</span>Stein
        </div>
      </div>
      <div className='font-logo'>
        DuStein
      </div>
    </nav>
  );
}