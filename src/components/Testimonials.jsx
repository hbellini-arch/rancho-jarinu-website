import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      author: 'Estefany',
      tag: 'Avaliação no Google • Bonito, MS',
      quote:
        'A pousada é super charmosa, muito bem localizada (dá pra ir a pé pros restaurantes e lojinhas de Bonito tranquilamente). O atendimento da equipe foi impecável, muito atenciosos com dicas de passeios. Café da manhã uma delícia e piscina ótima!',
    },
    {
      author: 'Guilherme Farias',
      tag: 'Viagem em Família • Bonito, MS',
      quote:
        'Lugar maravilhoso com energia acolhedora! As crianças amaram a piscina e nós ficamos encantados com as araras e pássaros que pousam nas árvores do rancho. Os quartos são muito limpos, ar condicionado perfeito e café reforçado para os passeios.',
    },
    {
      author: 'Fernando Baccari',
      tag: 'Hóspede Ecoturismo • Bonito, MS',
      quote:
        'Melhor custo-benefício de Bonito. A comodidade de fechar os passeios de flutuação e grutas diretamente na agência da pousada com orientação honesta fez toda a diferença na nossa viagem. Voltaremos com certeza ao Rancho Jarinu!',
    },
  ];

  return (
    <section className="w-full bg-[#241607] text-warm-cream py-24 sm:py-28 relative overflow-hidden" id="depoimentos">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-sage font-semibold block mb-2">
            Experiências Verificadas
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white font-light">
            O Que Nossos Hóspedes Dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-[#2e1c09]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-sage/40 transition-colors"
            >
              <div>
                <div className="font-headline text-5xl text-sage/40 leading-none mb-4 select-none">“</div>
                <p className="font-body text-sm text-warm-cream/90 font-light leading-relaxed mb-8 italic">
                  {rev.quote}
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-sans text-xs font-semibold text-white tracking-wider uppercase">
                    — {rev.author}
                  </h4>
                  <span className="text-[0.6875rem] text-warm-cream/60">{rev.tag}</span>
                </div>
                <div className="flex text-sage text-xs">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="material-symbols-outlined text-sm">
                      star
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
