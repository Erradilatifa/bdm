
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);const ServicesSection=()=>{
  const featureCardsRef = useRef([]);

  featureCardsRef.current.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      x: index % 2 === 0 ? -50 : 50,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: "power2.out"
    });
  });


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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={el => featureCardsRef.current[index] = el}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
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
