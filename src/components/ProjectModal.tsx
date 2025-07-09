import React, { useEffect } from 'react';
import { Project, Mode } from '../types';
import { X, ExternalLink, Github, CheckCircle } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  mode: Mode;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, mode, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      onClick={handleOverlayClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl"></div>
      
      {/* Modal */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl bg-gradient-to-b from-gray-900/95 to-black/95 border border-gray-800/50">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 rounded-full transition-all duration-300 btn-hover bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Project Image */}
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {project.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-10">
            <h3 className={`text-xl md:text-2xl font-semibold mb-6 ${
              mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
            }`}>
              {mode === 'tech' ? 'Technologies & Tools' : 'Product Focus'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    mode === 'tech' 
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                      : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Outcomes */}
          <div className="mb-10">
            <h3 className={`text-xl md:text-2xl font-semibold mb-6 ${
              mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
            }`}>
              Key Outcomes & Insight
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {project.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className={`w-6 h-6 mt-1 flex-shrink-0 ${
                    mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
                  }`} />
                  <span className="text-gray-300 text-base md:text-lg font-light">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center space-x-3 px-8 py-4 rounded-xl font-medium transition-all duration-300 btn-hover ${
                  mode === 'tech' 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/20'
                }`}
              >
                <ExternalLink className="w-5 h-5" />
                <span>Read More</span>
              </a>
            )}
            
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 px-8 py-4 rounded-xl font-medium transition-all duration-300 btn-hover bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
              >
                <Github className="w-5 h-5" />
                <span>View Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};