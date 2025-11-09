import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Contact from './components/Contact';

function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} GlassFix — ремонт автостекол</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-cyan-700">Услуги</a>
            <a href="#benefits" className="hover:text-cyan-700">Преимущества</a>
            <a href="#contact" className="hover:text-cyan-700">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
