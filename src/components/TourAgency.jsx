import React from 'react';

export default function TourAgency() {
  const tours = [
    {
      icon: 'scuba_diving',
      title: 'Rio da Prata & Sucuri',
      desc: 'Flutuações nas águas mais cristalinas do mundo',
    },
    {
      icon: 'landscape',
      title: 'Gruta do Lago Azul',
      desc: 'Monumento natural e cartão-postal de Bonito MS',
    },
    {
      icon: 'waterfall_chart',
      title: 'Cachoeiras Boca da Onça',
      desc: 'Trilhas, quedas d’água e o maior rapel do Brasil',
    },
    {
      icon: 'kayaking',
      title: 'Bote & Flutuação no Formoso',
      desc: 'Aventura leve e diversão para todas as idades',
    },
  ];

  return (
    <section className="w-full bg-[#f4ece3] border-y border-linen-border py-20 lg:py-24" id="passeios">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 text-secondary-dark mb-3">
              <span className="material-symbols-outlined text-xl text-primary">travel_explore</span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">
                Agência de Turismo no Local • Bonito MS
              </span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-espresso font-light leading-tight mb-4">
              Agência Própria: Roteiros Personalizados &amp; Vouchers Oficiais
            </h2>

            <p className="font-body text-base text-on-surface-variant font-light leading-relaxed mb-6">
              Em Bonito, todos os passeios e flutuações possuem número de vagas estritamente limitado e preços tabelados por lei, exigindo voucher credenciado. No Rancho Jarinu, você tem a comodidade exclusiva de montar seu roteiro e emitir todos os ingressos diretamente na recepção com assessoria especializada e zero complicação.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {tours.map((tour, index) => (
                <div
                  key={index}
                  className="bg-surface p-3.5 rounded-xl border border-linen-border flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-lg">{tour.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-espresso">{tour.title}</h4>
                    <p className="text-[0.6875rem] text-on-surface-variant font-light">{tour.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary hover:bg-[#823e00] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md hover:-translate-y-0.5"
                href="https://wa.me/5567996452336?text=Ola!%20Gostaria%20de%20montar%20meu%20roteiro%20de%20passeios%20com%20a%20Agencia%20do%20Rancho%20Jarinu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                Montar Meu Roteiro com a Agência
              </a>
              <div className="inline-flex items-center gap-2 text-xs text-on-surface-variant font-medium">
                <span className="material-symbols-outlined text-sm text-sage">verified</span>
                Preços oficiais tabelados sem taxa extra
              </div>
            </div>
          </div>

          {/* Right Column: Card Highlight */}
          <div className="lg:col-span-5">
            <div className="bg-surface rounded-2xl overflow-hidden border border-linen-border shadow-xl p-4 flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-surface-container flex items-center justify-center group">
                <img
                  alt="Flutuação em águas cristalinas dos rios de Bonito - MS"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 filter brightness-[0.95]"
                  src="/images/flutuacao.jpg"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-espresso/85 backdrop-blur-md text-[0.6875rem] uppercase tracking-wider text-warm-cream font-semibold">
                  Vouchers Oficiais
                </span>
              </div>
              <div className="p-3 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-secondary-dark text-xs font-semibold uppercase tracking-wider mb-2">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span>Assessoria Completa na Pousada</span>
                </div>
                <h3 className="font-headline text-2xl text-espresso font-normal mb-1.5">
                  Flutuações &amp; Atrativos Imperdíveis
                </h3>
                <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                  Garantimos a melhor sequência de dias e horários para você economizar deslocamento e aproveitar cada momento em Bonito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
