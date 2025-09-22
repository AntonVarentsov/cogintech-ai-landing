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
    <div id="sticky-header" className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 py-3 px-4 shadow-sm z-50 transition-all duration-300">
      <div className="container flex items-center justify-end">
        <div id="sticky-cta-slot" className="flex items-center gap-2" />
      </div>
    </div>
  );
};

export default StickyHeader;