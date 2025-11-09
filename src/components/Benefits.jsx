import React from 'react';
import { ShieldCheck, ThumbsUp, TimerReset, Wallet } from 'lucide-react';

const benefits = [
  {
    title: 'Надежно',
    text: 'Используем сертифицированные полимеры и лампы от ведущих брендов.',
    icon: ShieldCheck,
  },
  {
    title: 'Выгодно',
    text: 'Ремонт дешевле замены стекла в 3–6 раз, без потери прочности.',
    icon: Wallet,
  },
  {
    title: 'Быстро',
    text: 'Большинство работ — 30–60 минут. Можно с записью на удобное время.',
    icon: TimerReset,
  },
  {
    title: 'Честно',
    text: 'Покажем результат до/после и дадим рекомендации по эксплуатации.',
    icon: ThumbsUp,
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Почему мы</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <Icon className="h-6 w-6 text-cyan-600" />
              <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
