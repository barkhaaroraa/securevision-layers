
import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-closeai-teal/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 group">
          <Shield className="w-8 h-8 text-closeai-teal transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-bold text-xl text-white font-display tracking-wide">closeAI</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-closeai-teal transition-colors duration-300 font-display">About</a>
          <a href="#security" className="text-white hover:text-closeai-teal transition-colors duration-300 font-display">Security Layers</a>
          <a href="#contact" className="text-white hover:text-closeai-teal transition-colors duration-300 font-display">Contact</a>
        </div>
        
        <a 
          href="#waitlist" 
          className="button-primary opacity-0 animate-fadeIn font-display" 
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
