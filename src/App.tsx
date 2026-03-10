import { useState, useEffect } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import UIKit from './UIKit';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activePage, setActivePage] = useState('hakkimda');

  useEffect(() => {
    // Sayfa ilk yüklendiğinde dark mode aktifse HTML etiketine class'ı ekle
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[linear-gradient(180deg,#4A0001_0%,#AD0003_100%)] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">

      {/* Skip Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
        Ana içeriğe atla
      </a>

      {/* Header and Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-black/20 backdrop-blur-md border-b border-gray-200 dark:border-red-900/50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Kadir Başer
          </h1>
          <div className="flex items-center gap-6">
            <nav aria-label="Ana navigasyon">
              <ul className="flex flex-wrap gap-2">
                <li>
                  <button onClick={() => setActivePage('hakkimda')} className={`px-3 py-1 rounded-md transition-colors ${activePage === 'hakkimda' ? 'bg-blue-100 text-blue-800 dark:bg-gray-800 dark:text-gray-100 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800'}`}>
                    Hakkımda
                  </button>
                </li>
                <li>
                  <button onClick={() => setActivePage('projeler')} className={`px-3 py-1 rounded-md transition-colors ${activePage === 'projeler' ? 'bg-blue-100 text-blue-800 dark:bg-gray-800 dark:text-gray-100 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800'}`}>
                    Projeler
                  </button>
                </li>
                <li>
                  <button onClick={() => setActivePage('iletisim')} className={`px-3 py-1 rounded-md transition-colors ${activePage === 'iletisim' ? 'bg-blue-100 text-blue-800 dark:bg-gray-800 dark:text-gray-100 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800'}`}>
                    İletişim
                  </button>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              {/* UI Kit Toggle Button */}
              <button
                onClick={() => setActivePage(activePage === 'uikit' ? 'hakkimda' : 'uikit')}
                className="text-sm font-medium px-3 py-1.5 rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                {activePage === 'uikit' ? 'Portföye Dön' : 'UI Kit Görüntüle'}
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm hover:scale-110 transition-transform"
                aria-label="Tema değiştir"
              >
                {isDarkMode ? <span>&#9728;</span> : <span>&#9790;</span>}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" className="flex-grow">
        {activePage === 'uikit' && <UIKit />}

        {activePage === 'hakkimda' && (
          <section id="hakkimda" className="py-8 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6">
              <figure className="shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Kadir Başer vesikalık fotoğrafı"
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
              </figure>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center md:text-left">
                  Hakkımda
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                  <strong>Yazılım Mühendisliği 3. sınıf öğrencisiyim.</strong> Kariyerimi özellikle <strong>savunma sanayii</strong> alanında uzmanlaşarak şekillendirmek istiyorum. Şu an akademik çalışmalarımın yanı sıra veri analizi ve gömülü sistemler üzerine odaklanıyorum.
                </p>
                <ul className="flex flex-wrap gap-2">
                  <li className="bg-blue-800 text-white px-2.5 py-1 rounded-full text-xs">C++, C#, Java, Python</li>
                  <li className="bg-blue-800 text-white px-2.5 py-1 rounded-full text-xs">React, JavaScript, HTML/CSS</li>
                  <li className="bg-blue-800 text-white px-2.5 py-1 rounded-full text-xs">Gömülü Sistemler & Veri Analizi</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {activePage === 'projeler' && (
          <section id="projeler" className="py-8 px-4 bg-gray-50 dark:bg-black/20">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
                Projelerim
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                  variant="elevated"
                  title="Uyku Evreleri Sınıflandırması"
                  image="https://via.placeholder.com/400x200"
                  imageAlt="EEG Analizi Görseli"
                >
                  <p>Farelerden alınan EEG verilerini analiz ederek uyku evrelerini sınıflandıran bir model üzerinde çalışıyorum.</p>
                </Card>

                <Card
                  variant="elevated"
                  title="EVSE Güvenlik Analizi"
                  image="https://via.placeholder.com/400x200"
                  imageAlt="Şarj İstasyonu Güvenlik Projesi"
                >
                  <p>Elektrikli araç şarj istasyonlarının güvenliği ve termal sensör yanıltma (spoofing) üzerine araştırmalar ve raporlamalar yapıyorum.</p>
                </Card>

                <Card
                  variant="elevated"
                  title="Kişisel Portföy"
                  image="https://via.placeholder.com/400x200"
                  imageAlt="Portföy Sitesi"
                  footer={<Button size="sm" variant="ghost">Detayları Gör</Button>}
                >
                  <p>Modern Tailwind CSS v4 ve React bileşenleri ile geliştirilmiş, UI Kit uyumlu kişisel portföy web projesi.</p>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activePage === 'iletisim' && (
          <section id="iletisim" className="py-8 px-4">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
                İletişim
              </h2>
              <form className="space-y-4">
                <Input id="name" label="Ad Soyad" required />
                <Input id="email" label="E-posta" type="email" required />
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                  ></textarea>
                </div>
                <div className="flex justify-center mt-4">
                  <Button variant="primary" size="lg" type="submit">
                    Gönder
                  </Button>
                </div>
              </form>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-black/20 border-t border-gray-200 dark:border-red-900/50 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2026 Kadir Başer. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;