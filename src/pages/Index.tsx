
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SecurityLayers from '@/components/SecurityLayers';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SecurityLayers />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Index;
