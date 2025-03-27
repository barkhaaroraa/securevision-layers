
import React from 'react';
import { Shield, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black py-16 border-t border-closeai-teal/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-closeai-teal" />
              <span className="font-bold text-2xl text-white font-display">close ai tech</span>
            </div>
            
            <p className="text-white mb-6">
              Building the next generation of AI security layers 
              to make artificial intelligence safe and beneficial for all Indians.
            </p>
            
            <div className="flex items-center text-white">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:contact@closeai.tech" className="hover:text-closeai-teal transition-colors">
                contact@closeai.tech
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 font-display">Explore</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "#about" },
                { name: "Security Layers", href: "#security" },
                { name: "Join Waitlist", href: "#waitlist" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white hover:text-closeai-teal transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 font-display">Stay Updated</h3>
            <p className="text-white mb-4">
              Subscribe to our newsletter for the latest updates on AI security and our progress.
            </p>
            
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-black/50 border border-closeai-teal/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-closeai-teal/50"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-closeai-teal text-black rounded-lg hover:bg-closeai-teal/90 transition-colors font-display"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-closeai-teal/10 mt-12 pt-8 text-center text-white">
          <p>© {new Date().getFullYear()} close ai tech. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Proudly building in India, for India and the world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
