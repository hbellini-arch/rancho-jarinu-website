import React, { useState } from 'react';

export default function PhotoGallery() {
  const [activeImage, setActiveImage] = useState(null);

  const photos = [
    {
      title: 'Arquitetura Rústica & Fachada',
      alt: 'Fachada e arquitetura em madeira nobre da Pousada Rancho Jarinu',
      src: '/images/hero-facade.jpg',
    },
    {
      title: 'Piscina & Solarium',
      alt: 'Piscina e espreguiçadeiras ao sol no pátio da pousada',
      src: '/images/piscina-dia.jpg',
    },
    {
      title: 'Iluminação Noturna da Piscina',
      alt: 'Iluminação acolhedora noturna na piscina e quiosque',
      src: '/images/piscina-noite.jpg',
    },
    {
      title: 'Sacada Privativa em Madeira',
      alt: 'Sacada privativa em madeira com vista para o jardim',
      src: '/images/suite-sacada-2.jpg',
    },
    {
      title: 'Redário & Descanso',
      alt: 'Espaço de descanso com redes e sombra das árvores',
      src: '/images/redario.jpg',
    },
    {
      title: 'Jardim Arborizado & Pátio',
      alt: 'Pátio arborizado com bancos de tora e vegetação nativa',
      src: '/images/jardim-patio.jpg',
    },
    {
      title: 'Apartamentos Aconchegantes',
      alt: 'Quarto aconchegante com detalhes em tijolinho e ar condicionado',
      src: '/images/room-casal.jpg',
    },
    {
      title: 'Quiosque & Churrasqueira',
      alt: 'Quiosque com churrasqueira rústica para confraternização',
      src: '/images/quiosque-churrasqueira.jpg',
    },
  ];

  return (
    <section className="w-full bg-surface border-b border-linen-border py-20 lg:py-28" id="galeria-fotos">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-secondary-dark mb-3">
              <span className="material-symbols-outlined text-xl text-primary">photo_camera</span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">
                REGISTROS &amp; AMBIENTES • POUSADA RANCHO JARINU
              </span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-espresso font-light leading-tight mb-4">
              Álbum de Fotos: Conheça cada cantinho do nosso rancho
            </h2>
            <p className="font-body text-base text-on-surface-variant font-light leading-relaxed">
              A atmosfera arborizada, as varandas em madeira nobre, os quartos confortáveis e os recantos de convivência no centro de Bonito. Um refúgio pensado para sua tranquilidade e conexão com a natureza pantaneira.
            </p>
          </div>
        </div>

        {/* Banner Card Destaque: Tour Virtual 360° */}
        <div className="w-full bg-[#241607] text-white rounded-2xl p-6 sm:p-10 mb-14 relative overflow-hidden shadow-xl border border-white/10">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider text-warm-cream mb-4">
                <span className="material-symbols-outlined text-sm text-sage">view_in_ar</span>
                <span>EXPERIÊNCIA IMERSIVA</span>
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white font-light mb-3">
                Faça um Tour Virtual 360° pela Pousada
              </h3>
              <p className="font-body text-sm sm:text-base text-warm-cream/80 font-light leading-relaxed max-w-2xl">
                Explore todas as áreas comuns, piscina, quiosques, suítes e jardins como se já estivesse aqui antes mesmo do seu check-in. Uma experiência interativa para vivenciar cada detalhe do Rancho Jarinu.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#8da28c] hover:bg-[#788f77] text-espresso-dark font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
                href="https://pousadaranchojarinu.com.br/ranchojarinu/index.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-xl">explore</span>
                <span>Iniciar Tour 360° Agora</span>
              </a>
            </div>
          </div>
        </div>

        {/* 8-Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, i) => (
            <div
              key={i}
              onClick={() => setActiveImage(photo)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container border border-linen-border shadow-sm cursor-pointer hover:shadow-lg transition-all"
            >
              <img
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={photo.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent flex items-end justify-between p-4 opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-white font-medium">{photo.title}</span>
                <span className="material-symbols-outlined text-white/80 group-hover:text-white text-lg">
                  zoom_in
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-surface rounded-2xl overflow-hidden shadow-2xl p-2 border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[75vh] w-auto rounded-xl object-contain mx-auto"
            />
            <div className="p-4 text-center">
              <h4 className="font-headline text-xl text-espresso font-medium">{activeImage.title}</h4>
              <p className="text-xs text-on-surface-variant mt-1">{activeImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
