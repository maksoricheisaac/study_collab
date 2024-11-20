import React from 'react';
import { Lightbulb, Target, Globe } from 'lucide-react';

export default function PlatformOverview() {
  return (
    <section className="py-16 bg-white" id="overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Une Plateforme Adaptée aux Besoins des Étudiants Africains
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Notre Vision</h3>
                  <p className="mt-2 text-gray-600">
                    Démocratiser l'accès à une éducation de qualité en Afrique Centrale en créant une communauté d'apprentissage collaborative et inclusive.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Notre Mission</h3>
                  <p className="mt-2 text-gray-600">
                    Fournir des outils et ressources adaptés au contexte local, permettant aux étudiants de réussir malgré les défis d'infrastructure.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Notre Impact</h3>
                  <p className="mt-2 text-gray-600">
                    Déjà plus de 5000 étudiants accompagnés dans leur réussite académique à travers le Congo et l'Afrique Centrale.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Étudiants collaborant"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg font-semibold">94% de réussite</p>
              <p className="text-sm opacity-90">pour nos étudiants actifs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}