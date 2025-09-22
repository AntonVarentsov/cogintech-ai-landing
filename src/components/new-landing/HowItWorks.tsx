import React from "react";
import { Upload, Brain, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 via-cogintech-light/10 to-gray-100/60 border-t border-gray-200/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How does it work?
          </h2>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto">
            Get from raw project data to client-ready reports in record time
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm border border-cogintech-blue/20 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-br from-cogintech-blue to-cogintech-blue/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cogintech-teal rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Upload & Connect</h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Put all your project files (PDFs, Excel, drawings) in one secure place. Connect with your existing systems seamlessly.
              </p>
            </div>
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <ArrowRight className="w-8 h-8 text-cogintech-teal" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm border border-cogintech-teal/20 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-br from-cogintech-blue to-cogintech-blue/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cogintech-teal rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">AI Organizes & Analyzes</h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Our AI automatically classifies and prepares your data for instant use. No manual sorting required.
              </p>
            </div>
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <ArrowRight className="w-8 h-8 text-cogintech-teal" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm border border-cogintech-blue/20 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-br from-cogintech-blue to-cogintech-blue/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cogintech-teal rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ask & Report</h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Get answers in plain English, generate reports in a click. From question to client-ready document in minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Video Demo Section */}
        <div className="bg-gradient-to-br from-cogintech-blue/10 to-cogintech-teal/10 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-foreground">See It in Action</h3>
            <p className="text-lg text-foreground/70">
              See how your team can turn complex files into client-ready reports
            </p>
          </div>
          
            <div className="relative max-w-4xl mx-auto">
            <video 
              className="w-full h-auto rounded-xl shadow-lg"
              controls
              preload="metadata"
              poster="/lovable-uploads/dashboard.png"
            >
              <source src="/lovable-uploads/AI_assistant.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center text-sm text-foreground/60 mt-4">2-min product tour (no sound needed)</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            variant="cogintech-teal"
            size="lg"
            className="px-12 py-4 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            onClick={() => {
              const element = document.getElementById('book-demo');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Schedule a Demo →
          </Button>
          <p className="text-sm text-foreground/60 mt-2 mb-2">
            No setup required • Sample data included
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;