import React, { useState } from 'react';

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  });
  
  const [agreements, setAgreements] = useState({
    privacyPolicy: false,
    termsOfService: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setAgreements(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreements.privacyPolicy || !agreements.termsOfService) {
      alert('Please accept both the Privacy Policy and Terms of Service to proceed.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section id="book-demo" className="py-16 bg-cogintech-dark text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-600/20 border border-green-400 rounded-lg p-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Demo Scheduled!</h3>
              <p className="text-white/80 mb-6">
                Thank you for booking a demo. We'll contact you within 24 hours to confirm your 15-minute live demo session.
              </p>
              <p className="text-sm text-white/60">
                Check your email for calendar invite and demo preparation materials.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book-demo" className="py-16 bg-cogintech-dark text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Ready to see <span className="text-cogintech-orange">$10M+ savings</span> in action?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Book a 15-minute live demo and see exactly how our AI platform can prevent failures and save costs at your facility.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-cogintech-teal rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">See Your Data in Action</h3>
                    <p className="text-white/70">Upload a sample document and watch our AI analyze it in real-time</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-cogintech-teal rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Calculate Your ROI</h3>
                    <p className="text-white/70">Get a personalized cost savings estimate for your operations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-cogintech-teal rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Get Implementation Plan</h3>
                    <p className="text-white/70">Receive a customized roadmap for your digital transformation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Book Your Live Demo</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cogintech-teal/50"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cogintech-teal/50"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cogintech-teal/50"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-white/80 mb-2">
                    Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cogintech-teal/50"
                  >
                    <option value="">Select your role</option>
                    <option value="integrity-engineer">Integrity Engineer</option>
                    <option value="operations-manager">Operations Manager</option>
                    <option value="maintenance-manager">Maintenance Manager</option>
                    <option value="technical-director">Technical Director</option>
                    <option value="ceo-owner">CEO/Owner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacyPolicy"
                      checked={agreements.privacyPolicy}
                      onChange={(e) => handleCheckboxChange('privacyPolicy', e.target.checked)}
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="privacyPolicy" className="text-sm text-white/80">
                      I agree to the{' '}
                      <a href="/privacy-policy" className="text-cogintech-teal hover:underline">
                        Privacy Policy
                      </a>
                      {' '}*
                    </label>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="termsOfService"
                      checked={agreements.termsOfService}
                      onChange={(e) => handleCheckboxChange('termsOfService', e.target.checked)}
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="termsOfService" className="text-sm text-white/80">
                      I accept the{' '}
                      <a href="/terms-of-service" className="text-cogintech-teal hover:underline">
                        Terms of Service
                      </a>
                      {' '}*
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cogintech-orange hover:bg-cogintech-orange/90 disabled:opacity-50 text-white font-medium py-4 px-6 rounded-lg transition-colors text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                      Booking Demo...
                    </div>
                  ) : (
                    'Book 15-Min Live Demo'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;