import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Hakkımda
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 rounded-full mx-auto md:mx-0"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-blue-900/10">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Profil Fotoğrafı"
                className="w-full h-auto object-cover aspect-square hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Yenilikçi projelere imza atmayı seven, detaylara önem veren ve takım çalışmasına inanan bir geliştiriciyim. React ekosistemi ve Node.js mimarisiyle modern, hızlı ve responsive web uygulamaları inşa ediyorum.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Her projede kodu olabildiğince modüler ve okunabilir yazmaya, modern UI trendlerine uygun tasarımlar ortaya koymaya özen gösteriyorum. TailwindCSS, TypeScript ve Vite benim için sıradan araçlar değil, sanat fırçalarımdır.
            </p>
            <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-blue-600 font-bold">5+</span>
                <span className="text-gray-500">Yıllık Tecrübe</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-600 font-bold">20+</span>
                <span className="text-gray-500">Proje</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
