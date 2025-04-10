import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Zap, Shield, Clock, Monitor } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const elementsRef = useRef([]);
  const dashboardRef = useRef(null);
  const dashboardImageRef = useRef(null);
  
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8
    })
    .from(contentRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8
    }, "-=0.4")
    .from(elementsRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    }, "-=0.4");
    
    // Dashboard animation
    gsap.from(dashboardRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "back.out(1.7)"
    });
    
    // Dashboard image animation
    gsap.from(dashboardImageRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      delay: 1,
      ease: "elastic.out(1, 0.5)"
    });
    
    // Scroll trigger animation for dashboard floating effect
    ScrollTrigger.create({
      trigger: dashboardRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        gsap.to(dashboardRef.current, {
          y: 20 * (self.progress - 0.5),
          rotateY: 5 * (self.progress - 0.5),
          duration: 0.5,
          ease: "power1.out"
        });
      }
    });
    
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white" id='about'>
      {/* Hero Section */}
      <header className="relative h-[80vh] overflow-hidden bg-gradient-to-b from-black/20 to-black/70">
        {/* Background image with parallax effect */}
        <div className="absolute inset-0 w-full h-full transform scale-110">
          <img
            src="https://img.freepik.com/premium-photo/delivery-man-driving-van-with-cardboard-boxes-seat_58466-9341.jpg?uid=R134444413&ga=GA1.1.1809202442.1705419947&semt=ais_hybrid&w=740"
            alt="BMD Livraison - Service de livraison professionnel"
            className="w-full h-full object-cover object-center transform scale-105 motion-safe:animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-black/50 to-black/30 mix-blend-multiply"></div>
        </div>
        
        {/* Content container */}
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center">
          <div ref={headingRef} className="max-w-4xl mx-auto text-center transform transition-all duration-700 translate-y-0">
            
            {/* Heading with animated underline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white relative">
              À PROPOS DE <span className="text-blue-400">BMD</span>
              <span className="block h-1 w-24 bg-blue-400 mt-4 mx-auto"></span>
            </h1>
            
            {/* Tagline with improved typography */}
            <p className="text-xl md:text-2xl font-light tracking-wide text-gray-100 max-w-2xl mx-auto leading-relaxed mb-8">
              Découvrez notre histoire, nos valeurs et notre engagement pour une livraison exceptionnelle
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-8 h-8 text-white/70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </header>

      {/* Content Section - Version Corrigée */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content - Left Side */}
            <div 
              ref={contentRef}
              className="lg:w-1/2 space-y-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                ⚡ Innovation Logistique
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                La précision horlogère <span className="text-blue-600">appliquée à la livraison</span>
              </h2>
              
              <p className="text-lg text-gray-600">
                Chez BMD, nous avons transposé la rigueur suisse dans notre chaîne logistique pour 
                vous offrir une précision inégalée au Maroc.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  {
                    icon: '⏱️',
                    title: "Collecte express",
                    text: "Prise en charge en moins de 2h"
                  },
                  {
                    icon: '🔄',
                    title: "Optimisation intelligente",
                    text: "Tournées calculées avec précision"
                  },
                  {
                    icon: '📍',
                    title: "Précision extrême",
                    text: "Livraison à ±15 minutes près"
                  },
                  {
                    icon: '📊',
                    title: "Suivi temps réel",
                    text: "Visualisation GPS à chaque étape"
                  }
                ].map((item, index) => (
                  <div key={index} ref={addToRefs} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-3">
                      <span className="text-xl mt-0.5">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Nouveau Design - Dashboard/Tableau de bord */}
            <div className="lg:w-1/2 flex justify-center relative">
              <div className="relative perspective-1000">
                {/* Dashboard design */}
                <div 
                  ref={dashboardRef} 
                  className="relative mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl transform-gpu transition-transform"
                  style={{ transformStyle: "preserve-3d", width: "400px" }}
                >
                  
                  
                  {/* Content area */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                    <div ref={dashboardImageRef} className="p-1">
                      <img
                        src="/images/téléchargement (6).png" 
                        alt="Interface de suivi BMD"
                        className="w-full h-auto rounded-md object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Reflection effect */}
                  <div className="absolute top-full left-0 right-0 h-20 bg-gradient-to-b from-black/30 to-transparent -z-10 blur-md transform -translate-y-10 scale-90 mx-auto" style={{ width: '90%' }}></div>
                </div>
                
                {/* Decorative background elements */}
                <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute -z-10 -bottom-10 -left-10 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply opacity-10 blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;