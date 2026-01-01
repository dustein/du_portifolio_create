import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';

function App() {

  return (
    <div className='max-w-6xl mx-auto bg-gray-100 min-h-screen h-full'>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
    </div>
  )
}

export default App
