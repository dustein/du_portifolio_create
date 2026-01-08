import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { TechStack } from './components/TechStack';

function App() {

  return (
    <div className='max-w-360 mx-auto bg-gray-100 min-h-screen h-full'>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <TechStack />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}

export default App
