
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="group relative rounded-lg glassmorphism transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 overflow-hidden h-80">
            {/* Image Background */}
            <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-all duration-500"></div>
            
            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Title moves up on hover */}
                <h3 className="text-2xl font-bold font-orbitron text-white transition-all duration-300 ease-in-out transform group-hover:-translate-y-24">
                    {project.title}
                </h3>

                {/* Hidden content revealed on hover */}
                <div className="opacity-0 transition-all duration-300 delay-100 ease-in-out group-hover:opacity-100 group-hover:delay-200">
                    <p className="mb-4 text-sm leading-relaxed text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="bg-cyan-400/20 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group/link"
                    >
                        Live Demo 
                        <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">
                            <ExternalLinkIcon />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

const ProjectsSection: React.FC = () => {
    const [ref, animationClasses] = useScrollAnimation<HTMLDivElement>();

    return (
        <section id="projects" className="py-20 lg:py-32 bg-black/20">
            <div ref={ref} className={`container mx-auto px-6 fade-in-section ${animationClasses}`}>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white">
                        My <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-gradient">Projects</span>
                    </h2>
                    <p className="text-gray-400 mt-2">A selection of my recent work.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
