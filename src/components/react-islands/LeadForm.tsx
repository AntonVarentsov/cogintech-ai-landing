import React, { useState } from 'react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    comments: ''
  });
  
  const [agreements, setAgreements] = useState({
    privacyPolicy: false,
    termsOfService: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      <section id="lead-form" className="section bg-cogintech-dark text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-600/20 border border-green-400 rounded-lg p-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="text-white/80 mb-6">
                Your request has been received. Our team will contact you within 24 hours to schedule your free consultation.
              </p>
              <p className="text-sm text-white/60">
                Keep an eye on your inbox - we'll send you additional information about how Cogintech AI can transform your inspection process.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="section bg-cogintech-dark text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">
            Get Your <span className="text-cogintech-teal">Free Consultation</span>
          </h2>
          <p className="text-lg text-white/80">
            See how Cogintech AI can reduce your inspection costs by 30% and deliver reports in 24 hours. 
            Schedule a personalized demo with your actual data.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-white/80 mb-2">
                    Role/Title *
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
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address *
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
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cogintech-teal/50"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-white/80 mb-2">
                  Tell us about your inspection challenges
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cogintech-teal/50"
                  placeholder="Describe your current inspection process, challenges you face, or specific questions about our solution..."
                ></textarea>
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
                    {' '}and consent to the processing of my personal data. *
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
                    . *
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cogintech-orange hover:bg-cogintech-orange/90 disabled:opacity-50 text-white font-medium py-4 px-6 rounded-lg transition-colors"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  'Request Free Consultation'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;