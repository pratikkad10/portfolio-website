import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SocialLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
        {children}
    </a>
);


const GithubIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);
const LinkedinIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

const ContactSection: React.FC = () => {
    const [ref, animationClasses] = useScrollAnimation<HTMLDivElement>();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setStatus('error');
            setFeedbackMessage('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            setStatus('error');
            setFeedbackMessage('Please enter a valid email address.');
            return;
        }

        setStatus('submitting');
        setFeedbackMessage('');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFeedbackMessage('Message sent successfully! Thank you for reaching out.');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
        }, 1500);
    };
    
    return (
        <section id="contact" className="py-20 lg:py-32 bg-black/20">
            <div ref={ref} className={`container mx-auto px-6 fade-in-section ${animationClasses}`}>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white">
                        Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-gradient">Touch</span>
                    </h2>
                    <p className="text-gray-400 mt-2">I'm open to collaborations and new opportunities.</p>
                </div>

                <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-12 glassmorphism p-8 rounded-lg">
                    <div className="md:w-1/2">
                         <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                         <p className="text-gray-400 mb-6">
                            Have a project in mind or just want to say hi? Feel free to send me a message. I'll get back to you as soon as possible.
                         </p>
                         <div className="flex items-center space-x-6">
                            <SocialLink href="https://github.com"><GithubIcon /></SocialLink>
                            <SocialLink href="https://linkedin.com"><LinkedinIcon /></SocialLink>
                         </div>
                    </div>
                     <div className="md:w-1/2">
                         <form onSubmit={handleSubmit} noValidate>
                             <div className="mb-4">
                                 <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none p-2 text-white transition-colors duration-300" required />
                             </div>
                             <div className="mb-4">
                                 <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none p-2 text-white transition-colors duration-300" required />
                             </div>
                             <div className="mb-6">
                                 <textarea name="message" placeholder="Your Message" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none p-2 text-white transition-colors duration-300 resize-none" required></textarea>
                             </div>
                             <button type="submit" disabled={status === 'submitting'} className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-cyan-500/20 hover:scale-105 transform transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                             </button>
                             <div className="mt-4 text-center h-5">
                                {status === 'error' && <p className="text-red-400 text-sm">{feedbackMessage}</p>}
                                {status === 'success' && <p className="text-green-400 text-sm">{feedbackMessage}</p>}
                             </div>
                         </form>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;