import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-gray-100">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6 animate-fade-in-up">
          <span className="block">Merhaba, Ben Oğuzhan</span>
          <span className="block text-blue-600 mt-2">React & TypeScript Geliştiricisi</span>
        </h1>
        <p className="mt-4 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
          Modern web teknolojileri ile kullanıcı odaklı, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum. Şık ve dinamik kullanıcı deneyimleri oluşturmak benim tutkum.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
          <div className="rounded-md shadow">
            <a
              href="#projects"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg transition-colors shadow-md hover:shadow-lg"
            >
              Projelerimi Gör
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="#contact"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg transition-colors"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
