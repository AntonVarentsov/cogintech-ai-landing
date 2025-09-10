import { Button } from "@/components/ui/button";
import { Rocket, Users, Zap, CheckCircle } from "lucide-react";

const EarlyAdopters = () => {
  return (
    <section id="early-adopters" className="py-20 bg-gradient-to-br from-background via-background to-cogintech-blue/5 border-t border-gray-200/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
            {/* Rocket Icon */}
            <div className="w-16 h-16 bg-cogintech-blue/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Rocket className="w-8 h-8 text-cogintech-blue" />
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Join Early Adopters
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10">
              Be among the first to experience revolutionary AI-driven integrity management with leading enterprises.
            </p>
            
            {/* Benefits List */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-foreground font-medium">Exclusive pilot access</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-foreground font-medium">Direct expert support</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-orange-500" />
                <span className="text-foreground font-medium">Early bird benefits</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button 
              size="lg"
              className="bg-cogintech-blue hover:bg-cogintech-blue/90 text-white font-semibold px-12 py-6 text-lg mb-4"
              onClick={() => document.getElementById('book-demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Program
            </Button>
            
            {/* Limited Slots */}
            <p className="text-sm text-cogintech-blue font-medium">
              Limited slots available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopters;