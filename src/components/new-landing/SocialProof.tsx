import { Button } from "@/components/ui/button";
import { Rocket, Users, Zap, CheckCircle, Play, Mail } from "lucide-react";

const EarlyAdopters = () => {
  return (
    <section id="early-adopters" className="py-20 bg-gradient-to-br from-cogintech-dark/90 via-cogintech-dark/80 to-cogintech-blue/60">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Be the First to Experience AI-Powered Engineering Services
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            We're opening a limited number of MVP slots this quarter:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Live Demo Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-cogintech-orange/20 rounded-xl p-8 text-center hover:bg-white/90 transition-all duration-300 shadow-lg flex flex-col">
            <div className="w-16 h-16 bg-cogintech-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-cogintech-orange" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-cogintech-dark">Live Demo with Your Team</h3>
            <p className="text-cogintech-dark/70 mb-6 flex-1">
              Walk through a real scenario with your files.
            </p>
            <Button 
              variant="cogintech-orange"
              size="lg"
              className="w-full font-semibold mt-auto"
              onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Demo
            </Button>
          </div>

          {/* Test Access Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-cogintech-teal/20 rounded-xl p-8 text-center hover:bg-white/90 transition-all duration-300 shadow-lg flex flex-col">
            <div className="w-16 h-16 bg-cogintech-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-8 h-8 text-cogintech-teal" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-cogintech-dark">Test Access (Sandbox)</h3>
            <p className="text-cogintech-dark/70 mb-6 flex-1">
              Hands-on with sample data • Optional upload of your files during demo.
            </p>
            <Button 
              variant="cogintech-teal"
              size="lg"
              className="w-full font-semibold mt-auto"
              onClick={() => window.open('https://sandbox.cogintech.com', '_blank')}
            >
              Get Test Access
            </Button>
          </div>

          {/* Subscribe Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-cogintech-blue/20 rounded-xl p-8 text-center hover:bg-white/90 transition-all duration-300 shadow-lg flex flex-col">
            <div className="w-16 h-16 bg-cogintech-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-cogintech-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-cogintech-dark">Subscribe for Updates</h3>
            <p className="text-cogintech-dark/70 mb-6 flex-1">
              Product news, features and tips.
            </p>
            <Button 
              variant="cogintech-blue"
              size="lg"
              className="w-full font-semibold mt-auto"
              onClick={() => document.getElementById('newsletter-signup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Subscribe to News
            </Button>
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-4 bg-cogintech-orange/20 text-white px-8 py-4 rounded-full text-lg font-semibold border border-cogintech-orange/30">
            <Rocket className="w-6 h-6" />
            Limited slots available.
          </div>
          
          <div className="max-w-md mx-auto">
            <Button 
              variant="outline"
              size="lg"
              className="w-full font-semibold border-white text-white hover:bg-white hover:text-cogintech-dark"
              onClick={() => document.getElementById('ask-question')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Ask a Question
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopters;