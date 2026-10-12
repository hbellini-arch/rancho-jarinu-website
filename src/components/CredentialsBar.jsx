import React from 'react';

export default function CredentialsBar() {
  const credentials = [
    {
      icon: 'verified_user',
      title: 'CADASTUR',
      sub: 'Ministério do Turismo',
      color: 'text-secondary-dark',
    },
    {
      icon: 'nature_people',
      title: 'Bonito Ecoturismo',
      sub: 'Atrativos Credenciados',
      color: 'text-primary',
    },
    {
      icon: 'hotel_class',
      title: 'Nota 4.8 / 5.0',
      sub: 'Avaliações Verificadas',
      color: 'text-primary',
    },
    {
      icon: 'confirmation_number',
      title: 'Vouchers Oficiais',
      sub: 'Emissão Direta no Local',
      color: 'text-secondary-dark',
    },
    {
      icon: 'forest',
      title: 'Preservação Ativa',
      sub: 'Serra da Bodoquena',
      color: 'text-sage',
    },
  ];

  return (
    <section className="w-full border-b border-linen-border bg-surface py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-semibold block mb-8">
          Compromisso Oficial com o Ecoturismo &amp; Qualidade em Bonito
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-center opacity-90">
          {credentials.map((cred, i) => (
            <div key={i} className="flex flex-col items-center gap-2 p-3 hover:scale-105 transition-transform duration-200">
              <span className={`material-symbols-outlined text-3xl ${cred.color}`}>
                {cred.icon}
              </span>
              <span className="text-xs uppercase font-bold tracking-wider text-espresso">
                {cred.title}
              </span>
              <span className="text-[0.625rem] text-on-surface-variant">
                {cred.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
