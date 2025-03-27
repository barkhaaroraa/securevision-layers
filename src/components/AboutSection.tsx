
import React from 'react';
import { Shield, ShieldAlert, ShieldCheck, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="blue-pill mb-4">
            <Shield className="w-4 h-4 mr-1" /> Our Vision
          </div>
          
          <h2 className="section-heading">Why AI Safety Matters for India</h2>
          
          <p className="text-lg text-closeai-blue/80 mb-6">
            As AI becomes increasingly integrated into various sectors in India, ensuring its safety, 
            reliability, and ethical use is paramount for our collective future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldAlert className="w-10 h-10 text-closeai-teal" />,
              title: "Current Challenges",
              description: "AI systems deployed without proper safeguards can pose significant risks including privacy breaches, bias propagation, and security vulnerabilities that directly impact Indian users and institutions."
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-closeai-teal" />,
              title: "Our Approach",
              description: "We develop multi-layered security systems specifically designed for the Indian context, considering our unique cultural, linguistic, and regulatory landscape to ensure AI benefits everyone safely."
            },
            {
              icon: <Users className="w-10 h-10 text-closeai-teal" />,
              title: "Our Goal",
              description: "To build AI systems that Indians can trust - systems that are secure, fair, transparent, and aligned with social values while advancing technological innovation across healthcare, education, and governance."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-xl opacity-0 animate-slideUp"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="w-16 h-16 rounded-xl bg-closeai-teal/10 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-closeai-blue mb-3">{item.title}</h3>
              <p className="text-closeai-blue/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
