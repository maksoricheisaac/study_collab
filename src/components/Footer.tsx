import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">StudyCollab</span>
            </div>
            <p className="mt-4 text-gray-600">
              La plateforme de révision collaborative pour les étudiants français.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Plateforme</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Fonctionnalités</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Groupes d'étude</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Ressources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Légal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Confidentialité</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">&copy; 2024 StudyCollab. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}