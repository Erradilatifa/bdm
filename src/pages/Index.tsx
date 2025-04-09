
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AnimatedFeatures from '@/components/AnimatedFeatures';
import ServicesSection from '@/components/ServicesSection';

import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import AboutPage from '@/components/AboutPage';
import { ToastProvider } from '@/components/ui/toast';
import Cities from '@/components/Cities';
import BMDLoginPage from '@/components/BMDLoginPage';


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <AnimatedFeatures />
        <AboutPage/>

        <ServicesSection />
        <Cities/>
        <TestimonialsSection /><br />
        
        
      
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
