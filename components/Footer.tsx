import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p className="font-orbitron tracking-wider">
          DESIGNED & BUILT BY PRATIK KAD &copy; {new Date().getFullYear()}
        </p>
        <p className="mt-2 text-sm">
          Striving for pixel-perfect, immersive digital experiences.
        </p>
      </div>
    </footer>
  );
};

export default Footer;