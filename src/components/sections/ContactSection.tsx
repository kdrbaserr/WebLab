import React from 'react';
import { ContactForm } from '../forms/ContactForm';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            İletişim
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Projeleriniz, iş birliği teklifleriniz veya sadece merhaba demek için bana ulaşabilirsiniz.
          </p>
        </div>

        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
