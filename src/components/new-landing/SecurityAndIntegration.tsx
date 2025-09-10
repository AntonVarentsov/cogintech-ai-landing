import { Shield, Users, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const SecurityAndIntegration = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100/80 border-t border-gray-200/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Security, Privacy & IT (MVP)
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            We take data protection seriously. Below is what's available today, what's enabled during pilot, and what's next on our roadmap.
          </p>
        </div>

        {/* Now / Pilot / Next Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Available Now */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-foreground">Available Now (MVP)</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Encryption in transit (TLS)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Secure cloud hosting (provider-managed)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Access controls (per account), activity logs (basic)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>Data deletion on request</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span>We don't train foundation models on your data</span>
              </li>
            </ul>
          </div>

          {/* Available in Pilot */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-cogintech-teal/20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Users className="w-6 h-6 text-cogintech-teal" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-foreground">Available in Pilot</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-teal rounded-full mt-2"></div>
                <span>Private project spaces & role-based access (RBAC)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-teal rounded-full mt-2"></div>
                <span>Guided data upload (no IT overhaul)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-teal rounded-full mt-2"></div>
                <span>Optional NDA + DPA before any data is shared</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-teal rounded-full mt-2"></div>
                <span>EU data residency option (subject to pilot setup)</span>
              </li>
            </ul>
          </div>

          {/* Planned Next */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-cogintech-blue/20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Server className="w-6 h-6 text-cogintech-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-foreground">Planned Next (Roadmap)</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-blue rounded-full mt-2"></div>
                <span>SSO (SAML/OIDC) & granular RBAC</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-blue rounded-full mt-2"></div>
                <span>Audit trails & retention policies</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-blue rounded-full mt-2"></div>
                <span>On-prem / VPC deployment option</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-blue rounded-full mt-2"></div>
                <span>Connectors: SharePoint, SAP/Maximo, AVEVA, REST API</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Security Standards - Updated */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold mb-6 text-center text-foreground">Security Framework Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-orange rounded-full mt-2"></div>
                <span>Designed to meet SOC 2 Type II practices</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-orange rounded-full mt-2"></div>
                <span>Aligned with ISO/IEC 27001 controls</span>
              </li>
            </ul>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-orange rounded-full mt-2"></div>
                <span>GDPR-ready data processing features</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cogintech-orange rounded-full mt-2"></div>
                <span>API-first architecture for secure integrations</span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-foreground/60 italic mt-6 text-center">Planned certifications on the roadmap.</p>
        </div>

        {/* Mini-FAQ */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold mb-6 text-center text-foreground">Quick Security & IT Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Is this production-ready?</h4>
                <p className="text-sm text-foreground/70">We're in MVP with limited early adopters. Start with a demo or sandbox; a guided pilot takes ~2 weeks.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Can we test without sharing sensitive data?</h4>
                <p className="text-sm text-foreground/70">Yes. Use our sandbox with sample data. For pilots, we sign NDA/DPA and isolate your project space.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Do you store or use our data to train models?</h4>
                <p className="text-sm text-foreground/70">No. Your data stays within your tenant; we don't use it to train foundation models.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">What about on-prem or private cloud?</h4>
                <p className="text-sm text-foreground/70">Planned. During pilot we evaluate deployment constraints and agree the path (VPC / on-prem).</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">How do integrations work?</h4>
                <p className="text-sm text-foreground/70">API-first approach. SharePoint / SAP / Maximo / AVEVA connectors are on the roadmap; during pilot we provide guided export/import.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              size="lg"
              className="border-cogintech-blue text-cogintech-blue hover:bg-cogintech-blue/5 font-medium px-8 py-6"
              onClick={() => window.open('/security-note', '_blank')}
            >
              Read the 1-page Security Note
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-cogintech-teal text-cogintech-teal hover:bg-cogintech-teal/5 font-medium px-8 py-6"
              onClick={() => document.getElementById('ask-question')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ask a Security Question
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAndIntegration;