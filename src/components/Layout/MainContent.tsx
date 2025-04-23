import { useEffect, useRef } from 'react';
import Home from '../Sections/Home';
import About from '../Sections/About';
import Projects from '../Sections/Projects';
import Education from '../Sections/Education';
import Skills from '../Sections/Skills';
import Achievements from '../Sections/Achievements';
import Contact from '../Sections/Contact';

interface MainContentProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const MainContent = ({ setIsSidebarOpen }: MainContentProps) => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main 
      ref={mainRef}
      className="flex-1 md:ml-64 md:w-[calc(100%-16rem)] min-h-screen overflow-y-auto scroll-smooth" 
      onClick={() => window.innerWidth < 768 && setIsSidebarOpen(false)}
    >
      <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 md:py-10">
        <Home />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Achievements />
        <Contact />
      </div>
    </main>
  );
};

export default MainContent;
