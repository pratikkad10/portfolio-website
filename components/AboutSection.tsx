import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);


const AboutSection: React.FC = () => {
    const [ref, animationClasses] = useScrollAnimation<HTMLDivElement>();

    return (
        <section id="about" className="py-20 lg:py-32">
            <div ref={ref} className={`container mx-auto px-6 fade-in-section ${animationClasses}`}>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white">
                        About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-gradient">Me</span>
                    </h2>
                    <p className="text-gray-400 mt-2">A brief introduction to my world.</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/3 w-full flex justify-center">
                        <div className="relative p-1 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600">
                             <img 
                                src="https://picsum.photos/seed/portrait/400/400" 
                                alt="Pratik Kad" 
                                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-900"
                            />
                            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-ping"></div>
                        </div>
                    </div>
                    <div className="lg:w-2/3 w-full text-center lg:text-left">
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            Hello! I'm Pratik, a passionate and results-driven full-stack web developer. I specialize in building modern, responsive web applications from the ground up, with a keen eye for design and a love for creating seamless user experiences. My goal is to merge functionality with aesthetics to deliver products that are not only powerful but also beautiful and intuitive to use.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3">
                                <CheckIcon />
                                <span>Full-Stack Development</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckIcon />
                                <span>Intuitive UI/UX Design</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckIcon />
                                <span>Clean & Scalable Code</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckIcon />
                                <span>Performance Optimization</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;