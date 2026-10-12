import React, { useState } from 'react';

export default function Accommodations() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const accommodations = [
    {
      id: 'casal',
      title: 'Apartamento Casal Conforto',
      tag: 'Casal ou Duplo',
      tagBg: 'bg-espresso/80',
      description: 'Tijolinho à vista, cama Queen, ar split, frigobar e silêncio para descanso após as trilhas.',
      image: '/rancho-jarinu-website/images/room-casal.jpg',      
      category: 'casal',
      features: ['Cama Queen', 'Ar Split', 'Frigobar', 'Wi-Fi Fibra']
    },
    {
      id: 'familiar',
      title: 'Apartamento Familiar c/ Beliche',
      tag: 'Até 4 Pessoas',
      tagBg: 'bg-secondary-dark/90',
      description: 'Cama de casal + beliche artesanal em madeira maciça. Espaço ideal para famílias com crianças.',
      image: '/rancho-jarinu-website/images/room-familia.jpg',
      category: 'familia',
      features: ['Cama Casal + Beliche', 'Ar Split', 'Espaçoso', 'Frigobar']
    },
    {
      id: 'sacada',
      title: 'Suíte com Sacada Panorâmica',
      tag: 'Piso Superior',
      tagBg: 'bg-espresso/80',
      description: 'Sacada privativa em madeira com vista para as palmeiras e jardins, recebendo a brisa agradável da tarde.',
      image: '/rancho-jarinu-website/images/suite-sacada.jpg',
      category: 'suite',
      features: ['Sacada Privativa', 'Vista Jardim', 'Ar Split', 'Cama King/Queen']
    }
  ];

  const filtered = selectedCategory === 'all'
    ? accommodations
    : accommodations.filter((item) => item.category === selectedCategory);

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24 sm:py-28" id="acomodacoes">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold block mb-2">
            Acomodações Selecionadas
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-espresso font-light">
            Apartamentos &amp; Suítes
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === 'all'
                ? 'bg-espresso text-warm-cream shadow-sm'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-low border border-linen-border'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setSelectedCategory('casal')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === 'casal'
                ? 'bg-espresso text-warm-cream shadow-sm'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-low border border-linen-border'
            }`}
          >
            Casal
          </button>
          <button
            onClick={() => setSelectedCategory('familia')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === 'familia'
                ? 'bg-espresso text-warm-cream shadow-sm'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-low border border-linen-border'
            }`}
          >
            Família
          </button>
          <button
            onClick={() => setSelectedCategory('suite')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedCategory === 'suite'
                ? 'bg-espresso text-warm-cream shadow-sm'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-low border border-linen-border'
            }`}
          >
            Suítes c/ Sacada
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((room) => (
          <div key={room.id} className="group flex flex-col bg-surface rounded-2xl border border-linen-border p-4 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-surface-container border border-linen-border">
              <img
                alt={room.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={room.image}
              />
              <span className={`absolute top-4 left-4 px-3 py-1 rounded-md ${room.tagBg} backdrop-blur-md text-[0.6875rem] uppercase tracking-wider text-warm-cream font-semibold`}>
                {room.tag}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 flex-1">
              <div>
                <h3 className="font-headline text-2xl text-espresso font-normal group-hover:text-primary transition-colors">
                  {room.title}
                </h3>
                <p className="text-xs text-on-surface-variant font-light mt-1.5 leading-relaxed">
                  {room.description}
                </p>

                {/* Amenities Badges */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {room.features.map((feat, i) => (
                    <span
                      key={i}
                      className="text-[0.625rem] px-2 py-0.5 rounded bg-surface-container text-espresso/80 font-medium"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <a
                className="w-10 h-10 rounded-full border border-linen-border group-hover:border-primary flex items-center justify-center flex-shrink-0 text-espresso group-hover:text-primary transition-colors mt-1"
                href={`https://wa.me/5567996452336?text=${encodeURIComponent(`Olá! Gostaria de reservar o ${room.title} na Pousada Rancho Jarinu.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Reservar ${room.title}`}
              >
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
