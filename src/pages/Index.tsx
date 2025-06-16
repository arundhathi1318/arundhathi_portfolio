import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero3D from '../components/Hero3D';
import About from '../components/About';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Experience from '@/components/Experience';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'achievements', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Removed <CustomCursor /> */}
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      <main>
        <section id="home">
          <Hero3D />
        </section>

        <About />
        <Projects />
        <Experience/>
        <Achievements />
        <Resume />
        <Contact />
      </main>

     <footer className="bg-card border-t border-border py-8">
  <div className="container mx-auto px-6 text-center space-y-3">
    
    {/* Availability Status */}
    <div className="flex justify-center items-center space-x-2">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
      </span>
      <span className="text-sm text-foreground font-medium">
        Currently open to internships or exciting ideas 🚀
      </span>
    </div>

    
  </div>
</footer>

    </div>
  );
};

export default Index;
