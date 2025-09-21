
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
  const isHomePage = location.pathname === '/';
  
  // Определяем, находимся ли мы на страницах Company или Resources
  const companyPages = ['/about-us', '/our-team', '/careers', '/news', '/contact'];
  const resourcesPages = ['/case-studies', '/technology', '/blog', '/privacy-policy', '/terms-of-service', '/cookie-policy'];
  
  const isCompanyPage = companyPages.includes(location.pathname);
  const isResourcesPage = resourcesPages.includes(location.pathname);

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScheduleDemo = () => {
    if (isHomePage) {
      document.getElementById('book-demo')?.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      // Navigate to home page and then scroll to demo
      window.location.href = '/#book-demo';
    }
  };

  const handleTryFree = () => {
    if (isHomePage) {
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
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={handleLogoClick}>
            <img 
              src="/lovable-uploads/ad840850-7ba3-4ea9-94b2-bcc7d798cc9b.png" 
              alt="Cognitive Industrial Technologies Logo" 
              className="h-10 w-auto object-contain"
              width="140"
              height="40"
            />
          </Link>
        </div>

        {/* Schedule Demo Button - центральное место */}
        {isHomePage && (
          <div className="hidden lg:flex">
            <Button 
              variant="cogintech-orange"
              className="text-base px-4 py-2"
              onClick={handleScheduleDemo}
            >
              Schedule a Demo
            </Button>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4">
          {isHomePage ? (
            <>
              <a href="#automation-tasks" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Solution</a>
              <a href="#how-it-works" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">How it works</a>
              <a href="#results" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Results</a>
              <a href="#book-demo" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Demo</a>
              <a href="#faq" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">FAQ</a>
              
              {/* Company Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-base text-foreground/80 hover:text-cogintech-blue transition-colors">
                  Company <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/about-us" className="cursor-pointer text-base">About Us</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/our-team" className="cursor-pointer text-base">Our Team</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/careers" className="cursor-pointer text-base">Careers</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/news" className="cursor-pointer text-base">News</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/contact" className="cursor-pointer text-base">Contact</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Resources Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-base text-foreground/80 hover:text-cogintech-blue transition-colors">
                  Resources <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/case-studies" className="cursor-pointer text-base">Case Studies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/technology" className="cursor-pointer text-base">Technology</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/blog" className="cursor-pointer text-base">Blog</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/privacy-policy" className="cursor-pointer text-base">Privacy Policy</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/terms-of-service" className="cursor-pointer text-base">Terms of Service</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/cookie-policy" className="cursor-pointer text-base">Cookie Policy</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : isCompanyPage ? (
            <>
              <Link to="/" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Home</Link>
              <Link to="/about-us" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">About Us</Link>
              <Link to="/our-team" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Our Team</Link>
              <Link to="/careers" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Careers</Link>
              <Link to="/news" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">News</Link>
              <Link to="/contact" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Contact</Link>
              
              {/* Resources Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-base text-foreground/80 hover:text-cogintech-blue transition-colors">
                  Resources <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/case-studies" className="cursor-pointer text-base">Case Studies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/technology" className="cursor-pointer text-base">Technology</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/blog" className="cursor-pointer text-base">Blog</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/privacy-policy" className="cursor-pointer text-base">Privacy Policy</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/terms-of-service" className="cursor-pointer text-base">Terms of Service</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/cookie-policy" className="cursor-pointer text-base">Cookie Policy</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : isResourcesPage ? (
            <>
              <Link to="/" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Home</Link>
              <Link to="/case-studies" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Case Studies</Link>
              <Link to="/technology" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Technology</Link>
              <Link to="/blog" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Blog</Link>
              <Link to="/privacy-policy" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Terms of Service</Link>
              
              {/* Company Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-base text-foreground/80 hover:text-cogintech-blue transition-colors">
                  Company <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/about-us" className="cursor-pointer text-base">About Us</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/our-team" className="cursor-pointer text-base">Our Team</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/careers" className="cursor-pointer text-base">Careers</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/news" className="cursor-pointer text-base">News</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/contact" className="cursor-pointer text-base">Contact</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link to="/" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Home</Link>
              <Link to="/about-us" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">About Us</Link>
              <Link to="/our-team" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Our Team</Link>
              <Link to="/careers" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Careers</Link>
              <Link to="/news" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">News</Link>
              <Link to="/contact" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Contact</Link>
            </>
          )}
          {!isHomePage && (
            <Button 
              variant="cogintech-orange"
              className="text-base px-4 py-2"
              onClick={handleTryFree}
            >
              Get Test Access
            </Button>
          )}
        </div>

        {/* Mobile Schedule Demo Button + Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          {isHomePage && (
            <Button 
              variant="cogintech-orange"
              size="sm"
              className="text-sm px-3 py-2"
              onClick={handleScheduleDemo}
            >
              Schedule a Demo
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
            {isHomePage ? (
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
                
                {/* Company Section in Mobile */}
                <div className="border-t border-border pt-3 mt-2">
                  <div className="text-xs font-semibold text-foreground mb-2">Company</div>
                  <Link 
                    to="/about-us" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/our-team" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Team
                  </Link>
                  <Link 
                    to="/careers" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link 
                    to="/news" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    News
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>

                {/* Resources Section in Mobile */}
                <div className="border-t border-border pt-3 mt-2">
                  <div className="text-xs font-semibold text-foreground mb-2">Resources</div>
                  <Link 
                    to="/case-studies" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                  <Link 
                    to="/technology" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Technology
                  </Link>
                  <Link 
                    to="/blog" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/privacy-policy" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    to="/terms-of-service" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Terms of Service
                  </Link>
                  <Link 
                    to="/cookie-policy" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cookie Policy
                  </Link>
                </div>
              </>
            ) : isCompanyPage ? (
              <>
                <Link 
                  to="/" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about-us" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/our-team" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Team
                </Link>
                <Link 
                  to="/careers" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link 
                  to="/news" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </Link>
                <Link 
                  to="/contact" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                
                {/* Resources Section in Mobile */}
                <div className="border-t border-border pt-3 mt-2">
                  <div className="text-xs font-semibold text-foreground mb-2">Resources</div>
                  <Link 
                    to="/case-studies" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                  <Link 
                    to="/technology" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Technology
                  </Link>
                  <Link 
                    to="/blog" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/privacy-policy" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    to="/terms-of-service" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Terms of Service
                  </Link>
                  <Link 
                    to="/cookie-policy" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cookie Policy
                  </Link>
                </div>
              </>
            ) : isResourcesPage ? (
              <>
                <Link 
                  to="/" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/case-studies" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link 
                  to="/technology" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Technology
                </Link>
                <Link 
                  to="/blog" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/privacy-policy" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms-of-service" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terms of Service
                </Link>
                <Link 
                  to="/cookie-policy" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cookie Policy
                </Link>
                
                {/* Company Section in Mobile */}
                <div className="border-t border-border pt-3 mt-2">
                  <div className="text-xs font-semibold text-foreground mb-2">Company</div>
                  <Link 
                    to="/about-us" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/our-team" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Team
                  </Link>
                  <Link 
                    to="/careers" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link 
                    to="/news" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    News
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about-us" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/our-team" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Team
                </Link>
                <Link 
                  to="/careers" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link 
                  to="/news" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </Link>
                <Link 
                  to="/contact" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </>
            )}
            <div className="pt-3">
              <Button 
                variant="cogintech-orange"
                className="text-base px-4 py-2 w-full"
                onClick={() => {
                  if (isHomePage) {
                    handleScheduleDemo();
                    setIsMenuOpen(false);
                  } else {
                    setIsMenuOpen(false);
                    handleTryFree();
                  }
                }}
              >
                {isHomePage ? 'Schedule a Demo' : 'Get Test Access'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
