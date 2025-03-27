
import React, { useEffect, useRef, useState } from 'react';
import { Shield, Zap, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (cursorDotRef.current) {
      // Create multiple cursor dots with different sizes and opacities
      cursorDotRef.current.innerHTML = ''; // Clear previous dots
      
      // Large background glow
      const largeDot = document.createElement('div');
      largeDot.className = 'cursor-dot-effect';
      largeDot.style.width = '800px';
      largeDot.style.height = '800px';
      largeDot.style.opacity = '0.3';
      largeDot.style.left = `${mousePosition.x}px`;
      largeDot.style.top = `${mousePosition.y}px`;
      cursorDotRef.current.appendChild(largeDot);
      
      // Medium glow
      const mediumDot = document.createElement('div');
      mediumDot.className = 'cursor-dot-effect';
      mediumDot.style.width = '400px';
      mediumDot.style.height = '400px';
      mediumDot.style.opacity = '0.4';
      mediumDot.style.left = `${mousePosition.x}px`;
      mediumDot.style.top = `${mousePosition.y}px`;
      cursorDotRef.current.appendChild(mediumDot);
      
      // Small intense glow
      const smallDot = document.createElement('div');
      smallDot.className = 'cursor-dot-effect';
      smallDot.style.width = '100px';
      smallDot.style.height = '100px';
      smallDot.style.opacity = '0.6';
      smallDot.style.left = `${mousePosition.x}px`;
      smallDot.style.top = `${mousePosition.y}px`;
      cursorDotRef.current.appendChild(smallDot);
    }
  }, [mousePosition]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles: Particle[] = [];
    let animationFrameId: number;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5; // Smaller particles
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(74, 222, 128, ${Math.random() * 0.5})`; // Green particles
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const init = () => {
      for (let i = 0; i < 100; i++) { // More particles
        particles.push(new Particle());
      }
    };
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div ref={cursorDotRef} className="cursor-dot"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black z-10" />
      
      <div className="container mx-auto px-4 z-20 pt-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div 
              className="green-pill mb-4 opacity-0 animate-fadeIn" 
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              <Zap className="w-4 h-4 mr-1" /> AI Safety for India
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight opacity-0 animate-fadeIn font-display tracking-tight" 
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              Securing AI <br/>
              <span className="text-closeai-teal">For a Safer Future</span>
            </h1>
            
            <p 
              className="text-lg text-white/80 max-w-lg opacity-0 animate-fadeIn" 
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              closeAI builds advanced security layers to make artificial intelligence safe, 
              reliable, and beneficial for Indian users and enterprises.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 pt-6 opacity-0 animate-fadeIn" 
              style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
            >
              <a href="#security" className="button-primary group">
                Explore Our Solutions 
                <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#waitlist" className="button-secondary">
                Join Our Waitlist
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 opacity-0 animate-scaleIn" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <div className="relative mx-auto w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-closeai-teal/20 to-closeai-cyan/10 backdrop-blur-lg animate-pulse-slow"></div>
              
              <div className="security-circle">
                <div className="security-layer" style={{ transform: 'translateZ(0px)', animationDelay: '0s' }}>
                  <div className="w-24 h-24 rounded-full bg-black/60 flex items-center justify-center backdrop-blur-md border border-closeai-teal/20">
                    <Shield className="w-12 h-12 text-closeai-teal" />
                  </div>
                </div>
                <div className="security-layer" style={{ transform: 'translateZ(10px) scale(0.9)', animationDelay: '0.3s' }}></div>
                <div className="security-layer" style={{ transform: 'translateZ(20px) scale(0.8)', animationDelay: '0.6s' }}></div>
                <div className="security-layer" style={{ transform: 'translateZ(30px) scale(0.7)', animationDelay: '0.9s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
