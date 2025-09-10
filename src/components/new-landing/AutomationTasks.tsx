import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, FileText, Shield, Calendar } from "lucide-react";

const AutomationTasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Corrosion Loop Creation and Management",
      icon: Cog,
      timeSavings: "75-85%",
      whatWeAutomate: [
        "Eliminate 90% of manual data extraction and preparation time",
        "Automated corrosion loops creation based on your rules",
        "Automated outlier identification and flagging",
        "Automated trending with confidence intervals"
      ],
      whatEngineersNo: "Review and final decision-making"
    },
    {
      id: 2,
      title: "Inspection Report Analysis & Interpretation",
      icon: FileText,
      timeSavings: "60-70%",
      whatWeAutomate: [
        "Extract 80-90% of data automatically",
        "Automated photo analysis and defect identification",
        "Automated anomaly identification and flagging",
        "Quality flags: Automated identification of incomplete/inconsistent data"
      ],
      whatEngineersNo: "Decision-making and complex assessments"
    },
    {
      id: 3,
      title: "Risk-Based Inspection Data Preparation",
      icon: Shield,
      timeSavings: "50-60%",
      whatWeAutomate: [
        "Automated data extraction from multiple source systems",
        "AI extraction from PDF/paper records",
        "Damage mechanism AI for initial damage mechanism screening",
        "Automated consistency checking and gap identification"
      ],
      whatEngineersNo: "Apply engineering judgment, complex damage mechanism assessment"
    },
    {
      id: 4,
      title: "Inspection Workpack Preparation & Planning",
      icon: Calendar,
      timeSavings: "50-60%",
      whatWeAutomate: [
        "Drawing compilation – locating current P&IDs, isometrics, equipment drawings",
        "Previous repair history – excavating maintenance records to understand modification history",
        "Inspection method selection",
        "Resource allocation – crew scheduling with skills requirements"
      ],
      whatEngineersNo: "Review and final decision-making"
    }
  ];

  return (
    <section id="automation-tasks" className="py-20 bg-gradient-to-br from-background via-background to-cogintech-blue/5 border-t border-gray-200/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cogintech-blue to-cogintech-orange bg-clip-text text-transparent">
            Typical Engineering Tasks You Can Automate
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how CogInTech Integrity AI transforms time-consuming manual data handling into automated workflows
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tasks.map((task) => {
            const IconComponent = task.icon;
            return (
              <Card key={task.id} className="p-6 hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-cogintech-blue/10">
                    <IconComponent className="w-6 h-6 text-cogintech-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{task.title}</h3>
                    <Badge variant="secondary" className="bg-cogintech-orange/10 text-cogintech-orange border-cogintech-orange/20">
                      Time Savings: {task.timeSavings}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What We Automate:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {task.whatWeAutomate.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-cogintech-blue rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What Engineers Do:</h4>
                    <p className="text-sm text-muted-foreground italic">{task.whatEngineersNo}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AutomationTasks;