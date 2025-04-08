import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Zap, Shield, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const elementsRef = useRef([]);
  
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
    <div className="max-w-4xl mx-auto text-center transform transition-all duration-700 translate-y-0">
      {/* Brand logo */}
      <div className="mb-8">
        <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-6">
          <span className="text-3xl font-black text-white">BMD</span>
        </div>
      </div>
      
      {/* Heading with animated underline */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white relative">
        À PROPOS DE <span className="text-blue-400">BMD</span>
        <span className="block h-1 w-24 bg-blue-400 mt-4 mx-auto"></span>
      </h1>
      
      {/* Tagline with improved typography */}
      <p className="text-xl md:text-2xl font-light tracking-wide text-gray-100 max-w-2xl mx-auto leading-relaxed mb-8">
        Découvrez notre histoire, nos valeurs et notre engagement pour une livraison exceptionnelle
      </p>
      
      {/* CTA Button */}
      <button className="mt-8 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg">
        Notre Mission
      </button>
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

      {/* Content Section */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div 
        ref={addToRefs}
        className="md:w-1/2"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Notre Engagement Temps Réel
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          BMD révolutionne la livraison au Maroc avec notre système chronométré. 
          Comme une montre suisse, chaque mouvement est calculé pour une précision maximale.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-600 mr-3">⏱️</span>
            <span className="text-gray-700">Collecte en moins de 2h après commande</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3">🔄</span>
            <span className="text-gray-700">Tournées optimisées comme un mouvement d'horlogerie</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3">📍</span>
            <span className="text-gray-700">Précision de livraison à 15 minutes près</span>
          </li>
        </ul>
      </div>

      <div 
  ref={addToRefs}
  className="md:w-1/2 flex justify-center"
>
  {/* Conteneur cercle seulement */}
  <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
    {/* Cercle extérieur stylisé */}
    <div className="absolute inset-0 rounded-full border-[12px] border-blue-100 shadow-xl"></div>
    
    {/* Image circulaire rotative seule */}
    <div className="absolute inset-5 overflow-hidden rounded-full animate-spin-slow">
      <img 
        src="https://blackmandelivery.ma/images/jet.png" 
        alt="Livraison express BMD" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
     
    </div>
  </div>
</section>

    
    </div>
  );
};

export default AboutPage;