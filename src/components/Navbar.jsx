import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Acomodações', href: '#acomodacoes', icon: 'bed' },
    { label: 'A Pousada', href: '#filosofia', icon: 'eco' },
    { label: 'Passeios', href: '#passeios', icon: 'travel_explore' },
    { label: 'Avaliações', href: '#depoimentos', icon: 'star' },
    { label: 'Contato', href: '#contato', icon: 'contact_mail' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#1e1307] shadow-xl border-b border-white/10'
            : 'bg-[#241607]/95 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-2">
          {/* Brand Logo / Identity */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0" onClick={handleLinkClick}>
            <img
              alt="Rancho Jarinu Icon"
              className="w-auto h-9 sm:h-11 object-contain filter opacity-95 group-hover:scale-105 transition-transform flex-shrink-0"
              src="/rancho-jarinu-website/images/logo.png"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(67%) sepia(11%) saturate(543%) hue-rotate(69deg) brightness(91%) contrast(87%)',
              }}
            />
            <div className="flex flex-col min-w-0">
              <span className="font-display text-base sm:text-xl tracking-tight text-white font-medium leading-none truncate">
                Rancho Jarinu
              </span>
              <span className="text-[0.5625rem] sm:text-[0.625rem] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-warm-cream/70 font-semibold mt-1 truncate">
                Pousada &amp; Agência • Bonito MS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.75rem] xl:text-xs tracking-wide text-white/80 hover:text-warm-cream transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Desktop Reserve Button */}
            <a
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#8da28c] hover:bg-[#7b927a] text-espresso-dark font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap"
              href="https://wa.me/5567996452336?text=Ola!%20Gostaria%20de%20reservar%20uma%20estadia%20na%20Pousada%20Rancho%20Jarinu%20em%20Bonito"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve Agora
            </a>

            {/* Mobile Hamburger / Close Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sage"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 z-40 bg-[#1c1106]/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto border-t border-white/10 animate-fade-in">
          {/* Links list */}
          <nav className="flex flex-col p-6 space-y-1">
            <span className="text-[0.625rem] uppercase tracking-[0.2em] text-warm-cream/50 font-bold px-3 py-1 mb-2">
              Navegação
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center gap-3.5 px-3 py-3 rounded-xl text-sm font-medium text-warm-cream/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition-all"
              >
                <span className="material-symbols-outlined text-sage text-xl flex-shrink-0">
                  {link.icon}
                </span>
                <span className="flex-1">{link.label}</span>
                <span className="material-symbols-outlined text-white/30 text-sm">
                  chevron_right
                </span>
              </a>
            ))}
          </nav>

          {/* Bottom Actions & Contact Info */}
          <div className="p-6 bg-[#160d04] border-t border-white/10 space-y-3">
            <a
              href="https://wa.me/5567996452336?text=Ola!%20Gostaria%20de%20reservar%20uma%20estadia%20na%20Pousada%20Rancho%20Jarinu%20em%20Bonito"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#8da28c] hover:bg-[#7b927a] text-espresso-dark text-xs uppercase tracking-wider font-bold transition-all shadow-lg active:scale-98"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              Reservar no WhatsApp
            </a>

            <div className="flex items-center justify-between text-[0.6875rem] text-warm-cream/70 pt-2 px-1">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-sage">call</span>
                (67) 3255-2094
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-sage">location_on</span>
                Centro de Bonito, MS
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
