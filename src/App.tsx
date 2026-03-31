import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { ProjectList } from './components/sections/ProjectList';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      <Header />
      
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <ProjectList />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;