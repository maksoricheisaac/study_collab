import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, reason });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6">Rejoignez-nous</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-2">
            Adresse email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="votre@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-100 mb-2">
            Pourquoi souhaitez-vous rejoindre ?
          </label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Parlez-nous de vos objectifs..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <span>Commencer Gratuitement</span>
          <Send className="ml-2 h-4 w-4" />
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-300 text-center">
        En vous inscrivant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
      </p>
    </div>
  );
}