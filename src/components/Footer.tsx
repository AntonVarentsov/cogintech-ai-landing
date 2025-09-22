
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useSecureForm } from "@/hooks/useSecureForm";
import { useEmailValidation } from "@/hooks/useEmailValidation";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);
  const [emailError, setEmailError] = useState("");
  
  const { submitForm, isSubmitting, honeypot, setHoneypot } = useSecureForm({ 
    formType: 'newsletter' 
  });
  const { validateEmail } = useEmailValidation();

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!consentChecked) {
      toast({
        title: "Consent Required",
        description: "Please agree to receive updates to continue.",
        variant: "destructive",
      });
      return;
    }

    // Validate email
    const emailValidation = await validateEmail(email);
    if (!emailValidation.isValid) {
      setEmailError(emailValidation.error || "Invalid email");
      return;
    }

    setEmailError("");

    const success = await submitForm({
      email: email.trim(),
      consent: consentChecked,
      newsletterType: "AI Engineering Tools Updates"
    });

    if (success) {
      setEmail("");
      setConsentChecked(false);
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive updates on new AI engineering features.",
      });
    }
  };
  
  return (
    <footer className="bg-cogintech-dark text-white/70 py-12 border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-white">Cogintech</span>
              <span className="ml-1 text-cogintech-teal font-medium">Ltd.</span>
            </div>
            <p className="mb-6 max-w-md text-lg">
              Cogintech – AI-native document intelligence for engineering services.
            </p>
            
            {/* Newsletter Subscription */}
            <div id="newsletter-signup" className="mb-6">
              <h4 className="text-white font-semibold mb-3">Subscribe for Updates on AI Engineering Tools</h4>
              <form onSubmit={handleNewsletterSignup} className="space-y-3 max-w-sm">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                    }}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    required
                  />
                  {emailError && (
                    <p className="text-red-400 text-sm mt-1">{emailError}</p>
                  )}
                </div>

                {/* GDPR Consent Checkbox */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="newsletter-consent"
                    checked={consentChecked}
                    onCheckedChange={(checked) => setConsentChecked(!!checked)}
                    className="mt-0.5"
                  />
                  <label 
                    htmlFor="newsletter-consent" 
                    className="text-sm text-white/70 leading-relaxed cursor-pointer"
                  >
                    I agree to receive updates about AI engineering tools and have read the{" "}
                    <Link 
                      to="/privacy-policy" 
                      className="text-cogintech-teal hover:underline"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || !email.trim() || !consentChecked}
                  className="bg-cogintech-teal hover:bg-cogintech-teal/90 text-white disabled:opacity-50"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </div>
            
            <div className="text-sm">
              © {currentYear} Cognitive Industrial Technologies Ltd. All rights reserved.
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-cogintech-teal transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-cogintech-teal transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/security-note" className="hover:text-cogintech-teal transition-colors">Security Note</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-cogintech-teal transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-cogintech-teal transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-cogintech-teal transition-colors">Cookie Policy</Link></li>
              <li><a href="https://linkedin.com/company/cogintech" target="_blank" className="hover:text-cogintech-teal transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm">
          <div className="max-w-3xl mx-auto">
            <p>
              Our AI platform helps engineering service companies reduce reporting time, improve data reliability, and free engineers from routine tasks to focus on high-value client work.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
