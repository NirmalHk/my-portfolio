import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { Mode } from '../types';

interface HeaderProps {
  mode: Mode;
  onModeToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ mode, onModeToggle }) => {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-700">
      <div className="absolute inset-0 glass bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className={`text-xl font-semibold transition-all duration-500 ${
            mode === 'tech' ? 'text-gradient-tech' : 'text-gradient-product'
          }`}>
            {personalInfo.name}
          </div>
          
          <nav className="hidden md:flex space-x-12">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`relative font-medium transition-all duration-300 hover:scale-105 group ${
                  mode === 'tech' 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-300 hover:text-orange-400'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  mode === 'tech' ? 'bg-blue-400' : 'bg-orange-400'
                }`}></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <div className="relative inline-flex items-center">
              <div className={`flex items-center space-x-3 px-4 py-2 rounded-full glass transition-all duration-500 ${
                mode === 'tech' 
                  ? 'bg-blue-500/10 border-blue-500/20' 
                  : 'bg-orange-500/10 border-orange-500/20'
              }`}>
                <span className={`text-sm font-medium transition-all duration-300 ${
                  mode === 'product' ? 'text-orange-400' : 'text-gray-500'
                }`}>
                  Product
                </span>
                <button
                  onClick={onModeToggle}
                  className={`relative w-14 h-7 rounded-full transition-all duration-500 ${
                    mode === 'tech' ? 'bg-blue-500' : 'bg-orange-500'
                  }`}
                >
                  <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-lg transition-all duration-500 ${
                    mode === 'tech' ? 'translate-x-7' : 'translate-x-0.5'
                  }`} />
                </button>
                <span className={`text-sm font-medium transition-all duration-300 ${
                  mode === 'tech' ? 'text-blue-400' : 'text-gray-500'
                }`}>
                  Tech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};