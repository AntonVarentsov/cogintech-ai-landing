import { FolderOpen, Database, Brain, Check, X, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Alternatives = () => {
  const alternatives = [
    {
      name: "Folders & SharePoint",
      icon: FolderOpen,
      features: {
        "Time to find": "Hours of searching",
        "Report consistency": "Manual templates",
        "Structured analytics": "Not available",
        "Setup time": "Immediate"
      }
    },
    {
      name: "Generic DMS",
      icon: Database,
      features: {
        "Time to find": "Tag-based search",
        "Report consistency": "Basic templates",
        "Structured analytics": "Limited queries",
        "Setup time": "Weeks of config"
      }
    },
    {
      name: "Cogintech AI",
      icon: Brain,
      features: {
        "Time to find": "Instant AI search",
        "Report consistency": "AI-standardized",
        "Structured analytics": "Full AI analysis",
        "Setup time": "2-week pilot"
      }
    }
  ];

  const getStatusIcon = (alternative: string, feature: string) => {
    if (alternative === "Cogintech AI") {
      return <Check className="w-6 h-6 text-green-600 font-bold stroke-[3]" />;
    }
    if (alternative === "Folders & SharePoint") {
      return feature === "Setup time" ? <Check className="w-6 h-6 text-green-600 font-bold stroke-[3]" /> : <X className="w-6 h-6 text-red-500 font-bold stroke-[3]" />;
    }
    return <Minus className="w-6 h-6 text-yellow-500 font-bold stroke-[3]" />;
  };

  return (
    <section id="alternatives" className="py-20 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100/80 border-t border-gray-200/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            How We Compare
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            See the difference between traditional file management and AI-powered engineering intelligence.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Header Cards - Mobile Stack */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 mb-8">
            <div className=""></div>
            {alternatives.map((alt, index) => {
              const IconComponent = alt.icon;
              return (
                <div key={index} className={`${
                  alt.name === 'Cogintech AI' 
                    ? 'bg-gradient-to-br from-cogintech-teal/10 to-cogintech-teal/5 border-2 border-cogintech-teal/20' 
                    : 'bg-white border border-gray-200'
                } rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className={`w-14 h-14 ${
                    alt.name === 'Cogintech AI' 
                      ? 'bg-cogintech-teal/20' 
                      : 'bg-gray-100'
                  } rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-7 h-7 ${
                      alt.name === 'Cogintech AI' 
                        ? 'text-cogintech-teal' 
                        : 'text-gray-600'
                    }`} />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{alt.name}</h3>
                </div>
              );
            })}
          </div>

          {/* Mobile Alternative Cards */}
          <div className="md:hidden space-y-6 mb-8">
            {alternatives.map((alt, index) => {
              const IconComponent = alt.icon;
              return (
                <div key={index} className={`${
                  alt.name === 'Cogintech AI' 
                    ? 'bg-gradient-to-br from-cogintech-teal/10 to-cogintech-teal/5 border-2 border-cogintech-teal/20' 
                    : 'bg-white border border-gray-200'
                } rounded-2xl p-6 shadow-lg`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 ${
                      alt.name === 'Cogintech AI' 
                        ? 'bg-cogintech-teal/20' 
                        : 'bg-gray-100'
                    } rounded-full flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${
                        alt.name === 'Cogintech AI' 
                          ? 'text-cogintech-teal' 
                          : 'text-gray-600'
                      }`} />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{alt.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(alt.features).map(([feature, value]) => (
                      <div key={feature} className="flex flex-col">
                        <span className="font-medium text-foreground/80 text-sm mb-1">{feature}:</span>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(alt.name, feature)}
                          <span className={`text-sm font-medium ${
                            alt.name === 'Cogintech AI' 
                              ? 'text-cogintech-teal font-semibold' 
                              : 'text-foreground/80'
                          }`}>
                            {value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Desktop Comparison Table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {Object.keys(alternatives[0].features).map((feature, featureIndex) => (
              <div key={feature} className={`grid grid-cols-4 gap-6 ${
                featureIndex !== Object.keys(alternatives[0].features).length - 1 
                  ? 'border-b border-gray-100' 
                  : ''
              } hover:bg-gray-50/50 transition-colors duration-200`}>
                <div className="p-6 bg-gray-50/70 border-r border-gray-100">
                  <h4 className="font-semibold text-lg text-foreground">{feature}</h4>
                </div>
                {alternatives.map((alt, index) => (
                  <div key={index} className={`p-6 flex items-center gap-4 ${
                    alt.name === 'Cogintech AI' ? 'bg-cogintech-teal/5' : ''
                  }`}>
                    <div className="flex-shrink-0">
                      {getStatusIcon(alt.name, feature)}
                    </div>
                    <span className={`text-base font-medium ${
                      alt.name === 'Cogintech AI' 
                        ? 'text-cogintech-teal font-semibold' 
                        : 'text-foreground/80'
                    }`}>
                      {alt.features[feature as keyof typeof alt.features]}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-8">
            <p className="text-sm text-foreground/60 mb-4">
              Ready to see the difference AI can make for your engineering team?
            </p>
            <div className="flex justify-center">
              <Button asChild variant="cogintech-teal" className="px-6 py-3 font-semibold">
                <a href="#book-demo">Book Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alternatives;