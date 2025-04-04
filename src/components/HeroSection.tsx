
import React from 'react';
import { Button } from '@/components/ui/button';
import { Truck, PackageOpen, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
              Livraison <span className="text-gradient">Rapide</span> et <span className="text-gradient">Fiable</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            BMD est une société située au cœur de la capitale économique du royaume
            de maroc, notre société dispose de plusieurs compétences dédiée
            à la satisfaction de nos clients
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button className="btn-gradient px-8 py-6 text-lg">
              DEVENIR CLIENT
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-delivery-primary text-delivery-primary hover:bg-delivery-primary/10">
                Nos Services
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-center p-3 bg-white rounded-lg shadow-animated">
                <h3 className="text-3xl font-bold text-delivery-primary">15m</h3>
                <p className="text-sm text-gray-500">Temps moyen</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-animated">
                <h3 className="text-3xl font-bold text-delivery-primary">99%</h3>
                <p className="text-sm text-gray-500">Satisfaction</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-animated">
                <h3 className="text-3xl font-bold text-delivery-primary">24/7</h3>
                <p className="text-sm text-gray-500">Disponibilité</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center w-full p-8">
      <div className="relative">
        <div className="bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full h-80 w-80 animate-spin-slow flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-white shadow-lg">
              <img
                src="https://img.freepik.com/free-photo/delivery-trucks-road-out-smartphone-carry-goods-customer-home-with-location-pointer-bubble-chat-message-ecommerce-concept-blue-background-3d-illustration_56104-1811.jpg?uid=R134444413&ga=GA1.1.1809202442.1705419947&semt=ais_hybrid&w=740"
                alt="Livraison Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
      
      {/* Animated Truck */}
      <div className="absolute bottom-10 w-full">
        <Truck className="text-delivery-secondary h-16 w-16 animate-truck-move" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20">
        <PackageOpen className="text-delivery-primary h-12 w-12 animate-float" style={{ animationDelay: "1s" }}/>
      </div>
      <div className="absolute bottom-40 left-10">
        <Clock className="text-delivery-accent h-10 w-10 animate-float" style={{ animationDelay: "2s" }}/>
      </div>
    </section>
  );
};

export default HeroSection;
