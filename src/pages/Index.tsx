
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SecurityLayers from '@/components/SecurityLayers';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Add cursor dot elements
    const cursorDots = document.querySelectorAll('.cursor-dot');
    cursorDots.forEach(dot => {
      for (let i = 0; i < 3; i++) {
        const effect = document.createElement('div');
        effect.className = 'cursor-dot-effect';
        effect.style.width = `${(i + 1) * 300}px`;
        effect.style.height = `${(i + 1) * 300}px`;
        effect.style.opacity = `${0.15 - i * 0.05}`;
        dot.appendChild(effect);
      }
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const effects = document.querySelectorAll('.cursor-dot-effect');
    effects.forEach((effect, index) => {
      const speed = 0.15 - index * 0.03;
      const x = mousePosition.x * speed;
      const y = mousePosition.y * speed;
      
      effect.style.transform = `translate(${x}px, ${y}px)`;
    });
  }, [mousePosition]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="cursor-dot fixed inset-0 z-0"></div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SecurityLayers />
        <Waitlist />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
