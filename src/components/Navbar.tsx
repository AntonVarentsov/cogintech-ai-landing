
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isГлавнаяPage = location.pathname === '/';
  
  // Определяем, находимся ли мы на страницах Компания
  const companyPages = ['/about-us', '/our-team', '/security-note', '/privacy-policy', '/terms-of-service', '/cookie-policy', '/contact'];
  
  const isКомпанияPage = companyPages.includes(location.pathname);

  const handleLogoClick = () => {
    if (isГлавнаяPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScheduleDemo = () => {
    if (isГлавнаяPage) {
      document.getElementById('book-demo')?.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      // Navigate to home page and then scroll to demo
      window.location.href = '/#book-demo';
    }
  };

  const handleTryFree = () => {
    if (isГлавнаяPage) {
      document.getElementById('pricing')?.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      // Navigate to home page and then scroll to pricing
      window.location.href = '/#pricing';
    }
  };

  return (
    <nav id="site-navbar" className="py-3 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={handleLogoClick}>
            <img 
              src="/lovable-uploads/ad840850-7ba3-4ea9-94b2-bcc7d798cc9b.png" 
              alt="Логотип Cognitive Industrial Technologies" 
              className="h-10 mr-2 w-auto object-contain"
              width="140"
              height="40"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {isГлавнаяPage ? (
            <>
              <a href="#automation-tasks" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Решение</a>
              <a href="#how-it-works" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Как это работает</a>
              <a href="#results" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Результаты</a>
              <a href="#book-demo" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Демо</a>
              <a href="#faq" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Частые вопросы</a>
              
              {/* Компания Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-base text-foreground/80 hover:text-cogintech-blue transition-colors">
                  Компания <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/about-us" className="cursor-pointer text-base">О нас</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/security-note" className="cursor-pointer text-base">Примечание о безопасности</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/privacy-policy" className="cursor-pointer text-base">Политика конфиденциальности</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/terms-of-service" className="cursor-pointer text-base">Условия обслуживания</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/cookie-policy" className="cursor-pointer text-base">Политика cookies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/contact" className="cursor-pointer text-base">Контакты</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : isКомпанияPage ? (
            <>
              <Link to="/" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Главная</Link>
              <Link to="/about-us" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">О нас</Link>
              
              <Link to="/security-note" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Примечание о безопасности</Link>
              <Link to="/privacy-policy" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Политика конфиденциальности</Link>
              <Link to="/terms-of-service" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Условия обслуживания</Link>
              <Link to="/cookie-policy" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Политика cookies</Link>
              <Link to="/contact" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Контакты</Link>
            </>
          ) : (
            <>
              <Link to="/" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Главная</Link>
              
              {/* Компания Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-base text-foreground/80 hover:text-cogintech-blue transition-colors">
                  Компания <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/about-us" className="cursor-pointer text-base">О нас</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/security-note" className="cursor-pointer text-base">Примечание о безопасности</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/privacy-policy" className="cursor-pointer text-base">Политика конфиденциальности</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/terms-of-service" className="cursor-pointer text-base">Условия обслуживания</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/cookie-policy" className="cursor-pointer text-base">Политика cookies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/contact" className="cursor-pointer text-base">Контакты</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
          {isГлавнаяPage ? (
            <Button 
              variant="cogintech-orange"
              className="text-base px-4 py-2"
              onClick={handleScheduleDemo}
            >
              Запланировать демо
            </Button>
          ) : (
            <Button 
              variant="cogintech-orange"
              className="text-base px-4 py-2"
              onClick={handleTryFree}
            >
              Получить тестовый доступ
            </Button>
          )}
        </div>

        {/* Mobile Schedule Demo Button + Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          {isГлавнаяPage && (
            <Button 
              variant="cogintech-orange"
              size="sm"
              className="text-xs px-2 py-1"
              onClick={handleScheduleDemo}
            >
              Demo
            </Button>
          )}
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border animate-fade-in z-50">
          <div className="container py-3 flex flex-col space-y-2">
            {isГлавнаяPage ? (
              <>
                <a 
                  href="#automation-tasks" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solution
                </a>
                <a 
                  href="#how-it-works" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How it works
                </a>
                <a 
                  href="#results" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Results
                </a>
                <a 
                  href="#book-demo" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Demo
                </a>
                <a 
                  href="#faq" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
                
                {/* Компания Section in Mobile */}
                <div className="border-t border-border pt-3 mt-2">
                  <div className="text-xs font-semibold text-foreground mb-2">Компания</div>
                  <Link 
                    to="/about-us" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    О нас
                  </Link>
                  <Link 
                    to="/security-note" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Примечание о безопасности
                  </Link>
                  <Link 
                    to="/privacy-policy" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Политика конфиденциальности
                  </Link>
                  <Link 
                    to="/terms-of-service" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Условия обслуживания
                  </Link>
                  <Link 
                    to="/cookie-policy" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Политика cookies
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Контакты
                  </Link>
                </div>
              </>
            ) : isКомпанияPage ? (
              <>
                <Link 
                  to="/" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Главная
                </Link>
                <Link 
                  to="/about-us" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  О нас
                </Link>
                <Link 
                  to="/security-note" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Примечание о безопасности
                </Link>
                <Link 
                  to="/privacy-policy" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Политика конфиденциальности
                </Link>
                <Link 
                  to="/terms-of-service" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Условия обслуживания
                </Link>
                <Link 
                  to="/cookie-policy" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Политика cookies
                </Link>
                <Link 
                  to="/contact" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Главная
                </Link>
                
                {/* Компания Section in Mobile for other pages */}
                <div className="border-t border-border pt-3 mt-2">
                  <div className="text-xs font-semibold text-foreground mb-2">Компания</div>
                  <Link 
                    to="/about-us" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    О нас
                  </Link>
                  <Link 
                    to="/security-note" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Примечание о безопасности
                  </Link>
                  <Link 
                    to="/privacy-policy" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Политика конфиденциальности
                  </Link>
                  <Link 
                    to="/terms-of-service" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Условия обслуживания
                  </Link>
                  <Link 
                    to="/cookie-policy" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Политика cookies
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Контакты
                  </Link>
                </div>
              </>
            )}
            <div className="pt-3">
              <Button 
                variant="cogintech-orange"
                className="text-base px-4 py-2 w-full"
                onClick={() => {
                  if (isГлавнаяPage) {
                    handleScheduleDemo();
                    setIsMenuOpen(false);
                  } else {
                    setIsMenuOpen(false);
                    handleTryFree();
                  }
                }}
              >
                {isГлавнаяPage ? 'Запланировать демо' : 'Получить тестовый доступ'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
