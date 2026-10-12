import React from 'react';

export default function LocationSection() {
  const cards = [
    {
      icon: 'directions_walk',
      title: '2 quadras da Praça Central',
      desc: 'Praça da Liberdade a 250m: faça passeios noturnos, jantares e compras a pé.',
    },
    {
      icon: 'flight',
      title: '15 km do Aeroporto de Bonito',
      desc: 'Apenas 15 min de carro do aeroporto regional (BYD) até o conforto do rancho.',
    },
    {
      icon: 'airport_shuttle',
      title: 'Transfer de Campo Grande (CGR)',
      desc: '280 km com vans e traslados diários que desembarcam direto na pousada.',
    },
    {
      icon: 'explore',
      title: 'Acesso Fácil aos Atrativos',
      desc: 'Saída rápida para as principais rodovias de rios, balneários e grutas.',
    },
  ];

  return (
    <section className="w-full bg-[#f6ede4] border-t border-linen-border py-20 lg:py-28" id="localizacao">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-xl text-primary">near_me</span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">
                Localização Estratégica
              </span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-espresso font-light leading-tight mb-4">
              Como Chegar à Pousada Rancho Jarinu
            </h2>

            <p className="font-body text-base text-on-surface-variant font-light leading-relaxed mb-8">
              Situada na <strong>Rua 24 de Fevereiro, 1895</strong>, a pousada está no centro de Bonito – MS, a apenas <strong>250 metros da famosa Praça da Liberdade (Praça dos Peixes)</strong>. Você faz tudo a pé: restaurantes, farmácias, agências e supermercados.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="bg-surface p-4 rounded-xl border border-linen-border flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0 text-secondary-dark">
                    <span className="material-symbols-outlined text-lg">{card.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-semibold text-espresso mb-0.5">
                      {card.title}
                    </h4>
                    <p className="text-[0.6875rem] text-on-surface-variant leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-[#823e00] text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all shadow hover:-translate-y-0.5"
                href="https://maps.google.com/?q=Pousada+Rancho+Jarinu+Bonito+MS"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">map</span>
                Abrir Rota no Google Maps
              </a>
              <a
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-transparent hover:bg-white/40 text-espresso font-sans text-xs uppercase tracking-wider font-semibold transition-all border border-linen-border hover:-translate-y-0.5"
                href="https://wa.me/5567996452336?text=Ola!%20Gostaria%20de%20tirar%20duvidas%20sobre%20transfer%20e%20localizacao%20da%20pousada"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-sm text-sage">chat</span>
                Dúvidas de Transfer no WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Map Embed */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-linen-border shadow-xl bg-surface p-6">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-linen-border">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                  <div>
                    <h3 className="font-sans text-xs font-bold text-espresso uppercase tracking-wider">
                      Pousada Rancho Jarinu
                    </h3>
                    <p className="text-[0.6875rem] text-on-surface-variant">
                      Rua 24 de Fevereiro, 1895 • Bonito - MS
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-secondary-container text-secondary-dark text-[0.625rem] font-bold uppercase tracking-wider">
                  Estacionamento Próprio
                </span>
              </div>

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-linen-border bg-espresso mb-4">
                <iframe
                  title="Mapa Pousada Rancho Jarinu"
                  allowFullScreen=""
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Pousada%20Rancho%20Jarinu%2C%20Rua%2024%20de%20Fevereiro%2C%201895%2C%20Bonito%20-%20MS&t=&z=16&ie=UTF8&iwloc=&output=embed"
                />
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                <div className="p-2.5 rounded-lg bg-surface-container border border-linen-border">
                  <span className="font-bold text-espresso block text-xs">250m</span>
                  <span className="text-[0.625rem] text-on-surface-variant">Praça Central</span>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-container border border-linen-border">
                  <span className="font-bold text-espresso block text-xs">100m</span>
                  <span className="text-[0.625rem] text-on-surface-variant">Restaurantes</span>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-container border border-linen-border">
                  <span className="font-bold text-espresso block text-xs">0 min</span>
                  <span className="text-[0.625rem] text-on-surface-variant">Agência no Local</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
