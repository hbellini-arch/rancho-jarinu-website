import React, { useState } from 'react';

export default function Hero() {
  const [checkIn, setCheckIn] = useState('2025-07-10');
  const [checkOut, setCheckOut] = useState('2025-07-14');
  const [roomType, setRoomType] = useState('casal');

  const handleBookingSearch = (e) => {
    e.preventDefault();
    const roomLabels = {
      casal: 'Casal (2 pessoas)',
      triplo: 'Triplo / Família (3-4 pessoas)',
      sacada: 'Suíte Superior c/ Sacada',
    };
    const roomName = roomLabels[roomType] || roomType;
    const message = `Olá! Gostaria de consultar disponibilidade na Pousada Rancho Jarinu em Bonito MS.\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nAcomodação: ${roomName}`;
    const url = `https://wa.me/5567996452336?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-[92vh] w-full flex flex-col justify-end overflow-hidden pt-28 pb-16 lg:pb-24">
      {/* Background Authentic Image */}
      <img
        alt="Fachada Pousada Rancho Jarinu"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.88]"
        src="/images/hero-facade.jpg"
      />
      {/* Deep Naturalistic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1b1005] via-[#241607]/65 to-[#241607]/45" />

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12 flex flex-col">
        {/* Top Editorial Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 self-start mb-6">
          <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
          <span className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-warm-cream font-semibold">
            Bonito, Mato Grosso do Sul • 2 Quadras da Praça Central
          </span>
        </div>

        {/* Oversized Editorial Serif Headline */}
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08] max-w-4xl mb-6">
          Sua Hospedagem Aconchegante no Centro de Bonito, MS.
        </h1>

        {/* Editorial Subtitle */}
        <p className="font-body text-base sm:text-lg lg:text-xl text-warm-cream/90 font-light max-w-2xl leading-relaxed mb-10">
          O conforto rústico em madeira nobre e clima familiar que você merece. Aconchego, piscina com solarium, café regional pantaneiro e agência própria para seus passeios em rios e grutas cristalinas.
        </p>

        {/* Balanced CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a
            href="#acomodacoes"
            className="px-8 py-3.5 rounded-lg bg-[#8da28c] hover:bg-[#788f77] text-espresso-dark font-sans text-xs tracking-wider uppercase font-semibold transition-all shadow-lg hover:-translate-y-0.5"
          >
            Nossos Apartamentos
          </a>
          <a
            href="#filosofia"
            className="px-8 py-3.5 rounded-lg bg-transparent hover:bg-white/10 text-white font-sans text-xs tracking-wider uppercase font-semibold transition-all border border-white/40 backdrop-blur-sm hover:-translate-y-0.5"
          >
            Nossa Proposta &amp; História
          </a>
        </div>

        {/* Integrated Clean Search / Booking Strip */}
        <div className="w-full max-w-5xl bg-[#241607]/80 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 shadow-2xl">
          <form
            onSubmit={handleBookingSearch}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end"
          >
            <div className="lg:col-span-3 flex flex-col gap-1.5">
              <label className="text-[0.6875rem] uppercase tracking-wider text-warm-cream/80 font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-sage">calendar_today</span> Check-in
              </label>
              <input
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-sage placeholder-white/40"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>

            <div className="lg:col-span-3 flex flex-col gap-1.5">
              <label className="text-[0.6875rem] uppercase tracking-wider text-warm-cream/80 font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-sage">calendar_today</span> Check-out
              </label>
              <input
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-sage placeholder-white/40"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>

            <div className="lg:col-span-3 flex flex-col gap-1.5">
              <label className="text-[0.6875rem] uppercase tracking-wider text-warm-cream/80 font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-sage">groups</span> Acomodação
              </label>
              <select
                className="w-full bg-espresso border border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-sage cursor-pointer"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
              >
                <option value="casal">Casal (2 pessoas)</option>
                <option value="triplo">Triplo / Família (3-4 pessoas)</option>
                <option value="sacada">Suíte Superior c/ Sacada</option>
              </select>
            </div>

            <div className="lg:col-span-3">
              <button
                type="submit"
                className="w-full py-2.5 px-6 rounded-lg bg-primary hover:bg-[#874105] text-white text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5"
              >
                <span>Ver Disponibilidade</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </form>

          <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-warm-cream/70 gap-2">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-sage">verified</span>
              Melhor tarifa garantida direto com a pousada • Apoio com passeios e transfer
            </span>
            <a
              className="text-sage hover:text-white underline transition-colors"
              href="https://wa.me/5567996452336"
              target="_blank"
              rel="noopener noreferrer"
            >
              Atendimento WhatsApp Direto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
