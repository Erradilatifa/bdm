import React, { useState, useEffect } from 'react';
import { Menu, X, Package } from 'lucide-react'; // Supprimé Link de lucide-react
import { Link } from 'react-router-dom'; // Importé Link de react-router-dom
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
            <img
              src="/images/WhatsApp Image 2025-04-03 at 14.33.02.png"
              alt="BMD Logo"
              className="w-90 h-10 rounded-full object-cover"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="animated-border text-gray-700 hover:text-delivery-primary font-medium">Accueil</a>
            <a href="#about" className="animated-border text-gray-700 hover:text-delivery-primary font-medium">About BMD</a>
            <a href="#services" className="animated-border text-gray-700 hover:text-delivery-primary font-medium">Services</a>
            <a href="#testimonials" className="animated-border text-gray-700 hover:text-delivery-primary font-medium">Témoignages</a>
            <a href="#contact" className="animated-border text-gray-700 hover:text-delivery-primary font-medium">Contact</a>
          </div>

          <div className="hidden md:block">
            <Link
              to="/PrivacyPolicyPage"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Mentions légales
            </Link>
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
              <a href="#home" className="text-gray-700 hover:text-delivery-primary font-medium" onClick={() => setIsOpen(false)}>Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-delivery-primary font-medium" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#about" className="text-gray-700 hover:text-delivery-primary font-medium" onClick={() => setIsOpen(false)}>About BMD</a>
              <a href="#testimonials" className="text-gray-700 hover:text-delivery-primary font-medium" onClick={() => setIsOpen(false)}>Témoignages</a>
              <a href="#contact" className="text-gray-700 hover:text-delivery-primary font-medium" onClick={() => setIsOpen(false)}>Contact</a>
              
              {/* Remplacé Button par Link pour cohérence */}
              <Link
                to="/PrivacyPolicyPage"
                className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Mentions légales
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;