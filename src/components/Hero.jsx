import React from 'react';
import { Phone, ShieldCheck, Wrench, Star, Car } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-cyan-100 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-blue-100 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 ring-1 ring-slate-200 text-slate-700 mb-4">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span className="text-sm">Гарантия на ремонт до 12 месяцев</span>
            </div>

            <h1 className="font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl text-slate-900">
              Ремонт трещин и сколов на автостеклах
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Быстро, аккуратно и с гарантией. Восстановим прозрачность и
              прочность вашего стекла за 30–60 минут. Работаем с легковыми и
              коммерческими авто.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="tel:+79990000000"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-3 text-white shadow-lg shadow-cyan-600/20 hover:bg-cyan-700 transition"
              >
                <Phone className="h-5 w-5" />
                Позвонить сейчас
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-cyan-700 ring-1 ring-cyan-200 hover:ring-cyan-300 shadow-sm"
              >
                Записаться онлайн
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-cyan-600" />
                Опыт 8+ лет
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500" />
                4.9 рейтинг
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Гарантия качества
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] w-full rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Car className="h-28 w-28 text-cyan-600" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur">
                <p className="text-sm text-slate-700">
                  Современные материалы и заводские технологии ремонта
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
