import React, { useState } from 'react';
import { Send, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Записаться на ремонт</h2>
            <p className="mt-2 text-slate-600">Оставьте контакты — мы перезвоним и уточним детали.</p>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <textarea
                name="message"
                placeholder="Кратко опишите проблему (скол/трещина, где находится)"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-md border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-600 px-5 py-3 text-white shadow hover:bg-cyan-700"
              >
                <Send className="h-4 w-4" /> Отправить заявку
              </button>
              {sent && (
                <p className="text-sm text-emerald-600">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
              )}
            </form>
          </div>

          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
            <h3 className="font-semibold text-slate-900">Контакты</h3>
            <div className="mt-4 space-y-3 text-slate-700">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-600" /> +7 (999) 000-00-00</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-600" /> г. Центр, ул. Примерная, 10</p>
            </div>
            <div className="mt-6">
              <div className="aspect-video w-full rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                Карта
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
