import React from 'react';
import { Project, Mode } from '../types';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  mode: Mode;
  onProjectClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, mode, onProjectClick }) => {
  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.action-buttons')) {
      return;
    }
    onProjectClick(project);
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl card-hover cursor-pointer bg-gradient-to-b from-gray-900/50 to-black/50 border border-gray-800/50 h-full flex flex-col"
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden flex-shrink-0">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <ArrowUpRight className="w-8 h-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-gray-100 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-6 leading-relaxed font-light flex-grow">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                mode === 'tech' 
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                  : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-700/50 text-gray-400 border border-gray-600/50">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="action-buttons flex space-x-3 mt-auto">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 btn-hover ${
                mode === 'tech' 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20' 
                  : 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/20'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Read More</span>
            </a>
          )}
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 btn-hover bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};