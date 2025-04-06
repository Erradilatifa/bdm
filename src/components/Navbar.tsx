
import React, { useState, useEffect } from 'react';
import { Menu, X, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6",
        scrolled ? "bg-white/95 shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-delivery-primary animate-pulse-light" />
            <span className="text-xl font-bold text-gradient">BMD</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="animated-border text-gray-700 hover:text-delivery-primary font-medium">Services</a>
            <a href="#how-it-works" className="animated-border text-gray-700 hover:text-delivery-primary font-medium">About BDM</a>
            <a href="#testimonials" className="animated-border text-gray-700 hover:text-delivery-primary font-medium">Témoignages</a>
            <a href="#contact" className="animated-border text-gray-700 hover:text-delivery-primary font-medium">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-gradient animate-pulse-light">
            Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-delivery-primary"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg py-4 px-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-delivery-primary font-medium" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-delivery-primary font-medium" onClick={() => setIsOpen(false)}>Comment ça marche</a>
              <a href="#testimonials" className="text-gray-700 hover:text-delivery-primary font-medium" onClick={() => setIsOpen(false)}>Témoignages</a>
              <a href="#contact" className="text-gray-700 hover:text-delivery-primary font-medium" onClick={() => setIsOpen(false)}>Contact</a>
              <Button className="btn-gradient w-full" onClick={() => setIsOpen(false)}>
                Commander Maintenant
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
