import { SiGithub } from "@icons-pack/react-simple-icons";
import linkedIn from "../assets/linkedin.svg"

export function ContactSection() {
  return (
    <section className="py-20 px-8 md:px-16 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-8">
          Let's turn <span className="text-sky-400">magic</span> into <span className="text-sky-400">impact</span> !
        </h2>
        
        <p className="text-slate-400 text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
          Always ready for new opportunities to contribute with my Full Stack skills. 
          Whether you have a question or just want to say hi, my inbox is open!
        </p>

        <div className="flex flex-wrap flex-col justify-center items-center gap-8">
          
          <a href="https://github.com/dustein">
            <div className="text-white text-3xl flex items-center gap-4">
              <SiGithub size={48} title="GitHub" />
              GitHub
            </div>
          </a>

          <a href="https://www.linkedin.com/in/eduardo-s-7723701a3/">
            <div className="text-white text-3xl flex items-center gap-4">
              <img className="h-12 w-12 bg-white" src={linkedIn} alt="LinkedIn" />
              LinkedIn
            </div>
          </a>
          
          <a 
            href="mailto:steindu@gmail.com" 
            className="px-6 py-3 bg-sky-600 hover:bg-sky-500 transition-colors rounded-full font-bold text-lg"
          >
            Get in Touch
          </a>
          
          
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-800 text-slate-500 text-sm">
          © Eduardo Stein
        </footer>
      </div>
    </section>
  );
}