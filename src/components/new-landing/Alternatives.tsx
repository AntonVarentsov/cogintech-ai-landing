import { FolderOpen, Database, Brain, Check, X, Minus } from "lucide-react";

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
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            How We Compare
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            See the difference between traditional file management and AI-powered engineering intelligence.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="p-4"></div>
              {alternatives.map((alt, index) => {
                const IconComponent = alt.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className={`w-12 h-12 ${alt.name === 'Cogintech AI' ? 'bg-cogintech-teal/20' : 'bg-gray-200'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-6 h-6 ${alt.name === 'Cogintech AI' ? 'text-cogintech-teal' : 'text-gray-600'}`} />
                    </div>
                    <h3 className="font-bold text-foreground">{alt.name}</h3>
                  </div>
                );
              })}
            </div>
            
            {Object.keys(alternatives[0].features).map((feature) => (
              <div key={feature} className="grid grid-cols-4 gap-4 mb-3 py-4 border-b border-gray-100">
                <div className="p-4 font-semibold text-lg text-foreground">{feature}</div>
                {alternatives.map((alt, index) => (
                  <div key={index} className="p-4 flex items-center gap-3">
                    {getStatusIcon(alt.name, feature)}
                    <span className="text-base font-medium text-foreground/80">{alt.features[feature as keyof typeof alt.features]}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alternatives;