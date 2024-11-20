import React from 'react';
import { BrainCircuit, BookOpen, Users } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
          alt="Students studying"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-slide-in">
            <div className="flex justify-center md:justify-start mb-6">
              <BrainCircuit className="h-16 w-16 text-blue-400 animate-float" />
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Apprends, Partage</span>
              <span className="block text-blue-400 animate-fade-in" style={{ animationDelay: '0.3s' }}>et Réussis</span>
            </h1>
            <p className="mt-3 text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl max-w-3xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
              La première plateforme de révision collaborative adaptée aux étudiants d'Afrique Centrale. 
              Accédez à des ressources de qualité, même hors ligne.
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-6 text-sm text-gray-100 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center hover-scale">
                <Users className="h-5 w-5 text-blue-400 mr-2" />
                <span>+5000 étudiants</span>
              </div>
              <div className="flex items-center hover-scale">
                <BookOpen className="h-5 w-5 text-blue-400 mr-2" />
                <span>+1000 ressources</span>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-0 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
}