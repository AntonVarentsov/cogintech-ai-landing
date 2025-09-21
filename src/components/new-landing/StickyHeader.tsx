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
      {/* Пустая плашка для будущей фиксированной кнопки */}
    </div>
  );
};

export default StickyHeader;