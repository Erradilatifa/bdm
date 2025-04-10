import React, { useEffect, useRef } from 'react';
import { Truck, Package, BarChart2, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ icon: Icon, title, description, color, id, imageSrc, index }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { 
        y: 50,
        opacity: 0 
      },
      { 
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [index]);

  return (
    <div 
      id={id} 
      ref={cardRef} 
      className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image section - uniform height */}
      <div className="h-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/40 z-10"></div>
        <img
          src={imageSrc}
          alt={`${title} service`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Content section */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center mb-3">
          <div className="p-2 rounded-full mr-3" style={{ backgroundColor: `${color}20` }}>
            <Icon size={20} color={color} />
          </div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  const services = [
    {
      icon: Package,
      title: "Ramassage",
      description: "BMD assure le ramassage de vos colis, un de nos agents va se déplacer chez vous pour ramasser vos colis.",
      color: "#e63946",
      id: "service-ramassage",
      imageSrc: "images/4.png"
    },
    {
      icon: Truck,
      title: "Livraison",
      description: "BMD assure la livraison de vos colis dans les plus brefs délais, 24h pour la plupart des villes, et 48h pour le reste.",
      color: "#1d3557",
      id: "service-livraison",
      imageSrc: "images/téléchargement (5).png"
    },
    {
      icon: BarChart2,
      title: "Suivi",
      description: "BMD assure le suivi de vos colis avec vos clients, et la mise à jour des états des colis dans moins de 48h.",
      color: "#2a9d8f",
      id: "service-suivi",
      imageSrc: "https://img.freepik.com/free-photo/close-up-delivery-man-with-tablet_23-2149035867.jpg?uid=R134444413&ga=GA1.1.1809202442.1705419947&semt=ais_hybrid&w=740"  // Placeholder image instead of external URL
    },
    {
      icon: CreditCard,
      title: "Retour du fond",
      description: "BMD garantit le paiement de la totalité de vos colis livrés deux fois par semaine en toute sécurité et rapidité.",
      color: "#f77f00",
      id: "service-retour",
      imageSrc: "images/3.png"
    }
  ];
  
  useEffect(() => {
    // Animate section heading and subtitle
    gsap.fromTo(
      titleRef.current,
      { y: -30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    gsap.fromTo(
      subtitleRef.current,
      { y: -20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    // CTA button animation
    gsap.fromTo(
      ctaRef.current,
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.6,
        delay: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div 
      id="services" 
      ref={sectionRef}
      className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Découvrez tous les services de  <span className="text-blue-600">BMD</span>
          </h2>
          <p ref={subtitleRef} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Le meilleur partenaire pour vos livraisons e-commerce
          </p>
        </div>
        
        {/* Grid layout instead of stacked */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
        
        <div id="contact-cta" className="mt-16 text-center">
          <Link
            ref={ctaRef}
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full shadow-lg transition-all duration-300 inline-block hover:shadow-xl hover:scale-105"
          >
            Contactez-nous dès maintenant
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;