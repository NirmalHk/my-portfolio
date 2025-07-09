import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { ProjectModal } from './components/ProjectModal';
import { ModalPortal } from './components/ModalPortal';
import { Mode, Project } from './types';

function App() {
  const [mode, setMode] = useState<Mode>('product');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleMode = () => {
    setIsTransitioning(true);
    
    // Add a small delay for the transition effect
    setTimeout(() => {
      setMode(prevMode => prevMode === 'tech' ? 'product' : 'tech');
      
      // End transition after mode change
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 150);
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    // Enhanced smooth scrolling
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white overflow-x-hidden transition-all duration-500 ${
      isTransitioning ? 'opacity-90 scale-[0.99]' : 'opacity-100 scale-100'
    }`}>
      <Header mode={mode} onModeToggle={toggleMode} />
      <Hero mode={mode} />
      <Projects mode={mode} onProjectClick={openProject} />
      <About mode={mode} />
      <Contact mode={mode} />
      {selectedProject && (
        <ModalPortal>
          <ProjectModal 
          project={selectedProject} 
          mode={mode} 
          onClose={closeProject} 
        />
        </ModalPortal>
      )}
    </div>
  );
}

export default App;