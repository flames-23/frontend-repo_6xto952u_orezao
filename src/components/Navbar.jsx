import React from 'react';
import { Wrench, Phone, MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-cyan-600 text-white flex items-center justify-center">
            <Wrench className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-900">GlassFix</div>
            <div className="text-xs text-slate-500">Ремонт автостекол</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#services" className="hover:text-cyan-700">Услуги</a>
          <a href="#benefits" className="hover:text-cyan-700">Преимущества</a>
          <a href="#contact" className="hover:text-cyan-700">Контакты</a>
        </nav>

        <a href="tel:+79990000000" className="inline-flex items-center gap-2 rounded-md bg-cyan-600 px-4 py-2 text-white shadow hover:bg-cyan-700">
          <Phone className="h-4 w-4" />
          +7 (999) 000-00-00
        </a>
      </div>
      <div className="border-t border-slate-200/60 bg-white/60">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center gap-2 text-xs text-slate-600">
          <MapPin className="h-3.5 w-3.5" />
          <span>Мы рядом: центр города, удобный подъезд и парковка</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
