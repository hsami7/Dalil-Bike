import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DOMAINS } from './data';
import Header from './Header';
import BottomNav from './BottomNav';
import { useLanguage } from './LanguageContext';

export default function Hotel() {
  const navigate = useNavigate();
  const { t, tCity } = useLanguage();

  return (
    <div className="min-h-screen bg-surface">
      <Header activeTab="stays" mobileTitle={t('staysDirectory')} />
      
      <main className="max-w-screen-xl mx-auto px-6 pt-32 pb-24">
        <header className="mb-12 md:mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3 block">{t('moroccanSanctuaries')}</span>
          <h1 className="font-headline text-4xl md:text-6xl text-on-surface font-medium tracking-tight mb-6">
            {t('artOfStay')}
          </h1>
          <p className="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            {t('hotelSubtitle')}
          </p>
        </header>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {DOMAINS.map((city) => (
            <article 
              key={city.id}
              className="group cursor-pointer flex flex-col bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_4px_32px_rgba(26,28,30,0.04)] hover:shadow-[0_24px_64px_rgba(26,28,30,0.12)] transition-all duration-500 hover:-translate-y-2 border border-outline-variant/30"
              onClick={() => navigate(`/hub?city=${city.id}&tab=stays`)}
            >
              {/* Image Container */}
              <div className="relative h-[280px] overflow-hidden">
                <img 
                  alt={city.stay.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                  src={city.stay.img}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-surface/80 backdrop-blur-md text-on-surface text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-outline-variant/30 shadow-sm">
                    {tCity(city.id)}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="font-headline text-2xl text-on-surface font-medium leading-tight group-hover:text-primary transition-colors">
                    {city.stay.name}
                  </h2>
                </div>
                
                <p className="font-body text-on-surface-variant text-sm line-clamp-2 mb-6 flex-1">
                  {city.stay.desc}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/30 mt-auto">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-outline tracking-wider block mb-0.5">{t('startingFrom')}</span>
                    <span className="text-primary font-bold text-xl">{city.stay.price}</span>
                  </div>
                  <button className="bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container p-3 rounded-full transition-all duration-300 transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <BottomNav activeTab="stays" />
    </div>
  );
}
