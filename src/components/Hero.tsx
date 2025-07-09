import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { Mode } from '../types';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  mode: Mode;
}

export const Hero: React.FC<HeroProps> = ({ mode }) => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-all duration-1000 ${
          mode === 'tech' 
            ? 'bg-gradient-to-br from-black via-gray-900 to-blue-900/20' 
            : 'bg-gradient-to-br from-black via-gray-900 to-orange-900/20'
        }`}></div>
        
        {/* Floating Elements */}
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl animate-blob ${
          mode === 'tech' ? 'bg-blue-500' : 'bg-orange-500'
        }`}></div>
        <div className={`absolute top-40 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl animate-blob-slow ${
          mode === 'tech' ? 'bg-indigo-500' : 'bg-red-500'
        }`}></div>
        <div className={`absolute -bottom-20 left-1/2 w-80 h-80 rounded-full opacity-15 blur-3xl animate-blob ${
          mode === 'tech' ? 'bg-purple-500' : 'bg-yellow-500'
        }`}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
        <div className="space-y-12">
          {/* Greeting */}
          <div className="animate-fade-up">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className={`w-5 h-5 ${mode === 'tech' ? 'text-blue-400' : 'text-orange-400'}`} />
              <span className={`text-sm font-medium tracking-wider uppercase ${
                mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
              }`}>
                Welcome to my portfolio
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-fade-up-delay-1">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-white mb-2">
                {mode === 'tech' ? 'Hello, I\'m' : 'Hi there, I\'m'}
              </span>
              <span className={`block ${
                mode === 'tech' ? 'text-gradient-tech' : 'text-gradient-product'
              }`}>
                {personalInfo.name}
              </span>
            </h1>
            
            <p className={`text-2xl sm:text-3xl lg:text-4xl font-light ${
              mode === 'tech' ? 'text-blue-300' : 'text-orange-300'
            }`}>
              {mode === 'tech' 
                ? `${personalInfo.techTitle}` 
                : `${personalInfo.productTitle}`}
            </p>
          </div>
          
          {/* Description */}
          <div className="animate-fade-up-delay-2">
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-300 font-light">
              {mode === 'tech' 
                ? 'I analyze complex data to deliver actionable insights, building effective analytics solutions with SQL, Python, and data visualization tools.'
                : 'I use data and technical understanding to shape strategy, align teams, and deliver products users love. I focus on clear goals, strong execution, and creating measurable impact.'}
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="animate-fade-up-delay-3 pt-8">
            <button
              onClick={scrollToProjects}
              className={`group px-10 py-4 rounded-full font-medium text-lg btn-hover ${
                mode === 'tech' 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25'
              }`}
            >
              Explore My Work
              <ArrowDown className="inline-block ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          mode === 'tech' ? 'border-blue-400' : 'border-orange-400'
        }`}>
          <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
            mode === 'tech' ? 'bg-blue-400' : 'bg-orange-400'
          }`}></div>
        </div>
      </div>
    </section>
  );
};