import React from 'react';
import { BookOpen, Users, Trophy, Wifi, Download, Video, Brain, Globe } from 'lucide-react';

const features = [
  {
    icon: <Download className="h-6 w-6 text-blue-600" />,
    title: "Mode Hors Ligne",
    description: "Téléchargez vos ressources et continuez à apprendre même sans connexion internet"
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Groupes de Révision",
    description: "Rejoignez des groupes thématiques et collaborez avec d'autres étudiants"
  },
  {
    icon: <Brain className="h-6 w-6 text-blue-600" />,
    title: "Quiz Intelligents",
    description: "Des tests personnalisés qui s'adaptent à votre niveau et votre progression"
  },
  {
    icon: <Video className="h-6 w-6 text-blue-600" />,
    title: "Sessions Live",
    description: "Participez à des sessions de révision en direct avec des tuteurs qualifiés"
  },
  {
    icon: <Trophy className="h-6 w-6 text-blue-600" />,
    title: "Système de Points",
    description: "Gagnez des récompenses en contribuant et en aidant les autres"
  },
  {
    icon: <Globe className="h-6 w-6 text-blue-600" />,
    title: "Multilingue",
    description: "Interface disponible en français et en langues locales"
  }
];

export default function Features() {
  return (
    <div className="py-16 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-slide-in">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Une Plateforme Adaptée à Vos Besoins
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Des fonctionnalités pensées pour les étudiants d'Afrique Centrale
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 stagger-animation">
            {features.map((feature, index) => (
              <div key={index} className="relative group hover-lift">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="transform transition-transform group-hover:scale-110 duration-200">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}