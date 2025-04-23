import { useState, useEffect } from 'react';
import Sidebar from './components/Layout/Sidebar';
import MainContent from './components/Layout/MainContent';
import { Menu } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white rounded-full p-2 shadow-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu size={24} className="text-purple-600" />
      </button>

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        activeSection={activeSection}
      />

      {/* Main content */}
      <MainContent setIsSidebarOpen={setIsSidebarOpen} />
    </div>
  );
}

export default App;
