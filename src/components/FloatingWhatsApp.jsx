import React, { useState } from 'react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:block mr-3 bg-espresso text-warm-cream text-xs px-3.5 py-2 rounded-xl shadow-xl border border-white/20 whitespace-nowrap animate-fade-in">
          Fale conosco no WhatsApp!
        </div>
      )}

      {/* Button */}
      <a
        href="https://wa.me/5567996452336?text=Ola!%20Gostaria%20de%20consultar%20disponibilidade%20e%20passeios%20na%20Pousada%20Rancho%20Jarinu"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Atendimento no WhatsApp"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
      </a>
    </div>
  );
}
