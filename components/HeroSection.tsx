import React, { useState, useEffect, useRef } from 'react';

const ROLES = ['Full Stack Developer'];

const HeroSection: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    // FIX: Corrected the type for the timeout ID. `NodeJS.Timeout` is not available in the browser; `ReturnType<typeof setTimeout>` provides the correct, environment-agnostic type.
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      const fullRole = ROLES[currentRoleIndex];
      
      if (isDeleting) {
        setDisplayedRole(current => current.substring(0, current.length - 1));
      } else {
        setDisplayedRole(current => fullRole.substring(0, current.length + 1));
      }

      if (!isDeleting && displayedRole === fullRole) {
        // Pause before deleting
        timeoutId = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedRole === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    
    // Set timeout for the next character
    timeoutId = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [displayedRole, isDeleting, currentRoleIndex]);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>

        <div className="container mx-auto px-6 text-center z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-white mb-4 tracking-wider">
                Pratik Kad
            </h1>
            <p className="text-2xl md:text-4xl font-light text-gray-300 mb-2">
                I'm a <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-gradient">{displayedRole}</span><span className="animate-ping">|</span>
            </p>
            <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-8">
                Crafting immersive and responsive web experiences from concept to deployment.
            </p>
            <a href="#projects" onClick={handleScrollToProjects} className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-cyan-500/20 hover:scale-105 transform transition-transform duration-300">
                View My Work
            </a>
        </div>
    </section>
  );
};

export default HeroSection;