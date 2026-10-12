import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    dates: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá! Mensagem enviada pelo site da Pousada Rancho Jarinu:\n- Nome: ${formData.name}\n- Contato: ${formData.contact}\n- Período/Pessoas: ${formData.dates || 'Não especificado'}\n- Mensagem: ${formData.message || 'Gostaria de mais informações'}`;
    const url = `https://wa.me/5567996452336?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="relative w-full bg-[#1e1307] py-24 sm:py-28 text-white overflow-hidden" id="contato">
      {/* Background subtle image texture */}
      <img
        alt="Rancho Jarinu Textura Noturna"
        className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale"
        src="/images/piscina-noite.jpg"
      />
      <div className="absolute inset-0 bg-[#241607]/85" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] text-sage font-semibold mb-3">
              Reserve Sua Estadia
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
              Planeje Seus Dias Inesquecíveis em Bonito.
            </h2>
            <p className="font-body text-sm text-warm-cream/80 font-light leading-relaxed mb-8">
              Tem alguma dúvida sobre datas, lotação dos passeios em alta temporada, tipos de apartamentos ou transfer de Campo Grande? Entre em contato diretamente com nossa equipe.
            </p>

            <div className="space-y-4 text-xs text-warm-cream/90">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sage text-lg">location_on</span>
                <span>Rua 24 de Fevereiro, 1895 - Centro, Bonito - MS (2 quadras da Praça dos Peixes)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sage text-lg">call</span>
                <span>(67) 3255-2094 • Telefone Fixo</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sage text-lg">chat</span>
                <span>(67) 99645-2336 • WhatsApp Oficial</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#2e1c09]/90 border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.6875rem] uppercase tracking-wider text-warm-cream/70 font-medium mb-1.5" htmlFor="contact-name">
                    Seu Nome Completo
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    placeholder="Ex: João da Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-sage"
                  />
                </div>
                <div>
                  <label className="block text-[0.6875rem] uppercase tracking-wider text-warm-cream/70 font-medium mb-1.5" htmlFor="contact-email">
                    WhatsApp ou E-mail
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="text"
                    placeholder="Ex: (67) 99999-9999"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-sage"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[0.6875rem] uppercase tracking-wider text-warm-cream/70 font-medium mb-1.5" htmlFor="contact-dates">
                  Período Desejado e Número de Pessoas
                </label>
                <input
                  id="contact-dates"
                  type="text"
                  placeholder="Ex: 10 a 15 de Julho, 2 adultos e 1 criança"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                  className="w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-sage"
                />
              </div>

              <div>
                <label className="block text-[0.6875rem] uppercase tracking-wider text-warm-cream/70 font-medium mb-1.5" htmlFor="contact-message">
                  Sua Mensagem ou Dúvidas
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Conte-nos sobre sua viagem: quer incluir passeios de flutuação, grutas ou transfer?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-sage resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg bg-[#8da28c] hover:bg-[#788f77] text-espresso-dark text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Enviar Mensagem para o Rancho Jarinu</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>

              {submitted && (
                <p className="text-center text-xs text-sage font-medium mt-2">
                  ✓ Abrindo WhatsApp para envio direto... Obrigado!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
