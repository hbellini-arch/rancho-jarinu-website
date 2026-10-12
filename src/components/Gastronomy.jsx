import React from 'react';

export default function Gastronomy() {
  const items = [
    {
      icon: 'cookie',
      title: 'Chipa & Quitutes Pantaneiros',
      desc: 'Receitas caseiras preparadas diariamente com sabor típico da nossa terra.',
    },
    {
      icon: 'nutrition',
      title: 'Variedade & Frutas Frescas',
      desc: 'Mesa farta com frutas da estação, pães frescos, bolos e frios selecionados.',
    },
    {
      icon: 'coffee',
      title: 'Café Passado & Sucos',
      desc: 'Bebidas quentes e sucos naturais revigorantes para começar o dia bem.',
    },
    {
      icon: 'schedule',
      title: 'Horário para os Passeios',
      desc: 'Servido bem cedinho para que você não perca o horário dos seus vouchers e passeios.',
    },
  ];

  return (
    <section className="w-full bg-[#f6ede4] border-y border-linen-border py-20 lg:py-28" id="sabores-ms">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text and Feature Cards */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2 text-secondary-dark mb-4">
              <span className="material-symbols-outlined text-xl text-primary">bakery_dining</span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">
                Gastronomia Regional &amp; Café da Manhã
              </span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-espresso font-light leading-tight mb-6">
              Sabores do Mato Grosso do Sul: Energia completa para explorar Bonito
            </h2>

            <p className="font-body text-base text-on-surface-variant font-light leading-relaxed mb-8">
              Aqui você começa o dia com um café da manhã reforçado e variado — frutas frescas, sucos naturais, bolos caseiros, pães e quitutes regionais como a autêntica chipa sul-mato-grossense e café passado na hora. Essencial para ter disposição nas trilhas, flutuações e águas correntes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-surface p-4 rounded-xl border border-linen-border flex flex-col gap-1.5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2.5 text-espresso">
                    <span className="material-symbols-outlined text-xl text-primary">{item.icon}</span>
                    <h4 className="font-sans text-xs font-bold uppercase tracking-wider">{item.title}</h4>
                  </div>
                  <p className="text-xs text-on-surface-variant font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-secondary-container text-secondary-dark self-start border border-linen-border text-xs font-semibold uppercase tracking-wider shadow-sm">
              <span className="material-symbols-outlined text-base">verified</span>
              <span>Incluso em todas as diárias • Das 6h30 às 9h30</span>
            </div>
          </div>

          {/* Photo Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            <div className="relative col-span-2 aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-linen-border group bg-surface-container">
              <img
                alt="Mesa farta de café da manhã regional na Pousada Rancho Jarinu"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/images/cafe-buffet.jpg"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-md bg-espresso/85 backdrop-blur-md text-[0.6875rem] uppercase tracking-wider text-warm-cream font-semibold">
                Buffet Pantaneiro
              </span>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-linen-border group bg-surface-container">
              <img
                alt="Detalhes de bolos, pães e quitutes do café da manhã"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/rancho-jarinu-website/images/cafe-buffet.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-[0.6875rem] text-white font-medium">Bolos &amp; Quitutes Caseiros</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-linen-border group bg-surface-container">
              <img
                alt="Salão aconchegante de café da manhã do rancho"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="/images/cafe-mesa.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-[0.6875rem] text-white font-medium">Salão Aconchegante</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
