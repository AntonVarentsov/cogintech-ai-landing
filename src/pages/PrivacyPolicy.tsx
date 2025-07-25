
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Privacy Policy - Data Protection & GDPR Compliance | Cogintech"
        description="Cogintech's privacy policy: How we collect, use, and protect your personal data. GDPR compliant data processing for industrial AI platform users."
        keywords="privacy policy, data protection, GDPR compliance, personal data, Cogintech privacy, industrial AI data security"
        ogTitle="Privacy Policy - Data Protection & GDPR Compliance"
        ogDescription="Cogintech's privacy policy: How we collect, use, and protect your personal data. GDPR compliant."
        ogImage="/lovable-uploads/22fc09d7-63fe-4527-885a-d78c38ec2e86.png"
      />
      <Navbar />
      
      <main className="flex-1">
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              
              <div className="prose max-w-none">
                <p className="mb-4">Last Updated: May 20, 2025</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p className="mb-4">
                  At Cognitive Industrial Technologies Ltd. ("Cogintech", "we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Data We Collect</h2>
                <p className="mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title.</li>
                  <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                  <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                  <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                  <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Data</h2>
                <p className="mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
                <p className="mb-4">
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
                <p className="mb-4">
                  We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Legal Rights</h2>
                <p className="mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>Request access to your personal data.</li>
                  <li>Request correction of your personal data.</li>
                  <li>Request erasure of your personal data.</li>
                  <li>Object to processing of your personal data.</li>
                  <li>Request restriction of processing your personal data.</li>
                  <li>Request transfer of your personal data.</li>
                  <li>Right to withdraw consent.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <p>Email: vr@cogintech.com</p>
                  <p>Address: Mansion House, Manchester Road, Altrincham, Cheshire, WA14 4RW, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
