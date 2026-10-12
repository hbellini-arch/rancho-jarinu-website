import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#180e04] text-warm-cream/80 pt-16 pb-12 border-t border-white/10 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display text-2xl tracking-tight text-white font-medium">
                Rancho Jarinu
              </span>
            </div>
            <p className="text-xs text-warm-cream/70 font-light leading-relaxed max-w-sm mb-6">
              Pousada e agência de passeios em Bonito – MS. Conforto rústico em madeira nobre, café regional pantaneiro e atendimento com calor familiar a duas quadras da Praça da Liberdade.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-warm-cream/70">
              <a
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:text-white hover:border-white transition-colors"
                href="https://www.instagram.com/pousadajarinu/"
                rel="noopener noreferrer"
                target="_blank"
                title="Instagram @pousadajarinu"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:text-white hover:border-white transition-colors"
                href="https://wa.me/5567996452336"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
              </a>
              <a
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:text-white hover:border-white transition-colors"
                href="https://maps.google.com/?q=Pousada+Rancho+Jarinu+Bonito+MS"
                target="_blank"
                rel="noopener noreferrer"
                title="Google Maps"
              >
                <span className="material-symbols-outlined text-sm">map</span>
              </a>
              <a
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:text-white hover:border-white transition-colors"
                href="tel:6732552094"
                title="Telefone Fixo"
              >
                <span className="material-symbols-outlined text-sm">call</span>
              </a>
              <a
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:text-white hover:border-white transition-colors"
                href="https://www.facebook.com/pousadajarinu"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:text-white hover:border-white transition-colors"
                href="mailto:pousadaranchojarinu@hotmail.com"
                title="E-mail"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-xs text-warm-cream/70 font-light">
              <li><a className="hover:text-white transition-colors" href="#acomodacoes">Acomodações</a></li>
              <li><a className="hover:text-white transition-colors" href="#filosofia">A Pousada</a></li>
              <li><a className="hover:text-white transition-colors" href="#galeria-fotos">Fotos &amp; Tour 360°</a></li>
              <li><a className="hover:text-white transition-colors" href="#servicos">Lazer &amp; Piscina</a></li>
              <li><a className="hover:text-white transition-colors" href="#passeios">Agência de Passeios</a></li>
              <li><a className="hover:text-white transition-colors" href="#depoimentos">Depoimentos</a></li>
              <li><a className="hover:text-white transition-colors" href="#localizacao">Como Chegar</a></li>
            </ul>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">Destaques</h4>
            <ul className="space-y-2 text-xs text-warm-cream/70 font-light">
              <li>Piscina com Solarium &amp; Palmeiras</li>
              <li>Café da Manhã Regional Incluso</li>
              <li><a className="hover:text-white transition-colors" href="#galeria-fotos">Fotos &amp; Tour 360°</a></li>
              <li>Quiosque e Churrasqueira</li>
              <li>Vouchers Oficiais de Ecoturismo</li>
              <li>Check-in 14h / Check-out 11h</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-4">Contato Direto</h4>
            <div className="space-y-2.5 text-xs text-warm-cream/70 font-light">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-sage flex-shrink-0 mt-0.5">location_on</span>
                <span>Rua 24 de Fevereiro, 1895<br />Centro — Bonito, MS • CEP 79290-000</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-sage flex-shrink-0">call</span>
                <span>(67) 3255-2094</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-sage flex-shrink-0">chat</span>
                <a className="hover:text-white transition-colors" href="https://wa.me/5567996452336" target="_blank" rel="noopener noreferrer">
                  WhatsApp: (67) 99645-2336
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-sage flex-shrink-0">mail</span>
                <a className="hover:text-white transition-colors" href="mailto:pousadaranchojarinu@hotmail.com">
                  pousadaranchojarinu@hotmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[0.6875rem] text-warm-cream/60 gap-4">
          <p>© {new Date().getFullYear()} Pousada Rancho Jarinu — Bonito, MS. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-white transition-colors" href="#">Política de Privacidade</a>
            <a className="hover:text-white transition-colors" href="#">Termos de Reserva</a>
            <a className="hover:text-white transition-colors" href="https://wa.me/5567996452336" target="_blank" rel="noopener noreferrer">
              Atendimento ao Hóspede
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
