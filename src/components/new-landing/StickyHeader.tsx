import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 py-3 px-4 shadow-sm z-40 transition-all duration-300">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-bold text-cogintech-blue">Cogintech</span>
          <span className="text-sm text-foreground/60">Double Your Engineering Productivity</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="outline"
            className="border-cogintech-blue text-cogintech-blue hover:bg-cogintech-blue/5"
            onClick={() => document.getElementById('book-demo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Demo
          </Button>
          <Button
            size="sm"
            className="bg-cogintech-orange hover:bg-cogintech-orange/90 text-white"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Test Access
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;