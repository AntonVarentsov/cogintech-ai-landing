import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const NewHero = () => {
  return <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-background via-background to-cogintech-teal/5">
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
              <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:text-5xl text-cogintech-blue">
                Double Your Engineering Team Productivity
              </h1>
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight lg:text-5xl text-cogintech-teal">
                Let Your Engineers Build, Not Search
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cogintech-orange" size="lg" className="font-medium px-8 py-6" onClick={() => document.getElementById('book-demo')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="relative aspect-[2/1] rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm" style={{ height: '300px', width: '650px' }}>
              <img src="/lovable-uploads/8779f590-9e4c-43b9-abf7-8e951aa8db60.png" alt="Document Chaos → Structured Database → AI Assistant" className="w-full h-full object-contain" style={{
                objectPosition: 'center',
                transform: 'scale(0.9)'
              }} />
            </div>
            <p className="text-lg text-foreground/80 text-center">
              <span className="font-semibold">Transform your scattered technical docs into instant-access knowledge and deploy AI assistants to automate routine tasks</span>
            </p>
          </div>
        </div>
        
        {/* Benefits grid */}
        <div className="mt-20 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-cogintech-teal mb-1">10× faster</div>
              <div className="text-sm font-medium text-foreground/70">information retrieval</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-cogintech-orange mb-1">95% fewer</div>
              <div className="text-sm font-medium text-foreground/70">mistakes</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-cogintech-blue mb-1">No change</div>
              <div className="text-sm font-medium text-foreground/70">to existing infrastructure</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-cogintech-teal mb-1">Zero</div>
              <div className="text-sm font-medium text-foreground/70">Manual Data Preparation</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-cogintech-orange mb-1">30% less time</div>
              <div className="text-sm font-medium text-foreground/70">on repetitive tasks</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-cogintech-blue mb-1">No training</div>
              <div className="text-sm font-medium text-foreground/70">required</div>
            </div>
          </div>
        </div>
      </div>

    </section>;
};
export default NewHero;