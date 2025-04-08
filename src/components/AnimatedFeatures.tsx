import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  // Créer une référence pour le conteneur de cartes
  const cardsContainerRef = useRef(null);
  // Créer une référence pour stocker les éléments de carte
  const featureCardsRef = useRef([]);
  
  // Configuration des animations GSAP à l'aide de useEffect
  useEffect(() => {
    // Réinitialiser le tableau de références
    featureCardsRef.current = featureCardsRef.current.slice(0, 4);
    
    // Animation pour chaque carte - avec vitesse augmentée
    featureCardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(card, 
        {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          scale: 0.8
        },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 90%", // Déclenche un peu plus tôt
            toggleActions: "play none none reset"
          },
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5, // Durée réduite pour plus de rapidité (était 0.8)
          delay: index * 0.08, // Délai réduit entre les cartes (était 0.15)
          ease: "power2.out" // Easing plus rapide
        }
      );
      
      // Animation au survol - plus rapide
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          scale: 1.03, // Effet légèrement réduit pour être plus rapide
          duration: 0.2, // Durée réduite (était 0.3)
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          ease: "power1.out" // Easing plus rapide
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3, // Durée réduite (était 0.5)
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          ease: "power1.inOut" // Easing plus rapide
        });
      });
    });
    
    // Nettoyage lors du démontage du composant
    return () => {
      featureCardsRef.current.forEach((card) => {
        if (card) {
          // Nettoyage des event listeners
          ScrollTrigger.getAll().forEach(st => st.kill());
        }
      });
    };
  }, []); // Exécuté une seule fois au montage

  const features = [
    {
      title: "Plateforme Unifiée",
      description: "Gérez l'ensemble de vos opérations logistiques depuis notre interface unique et intuitive.",
      icon: "🌐"
    },
    {
      title: "Support Premium",
      description: "Accès 24/7 à une équipe dédiée pour répondre à vos besoins spécifiques.",
      icon: "🛡️"
    },
    {
      title: "Intégration API",
      description: "Connectez facilement notre solution à votre système existant via notre API robuste.",
      icon: "⚙️"
    },
    {
      title: "Écoresponsabilité",
      description: "Des solutions logistiques optimisées pour réduire votre empreinte carbone.",
      icon: "♻️"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir BMD ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une approche différente de la logistique, centrée sur vos besoins spécifiques.
          </p>
        </div>
        <div 
          ref={cardsContainerRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => featureCardsRef.current[index] = el}
              className="bg-white p-8 rounded-xl shadow-md transition-all duration-200" // Duration réduite (était 300)
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;