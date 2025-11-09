import React from 'react';
import { Sparkles, ShieldCheck, Clock, BadgeCheck } from 'lucide-react';

const items = [
  {
    title: 'Ремонт сколов',
    desc: 'Устраняем звёздочки и круглые сколы, предотвращая их рост.',
    icon: Sparkles,
  },
  {
    title: 'Ремонт трещин',
    desc: 'Останавливаем и маскируем трещины длиной до 50 см.',
    icon: ShieldCheck,
  },
  {
    title: 'Полировка стекла',
    desc: 'Убираем мелкие царапины, улучшаем обзор и прозрачность.',
    icon: BadgeCheck,
  },
  {
    title: 'Срочный ремонт',
    desc: 'Готово за 30–60 минут. Можно подождать на месте.',
    icon: Clock,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Услуги</h2>
        <p className="mt-2 text-slate-600">Выбирайте нужную услугу — мы подскажем оптимальное решение.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
              <Icon className="h-6 w-6 text-cyan-600" />
              <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
