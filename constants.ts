
import { Project, Skill } from './types';
import { ReactIcon, TypeScriptIcon, JavaScriptIcon, NodeJsIcon, TailwindCssIcon, FigmaIcon, NextJsIcon, MongoDbIcon } from './components/icons/TechIcons';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    title: 'E-Commerce App',
    description: 'A full-featured e-commerce platform with product catalogs, shopping cart, and checkout functionality.',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&h=600&auto=format&fit=crop',
    liveUrl: 'https://e-commerce-eight-liard-88.vercel.app',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Car Marketplace',
    description: 'An online marketplace for buying and selling new and used cars, with advanced search and filtering.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&h=600&auto=format&fit=crop',
    liveUrl: 'https://mern-car-marketplace.vercel.app/',
    tags: ['MERN', 'Redux', 'Tailwind CSS'],
  },
  {
    title: 'Medimeet (Doctor App)',
    description: 'A healthcare application for scheduling appointments with doctors and managing medical records securely.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&h=600&auto=format&fit=crop',
    liveUrl: 'https://medimeet-swart.vercel.app',
    tags: ['React', 'Firebase', 'Material UI'],
  },
  {
    title: 'Weather App',
    description: 'A clean and simple weather application that provides real-time weather data for any location.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&h=600&auto=format&fit=crop',
    liveUrl: 'https://weather-app-b2999b.netlify.app/',
    tags: ['JavaScript', 'API', 'HTML/CSS'],
  },
];

export const SKILLS: Skill[] = [
    { name: 'React', icon: ReactIcon },
    { name: 'Next.js', icon: NextJsIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'Node.js', icon: NodeJsIcon },
    { name: 'MongoDB', icon: MongoDbIcon },
    { name: 'Tailwind CSS', icon: TailwindCssIcon },
    { name: 'Figma', icon: FigmaIcon },
];