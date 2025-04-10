import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Shield, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function StatsSection() {
  const stats = [
    { id: 1, endValue: 150, prefix: "+", label: "Produits Gagnants", icon: <Award className="text-amber-500" /> },
    { id: 2, endValue: 5, prefix: "+", label: "Années D'expérience", icon: <Clock className="text-blue-600" /> },
    { id: 3, endValue: 65, prefix: "+", label: "Coils Sécurisé", icon: <Shield className="text-emerald-500" /> }
  ];
  
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const containerRef = useRef(null);
  const statRefs = useRef([]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const triggers = stats.map((stat, index) => {
      return ScrollTrigger.create({
        trigger: statRefs.current[index],
        start: "top 80%",
        onEnter: () => {
          gsap.to(animatedValues, {
            [index]: stat.endValue,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              setAnimatedValues(prev => {
                const newValues = [...prev];
                newValues[index] = Math.floor(animatedValues[index]);
                return newValues;
              });
            }
          });
          
          gsap.from(statRefs.current[index]?.querySelector(".stat-card"), {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
          });
        },
        once: true
      });
    });
    
    return () => {
      triggers.forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className="py-24 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 text-white relative overflow-hidden">
      {/* Nouvel arrière-plan avec motif de points */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`, 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      {/* Vagues d'arrière-plan */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="opacity-10">
          <path fill="#fff" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,176C672,160,768,160,864,170.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text">Statistiques Impressionnantes</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Des chiffres qui témoignent de notre expertise et de notre engagement envers l'excellence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={containerRef}>
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              ref={el => statRefs.current[index] = el}
              className="stat-card group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 p-8 hover:border-slate-500 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-800 group-hover:bg-slate-700 transition-colors duration-300 shadow-lg">
                    {React.cloneElement(stat.icon, { size: 32 })}
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-center space-x-1">
                      <span className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {animatedValues[index]}
                      </span>
                      <span className="text-3xl font-bold text-purple-400 mt-2">{stat.prefix}</span>
                    </div>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-4 rounded-full"></div>
                    <p className="text-slate-300 font-medium text-lg">{stat.label}</p>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsSection;