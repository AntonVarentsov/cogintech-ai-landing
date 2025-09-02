import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const SecurityNote = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <SEOHead 
        title="Security Note - Cogintech Ltd."
        description="Security, Privacy & IT information for Cogintech's AI-native document intelligence platform for engineering services."
        keywords="security, privacy, data protection, engineering, AI platform"
      />
      <Navbar />
      <main className="flex-1 bg-gradient-to-br from-cogintech-dark via-background to-cogintech-dark/80">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-cogintech-dark mb-4">
                    Cogintech — Security, Privacy & IT (MVP)
                  </h1>
                  <div className="text-lg text-muted-foreground space-x-4">
                    <span><strong>Version:</strong> 0.9</span>
                    <span>•</span>
                    <span><strong>Status:</strong> MVP</span>
                    <span>•</span>
                    <span><strong>Audience:</strong> Engineering, IT/Security reviewers</span>
                  </div>
                </div>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-cogintech-dark mb-4">Summary</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We take data protection seriously. This note outlines what is available <strong>now</strong>, what we enable <strong>during pilot</strong>, and what's <strong>next</strong> on our roadmap. It is informational and <strong>not a certification claim</strong> or contractual commitment.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-cogintech-dark mb-4">Data Handling & Privacy</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Data scope:</strong> technical documents (PDF, drawings, spreadsheets), inspection reports, metadata you upload in pilot.</li>
                    <li><strong>Model usage:</strong> <em>We do not train foundation models on your data.</em></li>
                    <li><strong>Retention & deletion:</strong> project-scoped storage; deletion on request (MVP).</li>
                    <li><strong>Isolation:</strong> separate project spaces; tenant isolation for pilots.</li>
                    <li><strong>Logging:</strong> basic activity logs in MVP; expanded audit trails planned.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-cogintech-dark mb-4">Access Control</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>MVP:</strong> account-level access, basic roles within project space.</li>
                    <li><strong>Pilot:</strong> private project spaces, role-based access (RBAC), least-privilege by default.</li>
                    <li><strong>Next:</strong> SSO (SAML/OIDC), granular RBAC, SCIM user lifecycle.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-cogintech-dark mb-4">Encryption & Keys</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>In transit:</strong> TLS 1.2+ for all endpoints.</li>
                    <li><strong>At rest:</strong> provider-managed encryption in our cloud.</li>
                    <li><strong>Next:</strong> customer-managed keys (KMS/CMK) and key rotation policy.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-cogintech-dark mb-4">Hosting & Deployment</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Default:</strong> secure cloud hosting.</li>
                    <li><strong>Data residency:</strong> EU/US regions <strong>subject to pilot setup</strong>.</li>
                    <li><strong>Next:</strong> private VPC / on-prem deployment options.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-cogintech-dark mb-4">Integrations Approach</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>API-first.</strong> In MVP/pilot we support guided import/export from your current systems.</li>
                    <li><strong>Planned connectors:</strong> SharePoint, SAP/Maximo, AVEVA, and REST API endpoints for bi-directional sync.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-cogintech-dark mb-4">Compliance Posture (no overclaim)</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Designed to meet</strong> SOC 2 Type II practices; <strong>aligned with</strong> ISO/IEC 27001 controls.</li>
                    <li><strong>GDPR-ready</strong> features (DPA/SCCs, data subject requests) handled <strong>under pilot agreements</strong>.</li>
                    <li><strong>Certifications:</strong> on the <strong>roadmap</strong> (not yet certified).</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-cogintech-dark mb-4">Backups & Resilience</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Backups:</strong> regular snapshots in provider storage; restore tested in pilot.</li>
                    <li><strong>Targets:</strong> pilot-level RPO/RTO agreed per environment.</li>
                    <li><strong>Next:</strong> formal DR runbooks and automated restore drills.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-cogintech-dark mb-4">Incident Response</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Process:</strong> detect → contain → eradicate → recover → post-mortem.</li>
                    <li><strong>Notification:</strong> timelines and channels agreed in pilot (security contact + email list).</li>
                    <li><strong>Next:</strong> status page and standardized SLA tiers.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-cogintech-dark mb-4">Customer Responsibilities (shared model)</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>Assign data owners; classify/redact sensitive data before upload if required by policy.</li>
                    <li>Enforce least-privilege access; manage user off-boarding.</li>
                    <li>Review pilot security terms (NDA/DPA), approve residency and integration scope.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-cogintech-dark mb-4">Roadmap (Next)</h2>
                  <p className="text-gray-700 leading-relaxed">
                    SSO/SAML/OIDC · Granular RBAC & audit trails · Connectors (SharePoint, SAP/Maximo, AVEVA, REST API) · Private VPC/on-prem options · Customer-managed keys · Formal DR/SLA.
                  </p>
                </section>

                <div className="border-t pt-6 mt-8">
                  <p className="text-sm text-gray-600">
                    <strong>Contacts:</strong> <a href="mailto:vr@cogintech.com" className="text-cogintech-teal hover:underline">vr@cogintech.com</a> — security contact and pilot owner.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Disclaimer:</strong> This document reflects MVP capabilities and roadmap at the time of writing and may change without notice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SecurityNote;