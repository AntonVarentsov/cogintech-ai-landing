
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cogintech-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cogintech-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:text-5xl">
                <span className="gradient-text">Reduce Integrity Management and Inspection Costs</span> <p />by 30% with <p />AI-Powered Analysis
              </h1>
              <p className="text-xl text-foreground/80">
                Accelerate report generation to <span className="font-semibold">24 hours</span> and improve accuracy to <span className="font-semibold">95%+</span> with our intelligent oil & gas equipment integrity analysis solution.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cogintech-orange" size="lg" className="font-medium px-8 py-6" onClick={() => document.getElementById('lead-form')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Request a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="cogintech-blue-outline" size="lg" className="font-medium px-8 py-6" onClick={() => document.getElementById('demo')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                See How It Works
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-4 text-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">24h</span>
                </div>
                <span>Report Delivery</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">95%+</span>
                </div>
                <span>Accuracy Rate</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                  <span className="text-orange-600 font-bold">30%</span>
                </div>
                <span>Cost Reduction</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-80 sm:h-96 md:h-[500px] rounded-xl overflow-hidden bg-gradient-to-b from-gray-50 to-cogintech-blue/10">
            <img src="/lovable-uploads/import_pdf.gif" alt="AI-powered oil and gas infrastructure analysis" className="w-full h-auto max-h-full object-contain object-top" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cogintech-blue/20 to-transparent rounded-b-xl"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
