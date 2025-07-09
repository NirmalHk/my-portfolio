import React, { useState, useEffect, useRef } from 'react';
import { Mode } from '../types';
import { Send, Mail, MessageSquare, User, Sparkles } from 'lucide-react';

interface ContactProps {
  mode: Mode;
}

export const Contact: React.FC<ContactProps> = ({ mode }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:nirmal.harikrishnan@gmail.com?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

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
      id="contact" 
      className="py-32 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
        
        {/* Floating Blobs */}
        <div className={`absolute top-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl animate-blob ${
          mode === 'tech' ? 'bg-blue-500' : 'bg-orange-500'
        }`}></div>
        <div className={`absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-15 blur-3xl animate-blob-slow ${
          mode === 'tech' ? 'bg-indigo-500' : 'bg-red-500'
        }`}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Sparkles className={`w-5 h-5 ${mode === 'tech' ? 'text-blue-400' : 'text-orange-400'}`} />
            <span className={`text-sm font-medium tracking-wider uppercase ${
              mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
            }`}>
              Let's work together
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
            Get In Touch
          </h2>
          
          <p className="text-xl max-w-2xl mx-auto text-gray-300 font-light leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you and explore how we can create something amazing together.
          </p>
        </div>

        <div className="fade-in-section p-10 rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-3 ${
                  mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
                }`}>
                  <User className="inline w-4 h-4 mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:ring-blue-500/50 focus:border-blue-500/50"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-3 ${
                  mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
                }`}>
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:ring-blue-500/50 focus:border-blue-500/50"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-3 ${
                mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
              }`}>
                <MessageSquare className="inline w-4 h-4 mr-2" />
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-6 py-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 resize-none bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-400 focus:ring-blue-500/50 focus:border-blue-500/50"
                placeholder="Tell me about your project, ideas, or just say hello..."
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group px-10 py-4 rounded-xl font-medium text-lg btn-hover disabled:opacity-50 disabled:cursor-not-allowed ${
                  mode === 'tech' 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25' 
                    : 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin inline-block w-5 h-5 mr-3 border-2 border-white border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="inline-block ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="text-center">
                <p className="text-green-400 font-medium">
                  Your email client should open with the message ready to send!
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="text-center">
                <p className="text-red-400 font-medium">
                  Something went wrong. Please try again or email me directly.
                </p>
              </div>
            )}
          </form>
        </div>

        <div className="text-center mt-12 fade-in-section">
          <p className="text-gray-400 font-light">
            Prefer to email directly? Reach out at{' '}
            <a 
              href="mailto:nirmal.harikrishnan@gmail.com" 
              className={`font-medium hover:underline transition-colors duration-300 ${
                mode === 'tech' ? 'text-blue-400' : 'text-orange-400'
              }`}
            >
              nirmal.harikrishnan@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};