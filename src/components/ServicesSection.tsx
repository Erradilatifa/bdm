import React from 'react';
import { Truck, Package, BarChart2, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, color, bgColor, id }) => {
  return (
    <div id={id} className="flex items-start p-4 rounded-lg mb-4 hover:shadow-md transition-all duration-300 bg-white">
      <div className="flex-shrink-0 mr-4">
        <div className="p-3 rounded-full" style={{ backgroundColor: bgColor }}>
          <Icon size={22} style={{ color: color }} />
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold mb-1 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: "Ramassage",
      description: "BMD assure le ramassage de vos colis, un de nos agents va se déplacer chez vous pour ramasser vos colis.",
      color: "#e63946",
      bgColor: "#ffcdd2",
      id: "service-ramassage"
    },
    {
      icon: Truck,
      title: "Livraison",
      description: "BMD assure la livraison de vos colis dans les plus brefs délais, 24h pour la plupart des villes, et 48h pour le reste.",
      color: "#1d3557",
      bgColor: "#c8e0f4",
      id: "service-livraison"
    },
    {
      icon: BarChart2,
      title: "Suivi",
      description: "BMD assure le suivi de vos colis avec vos clients, et la mise à jour des états des colis dans moins de 48h.",
      color: "#2a9d8f",
      bgColor: "#c8ede9",
      id: "service-suivi"
    },
    {
      icon: CreditCard,
      title: "Retour du fond",
      description: "BMD garantit le paiement de la totalité de vos colis livrés deux fois par semaine en toute sécurité et rapidité.",
      color: "#f77f00",
      bgColor: "#ffebcc",
      id: "service-retour"
    }
  ];
  
  return (
    <div id="services" className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
          Pourquoi BMD est le meilleur partenaire pour vos livraisons e-commerce ?
        </h2>
       
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Colonne des services */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
         
          {/* Colonne de l'image */}
          <div id="dashboard-preview" className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src="https://cathedis.ma/wp-content/uploads/2022/03/DASHBOARD-RDF.png"
              alt="Dashboard de suivi des livraisons"
              className="w-full rounded-lg"
            />
          </div>
        </div>
       
        <div id="contact-cta" className="mt-12 text-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-6 px-20 rounded-full shadow-lg transition-all duration-300 inline-block"
          >
            Contactez-nous dès maintenant
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;