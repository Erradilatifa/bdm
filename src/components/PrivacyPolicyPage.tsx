import React, { useEffect, useRef } from 'react';
import { Shield, Copyright, Lock, FileText, Info, Users, AlertTriangle, BookOpen } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';


const PrivacyPolicySection = () => {
  // Références pour les animations GSAP
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);
  const cardRef = useRef(null);

  useEffect(() => {
    // Importation de GSAP dynamiquement
    const loadGSAP = async () => {
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.default;
      
      gsap.registerPlugin(ScrollTrigger);
      
      // Animation d'entrée du header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      
      // Animation du conteneur principal
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          delay: 0.3, 
          ease: "power3.out" 
        }
      );
      
      // Animation des sections en séquence lors du scroll
      sectionsRef.current.forEach((section, index) => {
        gsap.fromTo(
          section,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    };
    
    loadGSAP();
  }, []);

  // Ajout des sections à la référence
  const addToSectionsRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };
  

  return (
    <>
      <Navbar />
      
      <section className="privacy-policy-section bg-gradient-to-br from-indigo-50 to-blue-50 pt-16" id="PrivacyPolicyPage">
       {/* Header */}
<header ref={headerRef} className="relative overflow-hidden text-white py-16 mt-8">
  {/* Image de fond avec overlay plus opaque */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://img.freepik.com/free-photo/key-lock-password-security-privacy-protection-graphic_53876-122570.jpg?uid=R134444413&ga=GA1.1.1809202442.1705419947&semt=ais_hybrid&w=740" 
      alt="Background sécurité"
      className="w-full h-full object-cover opacity-180" 
    />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-300/60 to-indigo-300/70"></div> {/* Overlay plus opaque */}
  </div>
  
  <div className="container mx-auto px-6 text-center relative z-10">
    <div className="flex justify-center mb-6">
      <div className="bg-white/30 backdrop-blur-sm rounded-full p-4 shadow-lg animate-pulse border-2 border-white/30">
        <Shield className="h-12 w-12 text-white" />
      </div>
    </div>
    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Politique de Confidentialité</h1>
    <p className="text-xl text-blue-50 max-w-3xl mx-auto drop-shadow-md"> {/* Texte plus contrasté */}
      BLACK MAN DELIVERY SARL | Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
    </p>
  </div>
</header>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16 relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-600/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-indigo-600/10 rounded-full blur-3xl -z-10"></div>
          
          <div ref={cardRef} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
            {/* Sections */}
            <div className="divide-y divide-blue-100">
              {/* Section 1 - Identification */}
              <section ref={addToSectionsRef} className="p-8 md:p-12 hover:bg-blue-50/50 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center justify-center bg-indigo-600 text-white p-4 rounded-xl shadow-md md:mt-0">
                    <Info className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Identification et publication</h2>
                    <p className="text-gray-600 mb-4">
                      Le présent site est publié par :
                    </p>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-sm">
                      <p className="font-bold text-gray-800 text-xl mb-2">BLACK MAN DELIVERY SARL</p>
                      <p className="text-gray-600 flex items-center">
                        <span className="inline-block w-3 h-3 bg-indigo-600 rounded-full mr-2"></span>
                        Siège social: Hay Tissire Chohada
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 - Propriété intellectuelle */}
              <section ref={addToSectionsRef} className="p-8 md:p-12 hover:bg-blue-50/50 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center justify-center bg-indigo-600 text-white p-4 rounded-xl shadow-md md:mt-0">
                    <Copyright className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Propriété intellectuelle</h2>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        L'ensemble des éléments figurant sur le site de http://www.blackmandelivery.ma est protégé par la législation Marocaine sur le droit d'auteur et le droit de protection de la propriété industrielle.
                      </p>
                      <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-indigo-600">
                        <p className="text-gray-700">
                          L'ensemble des éléments de ce site, les marques, logos, dessins, graphismes, chartes graphiques, icônes, textes, applications, scripts, fonctionnalité, ainsi que leur sélection ou combinaison apparaissant à l'adresse http://www.blackmandelivery.ma ou sur les sous-domaines associés et les autres domaines du site internet, sont la propriété exclusive de la BLACK MAN DELIVERY SARL.
                        </p>
                      </div>
                      <p className="text-gray-600">
                        Les droits d'utilisation de ce site et des sous-domaines associés et les autres domaines de ce site internet ne sont concédés que sous forme numérique aux fins de visualisation des pages consultées, à titre personnel, non cessible, non transmissible et non exclusif.
                      </p>
                      <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 flex items-start">
                        <AlertTriangle className="h-6 w-6 text-indigo-600 mr-4 flex-shrink-0" />
                        <p className="text-gray-700">
                          En cas d'utilisation illégale ou non autorisée de ce site, BLACK MAN DELIVERY SARL se réserve le droit de prendre toute mesure adéquate qu'elle estime nécessaire et, le cas échéant, d'intenter toute action appropriée en justice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 - Protection des données */}
              <section ref={addToSectionsRef} className="p-8 md:p-12 hover:bg-blue-50/50 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center justify-center bg-indigo-600 text-white p-4 rounded-xl shadow-md md:mt-0">
                    <Lock className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Protection des données à caractère personnel</h2>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        BLACK MAN DELIVERY SARL s'engage à protéger les données à caractère personnel des utilisateurs de ce site et de ses sous-domaines dans le respect de la réglementation en vigueur et en particulier la loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-sm">
                          <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                            <Users className="h-5 w-5 text-indigo-600 mr-2" />
                            Utilisation des données
                          </h3>
                          <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>Fourniture et gestion des services</li>
                            <li>Saisie et enregistrement des réclamations</li>
                            <li>Enregistrement des demandes d'information</li>
                            <li>Enregistrement des suggestions clients</li>
                            <li>Statistiques de fréquentation anonymisées</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-sm">
                          <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                            <BookOpen className="h-5 w-5 text-indigo-600 mr-2" />
                            Engagements
                          </h3>
                          <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>Protection des données personnelles</li>
                            <li>Aucun transfert hors du Maroc</li>
                            <li>Accès limité et sécurisé</li>
                            <li>Mesures de sécurité techniques adaptées</li>
                            <li>Conformité à la loi n° 09-08</li>
                          </ul>
                        </div>
                      </div>
                      
                      <p className="text-gray-600">
                        Ce traitement est nécessaire à la réalisation de l'intérêt légitime poursuivi par BLACK MAN DELIVERY SARL et ne porte pas atteinte à l'intérêt et aux droits et libertés fondamentaux des personnes concernées.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 - Droit applicable */}
              <section ref={addToSectionsRef} className="p-8 md:p-12 hover:bg-blue-50/50 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center justify-center bg-indigo-600 text-white p-4 rounded-xl shadow-md md:mt-0">
                    <FileText className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Droit applicable</h2>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-sm">
                      <p className="text-gray-700 text-lg">
                        Le présent site et ses mentions légales sont soumis au <span className="font-semibold text-indigo-700">droit Marocain</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default PrivacyPolicySection;