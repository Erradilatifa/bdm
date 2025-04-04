import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Zap as LightningBoltIcon, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const ctaRef = useRef(null);
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
    .from(valuesRef.current, {
      opacity: 0,
      duration: 0.8
    }, "-=0.4");

    gsap.from(".stat-number", {
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      innerText: 0,
      snap: { innerText: 1 },
      duration: 2,
      stagger: 0.2
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Header avec vidéo en arrière-plan */}
      <header className="relative h-[80vh] overflow-hidden">
        {/* Conteneur de la vidéo avec largeur réduite */}
        <div className="absolute inset-0 w-[100%] h-full mx-auto overflow-hidden">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/YluhsPMQSVE?autoplay=1&mute=1&loop=1&playlist=YluhsPMQSVE&controls=0&showinfo=0&start=6"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="BMD Background Video"
          ></iframe>
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Contenu superposé */}
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center text-center">
          <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold mb-6 text-white">
            À PROPOS DE BMD
          </h1>
          <p ref={contentRef} className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Découvrez notre histoire, nos valeurs et notre engagement pour une livraison exceptionnelle
          </p>
        </div>
      </header>
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
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Le reste de votre contenu ici */}
      </main>
    </div>
  );
};

export default AboutPage;