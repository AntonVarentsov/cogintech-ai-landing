import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const NewHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cogintech-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cogintech-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="px-3 py-1 bg-cogintech-teal/10 text-cogintech-teal text-sm font-medium rounded-full border border-cogintech-teal/20">
                  MVP · Limited early-adopter slots this quarter
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:text-5xl">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Double Your Engineering Team Productivity</span>
              </h1>
              <p className="text-xl text-foreground/80">
                <span className="font-semibold text-stone-600">Transform your scattered technical documents into instant-access knowledge and automate routine tasks with AI agents</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cogintech-orange" size="lg" className="font-medium px-8 py-6" onClick={() => document.getElementById('pricing')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Get Test Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="cogintech-blue-outline" size="lg" className="font-medium px-8 py-6" onClick={() => document.getElementById('book-demo')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Book a 15-min Demo
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-[2/1] rounded-xl overflow-hidden bg-white border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity shadow-sm" onClick={() => setIsModalOpen(true)} role="button" tabIndex={0} aria-label="Open data extraction process demonstration" onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}>
            <img src="/lovable-uploads/8779f590-9e4c-43b9-abf7-8e951aa8db60.png" alt="Document Chaos → Structured Database → AI Assistant" className="w-full h-full object-contain" />
          </div>
        </div>
        
        {/* Statistics row spanning full width */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-cogintech-orange/20 flex items-center justify-center">
              <span className="text-cogintech-orange font-bold text-3xl">30%</span>
            </div>
            <div className="text-2xl font-bold text-cogintech-orange mb-1">Less effort</div>
            <div className="text-base font-bold text-foreground/70">engineering effort</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-cogintech-teal/20 flex items-center justify-center">
              <span className="text-cogintech-teal font-bold text-3xl">10×</span>
            </div>
            <div className="text-2xl font-bold text-cogintech-teal mb-1">Faster</div>
            <div className="text-base font-bold text-foreground/70">information access</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-cogintech-blue/20 flex items-center justify-center">
              <span className="text-cogintech-blue font-bold text-2xl">Higher</span>
            </div>
            <div className="text-2xl font-bold text-cogintech-blue mb-1">Consistency</div>
            <div className="text-base font-bold text-foreground/70">and accuracy of reports</div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-foreground/60 italic">Based on internal benchmarks and early user feedback.</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors" aria-label="Close image" title="Close image">
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <img src="/lovable-uploads/8779f590-9e4c-43b9-abf7-8e951aa8db60.png" alt="Document Chaos → Structured Database → AI Assistant" className="w-auto h-auto max-w-full max-h-full object-contain" style={{
            maxWidth: '95vw',
            maxHeight: '95vh'
          }} />
            </div>
          </div>
        </div>}
    </section>;
};
export default NewHero;