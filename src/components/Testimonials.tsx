import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Marie K.",
    role: "Étudiante en Médecine",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    content: "Cette plateforme a complètement transformé ma façon d'étudier. Le mode hors ligne est particulièrement utile quand la connexion est instable."
  },
  {
    name: "Jean P.",
    role: "Étudiant en Droit",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content: "Les groupes d'étude m'ont permis de rencontrer d'autres étudiants passionnés et d'améliorer considérablement mes résultats."
  },
  {
    name: "Sarah M.",
    role: "Étudiante en Économie",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    content: "Le système de points m'encourage à contribuer régulièrement. C'est gratifiant de voir que mes fiches aident d'autres étudiants."
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ce que disent nos étudiants
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Découvrez comment StudyCollab aide les étudiants à réussir
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}