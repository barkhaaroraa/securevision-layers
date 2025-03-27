
import React, { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Success!",
        description: "You've been added to our waitlist",
        variant: "default"
      });
      
      // Reset form after some time
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
        setName('');
        setOrganization('');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-24 bg-closeai-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="blue-pill mb-4 bg-blue-900/50 text-closeai-teal">
            <Send className="w-4 h-4 mr-1" /> Join Us
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Early Access</h2>
          
          <p className="text-lg text-white/80">
            Join our waitlist to be among the first to experience our AI security framework 
            and help shape the future of safe AI in India.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto glass-card bg-white/5 border-white/10 rounded-xl p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-closeai-teal/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-closeai-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
              <p className="text-white/80">
                We've added you to our waitlist. We'll be in touch soon with more information.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-closeai-teal/50"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-closeai-teal/50"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-white mb-1">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-closeai-teal/50"
                  placeholder="Enter your organization"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full button-primary flex items-center justify-center ${
                  isSubmitting ? 'bg-closeai-teal/70' : 'bg-closeai-teal'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>Join Waitlist</>
                )}
              </button>
              
              <p className="text-sm text-white/60 text-center">
                By joining, you agree to receive updates about our products and services.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
