import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Zay Beauty",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXgD3YkfyFNytqZvUOCYM6QePHegLR7aoRw&s",
    rating: 5,
    text: "Système saraha très facile et efficace, oli 3ajbni ktar howa l ramassage gratuit",
    category: "beauté",
  },
  {
    id: 2,
    name: "Arwa Fashion",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8Q34A80Z3A8UVjqM61CK913kQhkzBZWAqw&s",
    rating: 4,
    text:"كان عندي مشكل مع شركة التوصيل ولكن الحمد لله معاكم ومع سيرفيس ديالكم ما عمري تنجحكم",
    category: "mode",
  },
  {
    id: 3,
    name: "Modamix Trends",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwNImYeAcWR8qFXMqbGHQwoa4e5EsGl2p1w&s",
    rating: 5,
    text:"Partenaire ideal b ma3ana l kalima service mzian saraha support 3andhom nady chapeau.",
    category: "mode",
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-300 to-blue-300 px-8 py-6 text-lg text-white hover:shadow-lg transition-all duration-200 hover:scale-105">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-white">
              Ce que <span className="text-delivery-primary animate-pulse-light">nos clients</span> disent
            </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Découvrez les expériences de nos clients satisfaits avec notre service de livraison
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${
                        index < testimonial.rating
                          ? "fill-yellow-400 stroke-yellow-400"
                          : "stroke-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-delivery-text">{testimonial.name}</p>
                    <p className="text-sm text-gray-500"> {testimonial.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;