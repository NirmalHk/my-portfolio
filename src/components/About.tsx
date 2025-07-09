import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/personalInfo';
import { Mode } from '../types';
import { Mail, MapPin, Linkedin, Github, GraduationCap, Award, Sparkles } from 'lucide-react';

interface AboutProps {
  mode: Mode;
}

export const About: React.FC<AboutProps> = ({ mode }) => {
  const sectionRef = useRef<HTMLElement>(null);

  const techSkills = [
    'Python', 'R', 'SQL', 'Machine Learning', 'Artifical Intelligence', 'LLM', 'Data Visualization', 'ETL/ELT', 'MS Excel' , 'Prompt Engineering'
  ];

  const productSkills = [
    'Product Strategy', 'User Research', 'A/B Testing', 'Analytics',
    'Roadmap Planning', 'Agile/Scrum', 'Stakeholder Management', 'Technical Fluency',
    'Cross-functional Collaboration', 'Customer Development', 'Design Thinking', 'Process Improvement'
  ];

  const education = [
    {
      degree: 'M.S. Engineering Management',
      school: 'Purdue University',
      year: '2025',
      description: 'Focus on Technical Product Management'
    },
    {
      degree: 'B.Tech Electronics and Communication',
      school: 'Vit Vellore',
      year: '2018',
      description: 'Focus on Data Analysis and Databases'
    }
  ];

  const certifications = [
    'Certified Scrum Product Owner (CSPO)',
    'SQL (Advanced) - HackerRank',
    'AI for Everyone - DeepLearning.AI'
  ];

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
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Sparkles className={`w-5 h-5 ${mode === 'tech' ? 'text-blue-400' : 'text-orange-400'}`} />
            <span className={`text-sm font-medium tracking-wider uppercase ${
              mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
            }`}>
              Get to know me
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
            About Me
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto text-gray-300 font-light leading-relaxed">
            {mode === 'tech' 
              ? 'Passionate about transforming data into actionable insights and building scalable solutions that drive innovation.'
              : 'Dedicated to creating exceptional user experiences and driving product success through data-driven decisions and strategic thinking.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-10">
            <div className="fade-in-section p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50">
              <h3 className={`text-2xl font-semibold mb-6 ${
                mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
              }`}>
                Professional Summary
              </h3>
              <p className="text-lg leading-relaxed text-gray-300 font-light">
                {mode === 'tech' 
                  ? 'At Oracle, I’ve spent 2.5 years using advanced SQL to analyze complex data and drive insights. In personal projects, I apply Python, machine learning, and data visualization (Tableau, Power BI) to solve real-world problems and strengthen my analytics skills.'
                  : 'Product professional with 2+ years of experience shaping solutions at the intersection of users, data, and engineering. Skilled in identifying friction points, aligning cross-functional teams, and using data to drive product decisions. Brings a strong technical foundation and user empathy to deliver scalable, outcome-oriented features and improvements.'}
              </p>
            </div>

            <div className="fade-in-section p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50">
              <h3 className={`text-2xl font-semibold mb-6 flex items-center ${
                mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
              }`}>
                <GraduationCap className="w-6 h-6 mr-3" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-gray-700 pl-6">
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className={`text-sm font-medium mb-2 ${
                      mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
                    }`}>
                      {edu.school} • {edu.year}
                    </p>
                    <p className="text-gray-400 font-light">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            <div className="fade-in-section p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50">
              <h3 className={`text-2xl font-semibold mb-6 ${
                mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
              }`}>
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {(mode === 'tech' ? techSkills : productSkills).map((skill, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      mode === 'tech' 
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20' 
                        : 'bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="fade-in-section p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50">
              <h3 className={`text-2xl font-semibold mb-6 flex items-center ${
                mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
              }`}>
                <Award className="w-6 h-6 mr-3" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className={`w-2 h-2 rounded-full mr-4 ${
                      mode === 'tech' ? 'bg-blue-400' : 'bg-orange-400'
                    }`} />
                    <span className="font-light">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in-section p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50">
              <h3 className={`text-2xl font-semibold mb-6 ${
                mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
              }`}>
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-4" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline font-light">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-4" />
                  <span className="font-light">{personalInfo.location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Linkedin className="w-5 h-5 mr-4" />
                  <a href={`https://${personalInfo.linkedin}`} className="hover:underline font-light">
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Github className="w-5 h-5 mr-4" />
                  <a href={`https://${personalInfo.github}`} className="hover:underline font-light">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};