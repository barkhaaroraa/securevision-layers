
import React, { useState } from 'react';
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
  
  return (
    <section id="security" className="py-24 bg-closeai-lightGray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="blue-pill mb-4">
            <Shield className="w-4 h-4 mr-1" /> Our Technology
          </div>
          
          <h2 className="section-heading">Multi-layered Security Framework</h2>
          
          <p className="text-lg text-closeai-blue/80">
            Our comprehensive approach to AI safety incorporates multiple specialized 
            security layers, each addressing different aspects of the AI pipeline.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            {securityLayers.map((layer, index) => (
              <div 
                key={index}
                className={`${
                  activeLayer === index 
                    ? 'bg-white shadow-lg border-l-4 border-closeai-teal' 
                    : 'bg-white/50 hover:bg-white/80'
                } p-6 mb-4 rounded-lg cursor-pointer transition-all duration-300`}
                onClick={() => setActiveLayer(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-lg ${activeLayer === index ? 'bg-closeai-teal text-white' : 'bg-closeai-teal/10 text-closeai-teal'} flex items-center justify-center mr-4`}>
                      {layer.icon}
                    </div>
                    <h3 className="font-semibold text-closeai-blue">{layer.title}</h3>
                  </div>
                  <ChevronRight className={`${activeLayer === index ? 'text-closeai-teal' : 'text-closeai-blue/30'}`} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:w-2/3 glass-card p-8 rounded-xl">
            <div className="opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-xl bg-closeai-teal text-white flex items-center justify-center mr-4">
                  {securityLayers[activeLayer].icon}
                </div>
                <h3 className="text-2xl font-semibold text-closeai-blue">{securityLayers[activeLayer].title}</h3>
              </div>
              
              <p className="text-lg text-closeai-blue/80 mb-8">
                {securityLayers[activeLayer].description}
              </p>
              
              <div className="bg-closeai-blue/5 p-6 rounded-lg border border-closeai-teal/10">
                <h4 className="font-medium text-closeai-blue mb-4">How it works</h4>
                <ul className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-closeai-teal/10 text-closeai-teal flex items-center justify-center mt-0.5 mr-3">
                        {item}
                      </div>
                      <p className="text-closeai-blue/80">
                        {activeLayer === 0 && item === 1 && "Continuous monitoring of model outputs across demographic dimensions"}
                        {activeLayer === 0 && item === 2 && "Statistical analysis to identify disproportionate impacts"}
                        {activeLayer === 0 && item === 3 && "Automated retraining with balanced datasets to mitigate detected biases"}
                        
                        {activeLayer === 1 && item === 1 && "Data minimization principles applied to all processing"}
                        {activeLayer === 1 && item === 2 && "Encryption of sensitive information with Indian-specific privacy considerations"}
                        {activeLayer === 1 && item === 3 && "Compliance with Personal Data Protection frameworks"}
                        
                        {activeLayer === 2 && item === 1 && "Real-time analysis of inputs in all major Indian languages"}
                        {activeLayer === 2 && item === 2 && "Detection of potential jailbreaking attempts or harmful prompts"}
                        {activeLayer === 2 && item === 3 && "Context-aware filtering system that maintains legitimate use cases"}
                        
                        {activeLayer === 3 && item === 1 && "Runtime monitoring of AI system behavior and resource usage"}
                        {activeLayer === 3 && item === 2 && "Anomaly detection using baseline behavioral models"}
                        {activeLayer === 3 && item === 3 && "Automated failsafes when unexpected behavior is detected"}
                        
                        {activeLayer === 4 && item === 1 && "Multi-stage content evaluation for safety and cultural appropriateness"}
                        {activeLayer === 4 && item === 2 && "Classification of outputs based on potential harm categories"}
                        {activeLayer === 4 && item === 3 && "Human-in-the-loop verification for high-risk scenarios"}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityLayers;
