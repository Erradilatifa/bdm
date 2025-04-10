import React from 'react';
import { User, Headphones, ShoppingBag, Truck } from 'lucide-react';

function EcommerceProcess() {
  const steps = [
    {
      number: "01",
      icon: <User size={24} className="text-white" />,
      title: "Créer un compte",
      description: "Inscrivez-vous en quelques clics pour accéder à votre espace personnel."
    },
    {
      number: "02",
      icon: <Headphones size={24} className="text-white" />,
      title: "Créer votre boutique",
      description: "Configurez votre store"
    },
    {
      number: "03",
      icon: <ShoppingBag size={24} className="text-white" />,
      title: "Déposer vos produits",
      description: "Ajoutez vos articles avec descriptions, des images et des prix attractifs."
    },
    {
      number: "04",
      icon: <Truck size={24} className="text-white" />,
      title: "Livrer vos commandes",
      description: "Gérez les ventes et assurez une livraison rapide à vos clients."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <header className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            COMMENT ÇA MARCHE
          </span>
          <h1 className="text-gray-900 text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto leading-tight mb-6">
            Premiers Pas : Comment Utiliser La Plateforme Et Lancer Votre Projet
          </h1>
        </header>

        {/* Étapes du processus */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              {/* Cercle avec numéro et icône */}
              <div className="relative mb-6">
                <div className="w-28 h-28 bg-blue-50 rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <h3 className="text-gray-900 text-xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>

              {/* Flèche connecteur */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-0 right-0" style={{ left: `${23 + index * 25}%` }}>
                  <svg width="100" height="20" viewBox="0 0 100 20">
                    <path d="M0,10 C30,10 70,10 100,10 M90,5 L100,10 L90,15" stroke="blue" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EcommerceProcess;