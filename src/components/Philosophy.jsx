import React from 'react';

export default function Philosophy() {
  const pillars = [
    {
      icon: 'pin_drop',
      title: 'Centro de Bonito',
      desc: '2 quadras da praça',
    },
    {
      icon: 'travel_explore',
      title: 'Agência Própria',
      desc: 'Vouchers oficiais',
    },
    {
      icon: 'bakery_dining',
      title: 'Café Regional',
      desc: 'Chipa & bolos caseiros',
    },
    {
      icon: 'park',
      title: 'Pátio Verde',
      desc: 'Jardim Externo & Churrasqueira',
    },
  ];

  return (
    <section className="w-full bg-[#f6ede4] border-y border-linen-border py-20 lg:py-28" id="filosofia">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative & Pillars */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 text-secondary-dark mb-4">
              <span className="material-symbols-outlined text-xl text-primary">eco</span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">
                Nossa Filosofia &amp; Hospitalidade
              </span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-espresso font-light leading-tight mb-6">
              Acolhimento natural no coração de Bonito – MS.
            </h2>

            <p className="font-body text-base text-on-surface-variant font-light leading-relaxed mb-4">
              Desde 2003, a <strong>Pousada Rancho Jarinu</strong> nasceu com o propósito de harmonizar o aconchego rústico de um rancho acolhedor com a conveniência absoluta de estar a apenas <strong>2 quadras da Praça da Liberdade</strong>.
            </p>

            <p className="font-body text-sm text-on-surface-variant font-light leading-relaxed mb-10">
              Cercada por árvores nativas onde araras e tucanos pousam diariamente, aqui você desfruta de noites tranquilas, café regional feito com amor e assessoria completa da nossa agência credenciada para vivenciar as águas mais cristalinas do Brasil.
            </p>

            {/* 4 Minimal Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-linen-border">
              {pillars.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-2xl text-espresso mb-2">
                    {item.icon}
                  </span>
                  <span className="font-sans text-xs font-semibold text-espresso">
                    {item.title}
                  </span>
                  <span className="text-[0.6875rem] text-on-surface-variant mt-0.5">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Photography Frame */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-linen-border bg-surface-container">
              <img
                alt="Recepção acolhedora em madeira maciça da Pousada Rancho Jarinu"
                className="w-full h-full object-cover"
                src="/rancho-jarinu-website/images/recepcao.jpg"
              />
            </div>

            {/* Small floating highlight badge */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 bg-surface/95 backdrop-blur-md p-6 rounded-2xl border border-primary/30 shadow-2xl max-w-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-2xl">hotel_class</span>
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold text-espresso leading-tight tracking-tight">
                    Desde 2003
                  </h4>
                  <p className="font-body text-sm text-espresso/80 font-normal leading-snug mt-1">
                    Mais de duas décadas recebendo com calor pantaneiro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
