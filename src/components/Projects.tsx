import React, { useEffect, useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import { techProjects } from '../data/techProjects';
import { productProjects } from '../data/productProjects';
import { Mode, Project } from '../types';

interface ProjectsProps {
  mode: Mode;
  onProjectClick: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ mode, onProjectClick }) => {
  const projects = mode === 'tech' ? techProjects : productProjects;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [mode]); // Re-run when mode changes

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className={`w-12 h-0.5 ${mode === 'tech' ? 'bg-blue-400' : 'bg-orange-400'}`}></div>
            <span className={`text-sm font-medium tracking-wider uppercase ${
              mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
            }`}>
              Featured Work
            </span>
            <div className={`w-12 h-0.5 ${mode === 'tech' ? 'bg-blue-400' : 'bg-orange-400'}`}></div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
            {mode === 'tech' ? 'Technical Projects' : 'Product Stories & Case Studies'}
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto text-gray-300 font-light leading-relaxed">
            {mode === 'tech' 
              ? 'Dive into hands-on data projects where I apply SQL, analytics, and engineering to extract insights and build real-world solutions.'
              : 'Explore case studies of products and solutions designed to improve user experiences and drive meaningful results.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard 
              project={project} 
              mode={mode} 
              onProjectClick={onProjectClick}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};