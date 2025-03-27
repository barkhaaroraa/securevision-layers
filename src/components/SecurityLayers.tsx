
import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  ShieldCheck, 
  BarChart3, 
  Eye, 
  Lock, 
  Brain, 
  ChevronRight 
} from 'lucide-react';

const securityLayers = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Algorithmic Bias Detection",
    description: "Our system analyzes AI models to identify and mitigate biases that could impact specific Indian demographic groups, ensuring equitable outcomes across our diverse population."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Privacy Preservation Layer",
    description: "Advanced mechanisms to ensure AI systems process data while preserving user privacy, implementing federated learning and differential privacy techniques adapted for Indian data regulations."
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Input Validation Framework",
    description: "Sophisticated filters to prevent adversarial inputs in multiple Indian languages that could manipulate AI systems to produce harmful outputs."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Behavioral Monitoring System",
    description: "Continuous monitoring of AI behavior to detect anomalies and potential safety issues before they can cause harm, with human oversight for critical applications."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Output Safety Verification",
    description: "Multi-stage verification system to ensure AI outputs meet safety standards before being delivered to users, with special consideration for cultural sensitivities."
  }
];

const SecurityLayers = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (cardRefs.current.length === 0) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let closestIndex = 0;
      let closestDistance = Math.abs(cardRefs.current[0]?.getBoundingClientRect().top - window.innerHeight / 2);
      
      cardRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const distance = Math.abs(ref.getBoundingClientRect().top - window.innerHeight / 2);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      
      setActiveLayer(closestIndex);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section 
      id="security" 
      className="py-24 bg-closeai-lightGray relative"
      ref={sectionRef}
    >
      <div className="cursor-dot absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="green-pill mb-4">
            <Shield className="w-4 h-4 mr-1" /> Our Technology
          </div>
          
          <h2 className="section-heading text-white">Multi-layered Security Framework</h2>
          
          <p className="text-lg text-white/80">
            Our comprehensive approach to AI safety incorporates multiple specialized 
            security layers, each addressing different aspects of the AI pipeline.
          </p>
        </div>
        
        <div className="space-y-16">
          {securityLayers.map((layer, index) => (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`flashcard w-full max-w-3xl mx-auto transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${isVisible ? index * 0.2 : 0}s`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div 
                className={`glass-card rounded-xl p-8 border border-closeai-teal/30 transform transition-all duration-500 ${
                  activeLayer === index 
                    ? 'scale-105 shadow-lg shadow-closeai-teal/10 border-closeai-teal/50' 
                    : 'scale-100'
                }`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-closeai-teal text-black flex items-center justify-center">
                    {layer.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3 font-display">{layer.title}</h3>
                    <p className="text-white/80">{layer.description}</p>
                    
                    <div className="mt-6 bg-black/40 p-5 rounded-lg border border-closeai-teal/10">
                      <h4 className="font-medium text-white mb-3 font-display">How it works</h4>
                      <ul className="space-y-3">
                        {[1, 2, 3].map((item) => (
                          <li key={item} className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-closeai-teal/10 text-closeai-teal flex items-center justify-center mt-0.5 mr-3">
                              {item}
                            </div>
                            <p className="text-white/80">
                              {index === 0 && item === 1 && "Continuous monitoring of model outputs across demographic dimensions"}
                              {index === 0 && item === 2 && "Statistical analysis to identify disproportionate impacts"}
                              {index === 0 && item === 3 && "Automated retraining with balanced datasets to mitigate detected biases"}
                              
                              {index === 1 && item === 1 && "Data minimization principles applied to all processing"}
                              {index === 1 && item === 2 && "Encryption of sensitive information with Indian-specific privacy considerations"}
                              {index === 1 && item === 3 && "Compliance with Personal Data Protection frameworks"}
                              
                              {index === 2 && item === 1 && "Real-time analysis of inputs in all major Indian languages"}
                              {index === 2 && item === 2 && "Detection of potential jailbreaking attempts or harmful prompts"}
                              {index === 2 && item === 3 && "Context-aware filtering system that maintains legitimate use cases"}
                              
                              {index === 3 && item === 1 && "Runtime monitoring of AI system behavior and resource usage"}
                              {index === 3 && item === 2 && "Anomaly detection using baseline behavioral models"}
                              {index === 3 && item === 3 && "Automated failsafes when unexpected behavior is detected"}
                              
                              {index === 4 && item === 1 && "Multi-stage content evaluation for safety and cultural appropriateness"}
                              {index === 4 && item === 2 && "Classification of outputs based on potential harm categories"}
                              {index === 4 && item === 3 && "Human-in-the-loop verification for high-risk scenarios"}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityLayers;
