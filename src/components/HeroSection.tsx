import React from 'react';
import { Button } from '@/components/ui/button';
import { Truck, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <>
      <div className="h-16 md:h-20"></div>
      
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Fond vidéo avec overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gray-900">
            <iframe
              className="absolute inset-0 w-full h-full object-cover scale-110 origin-center"
              src="https://www.youtube.com/embed/YluhsPMQSVE?autoplay=1&mute=1&loop=1&playlist=YluhsPMQSVE&controls=0&showinfo=0&start=6"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="BMD Delivery Video"
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/40 to-blue-900/70"></div>
        </div>
        
        {/* Contenu avec animations */}
        <div className="container mx-auto relative z-10 px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 z-10"
            >
              {/* Titre principal */}
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-blue-800/80 px-8 py-6 rounded-xl backdrop-blur-sm max-w-2xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Livraison <span className="text-amber-400">Express</span> au Maroc
                </h1>
              </motion.div>

           
              {/* Texte avec opacité réduite */}
              <p className="text-lg text-gray-100 max-w-lg mt-6 bg-blue-900/50 px-4 py-3 rounded-lg">
                BMD est une société située au cœur de la capitale économique du royaume
                de maroc, notre société dispose de plusieurs compétences dédiée
                à la satisfaction de nos clients
              </p>
              {/* Boutons CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-6"
              >
                <Button className="bg-amber-500 hover:bg-amber-600 px-8 py-6 text-lg font-semibold text-white shadow-lg hover:shadow-amber-500/30 transition-all">
                  Livrer avec BMD
                </Button>
                <Button 
                  variant="outline" 
                  className="px-8 py-6 text-lg border-2 border-white text-black hover:bg-white/10 hover:text-white"
                >
                  Devenir Client
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-6 border-2 border-white rounded-full"></div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;