import React from 'react';
import { Users, BookOpen, ChevronRight } from 'lucide-react';

const groups = [
  {
    name: "Préparation Baccalauréat",
    members: 328,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    category: "Général"
  },
  {
    name: "Mathématiques Supérieures",
    members: 195,
    image: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&w=800&q=80",
    category: "Sciences"
  },
  {
    name: "Économie & Gestion",
    members: 256,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    category: "Business"
  }
];

export default function StudyGroups() {
  return (
    <div className="py-16 bg-gray-50" id="groups">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Groupes de Révision Populaires
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Rejoignez des groupes actifs et progressez ensemble
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={group.image}
                  alt={group.name}
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {group.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{group.name}</h3>
                <div className="mt-2 flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{group.members} membres actifs</span>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                    <span>Rejoindre</span>
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <BookOpen className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
            Voir tous les groupes
            <ChevronRight className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}