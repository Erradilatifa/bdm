import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Zap, Wallet } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceItems = [
  {
    id: 'intelligent-pickup',
    title: "Ramassage Intelligent",
    description: "Notre système de ramassage intelligent s'adapte à votre emploi du temps. Programmez des collectes récurrentes ou ponctuelles en quelques clics.",
    icon: Calendar,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    tags: ["Flexibilité", "Planification", "Efficacité"]
  },
  {
    id: 'high-precision-tracking',
    title: "Suivi Haute Précision",
    description: "Une traçabilité sans faille avec mise à jour géolocalisée toutes les 2 heures. Visualisez le parcours de votre colis en temps réel sur une carte interactive.",
    icon: MapPin,
    iconColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    tags: ["Transparence", "Précision", "Notifications"]
  },
  {
    id: 'lightning-delivery',
    title: "Livraison Éclair",
    description: "Notre réseau optimisé garantit des délais record : 95% de nos livraisons en ville sont effectuées dans les 6 heures suivant le ramassage.",
    icon: Zap,
    iconColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
    tags: ["Rapidité", "Fiabilité", "Urgence"]
  },
  {
    id: 'financial-solutions',
    title: "Solutions Financières",
    description: "Paiements sécurisés avec remise automatique sur votre compte 2 fois par semaine. Accédez à des rapports détaillés et des outils d'analyse financière.",
    icon: Wallet,
    iconColor: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-100',
    tags: ["Sécurité", "Automatisation", "Analytique"]
  }
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Animation for heading elements
    gsap.fromTo(
      headingRef.current.children,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        }
      }
    );

    // Animation for cards
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          delay: 0.2 + (index * 0.1),
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
      
      // Icon animation
      const icon = card.querySelector('.icon-container');
      if (icon) {
        gsap.fromTo(
          icon,
          { scale: 0.5, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.5, 
            delay: 0.6 + (index * 0.1),
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      }
      
      // Tags animation
      const tags = card.querySelectorAll('.tag');
      if (tags.length > 0) {
        gsap.fromTo(
          tags,
          { x: -20, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.4, 
            stagger: 0.1,
            delay: 0.8 + (index * 0.1),
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      }
    });
    
    // Button animation
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
      gsap.fromTo(
        ctaButton,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          delay: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaButton,
            start: "top 90%",
          }
        }
      );
    }
    
    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  const setCardRef = (el, index) => {
    cardsRef.current[index] = el;
  };

  return (
    <section 
      id="services" 
      className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white" 
      ref={sectionRef}
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16" ref={headingRef}>
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Nos <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Des solutions logistiques professionnelles adaptées à vos besoins
          </p>
        </div>
        
        <div 
          className="grid md:grid-cols-2 gap-8"
          role="list"
          aria-label="Liste des services offerts"
        >
          {serviceItems.map((service, index) => (
            <Card 
              key={service.id}
              id={service.id}
              className={`border ${service.borderColor} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
              ref={(el) => setCardRef(el, index)}
              role="listitem"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`icon-container p-4 rounded-xl ${service.bgColor}`}>
                    <service.icon size={28} className={`${service.iconColor}`} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2" aria-label="Caractéristiques du service">
                      {service.tags.map((tag, i) => (
                        <span 
                          key={`${service.id}-tag-${i}`}
                          className={`text-xs ${service.bgColor} ${service.iconColor} px-3 py-1.5 rounded-full tag font-medium`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            className="cta-button bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Contacter notre équipe pour plus d'informations sur nos services"
          >
            Contacter notre équipe
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;