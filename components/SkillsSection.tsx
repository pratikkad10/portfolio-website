import React from 'react';
import { SKILLS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SkillsSection: React.FC = () => {
    const [ref, animationClasses] = useScrollAnimation<HTMLDivElement>();

    return (
        <section id="skills" className="py-20 lg:py-32">
            <div ref={ref} className={`container mx-auto px-6 fade-in-section ${animationClasses}`}>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white">
                        Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-gradient">Skills</span>
                    </h2>
                    <p className="text-gray-400 mt-2">The technologies I work with.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {/* FIX: Render the icon as a component since we are passing the component reference. */}
                    {SKILLS.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div key={index} className="group flex flex-col items-center justify-center p-6 glassmorphism rounded-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20">
                                <div className="w-16 h-16 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 flex items-center justify-center">
                                    <Icon />
                                </div>
                                <p className="mt-4 text-center font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">{skill.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
