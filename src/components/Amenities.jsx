import React from 'react';

export default function Amenities() {
  const services = [
    {
      icon: 'pool',
      title: 'Piscina & Solarium',
      desc: 'Área refrescante ao ar livre com espreguiçadeiras e palmeiras, perfeita para relaxar após flutuações e trilhas.',
    },
    {
      icon: 'outdoor_grill',
      title: 'Quiosque & Churrasqueira',
      desc: 'Espaço com churrasqueira rústica de tijolos e mesas artesanais de madeira para momentos com família e amigos.',
    },
    {
      icon: 'travel_explore',
      badge: 'Destaque',
      title: 'Agência de Passeios',
      desc: 'Emissão de vouchers credenciados para Gruta do Lago Azul, Rio Sucuri, Rio da Prata, cachoeiras e transfers.',
      linkText: 'Ver Passeios',
      linkHref: '#passeios',
    },
    {
      icon: 'coffee',
      title: 'Café Regional Incluso',
      desc: 'Buffet farto matinal com frutas tropicais, bolos caseiros, chipa pantaneira quentinha, sucos e café passado na hora.',
    },
    {
      icon: 'ac_unit',
      title: 'Climatização & Wi-Fi',
      desc: 'Ar-condicionado split silencioso em todos os quartos, TV tela plana, frigobar abastecido e internet fibra óptica rápida.',
    },
  ];

  const gallery = [
    {
      title: 'Piscina & Solarium',
      img: '/images/piscina-dia.jpg',
    },
    {
      title: 'Iluminação Noturna Aconchegante',
      img: '/images/piscina-noite.jpg',
    },
    {
      title: 'Café Regional Artesanal',
      img: '/images/cafe-mesa.jpg',
    },
    {
      title: 'Bancos de Tora & Jardim',
      img: '/images/redario.jpg',
    },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24 sm:py-28" id="servicos">
      <div className="mb-14">
        <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold block mb-2">
          Comodidades &amp; Conforto
        </span>
        <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-espresso font-light">
          Nossos Serviços &amp; Lazer
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {services.map((svc, i) => (
          <div key={i} className="flex flex-col items-start border-t border-linen-border pt-6">
            <div className="flex items-center justify-between w-full mb-3">
              <span className="material-symbols-outlined text-3xl text-primary">{svc.icon}</span>
              {svc.badge && (
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-secondary-dark text-[0.625rem] font-bold uppercase tracking-wider">
                  {svc.badge}
                </span>
              )}
            </div>
            <h3 className="font-sans text-base font-semibold text-espresso mb-1.5">{svc.title}</h3>
            <p className="text-xs text-on-surface-variant font-light leading-relaxed mb-3">
              {svc.desc}
            </p>
            {svc.linkText && (
              <a
                className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 mt-auto"
                href={svc.linkHref}
              >
                {svc.linkText} <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Visual Gallery of Leisure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {gallery.map((item, i) => (
          <div
            key={i}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-linen-border bg-surface-container"
          >
            <img
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="/rancho-jarinu-website/images/piscina-dia.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs text-white font-medium">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
