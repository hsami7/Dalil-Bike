import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LANDMARKS } from './data';
import Header from './Header';
import BottomNav from './BottomNav';
import { useLanguage } from './LanguageContext';

export default function Place() {
  const navigate = useNavigate();
  const { t, tCity, tContent } = useLanguage();

  return (
    <div className="min-h-screen bg-surface">
      <Header activeTab="history" mobileTitle={t('historicalSites')} />
      
      <main className="max-w-screen-xl mx-auto px-6 pt-32 pb-24">
        <header className="mb-12 lg:mb-16">
          <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-3 block">{t('echoesOfPast')}</span>
          <h1 className="font-headline text-4xl lg:text-6xl text-on-surface font-medium tracking-tight mb-6">
            {t('timelessLandmarks')}
          </h1>
          <p className="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            {t('placeSubtitle')}
          </p>
        </header>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {LANDMARKS.map((landmark) => (
            <article 
              key={landmark.id}
              className="group cursor-pointer flex flex-col bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_4px_32px_rgba(26,28,30,0.04)] hover:shadow-[0_24px_64px_rgba(26,28,30,0.12)] transition-all duration-500 hover:-translate-y-2 border border-outline-variant/30"
              onClick={() => navigate(`/place/${landmark.id}`)}
            >
              {/* Image Container */}
              <div className="relative h-[280px] overflow-hidden">
                <img 
                  alt={tContent('historyName', landmark.id)} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                  src={landmark.img}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-surface/80 backdrop-blur-md text-on-surface text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-outline-variant/30 shadow-sm">
                    {tCity(landmark.cityId)}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-secondary font-bold text-[10px] uppercase tracking-wider mb-2 block">{tContent('historyPeriod', landmark.id)}</span>
                </div>
                
                <h2 className="font-headline text-2xl text-on-surface font-medium leading-tight group-hover:text-primary transition-colors mb-4">
                  {tContent('historyName', landmark.id)}
                </h2>
                
                <p className="font-body text-on-surface-variant text-sm line-clamp-2 mb-8 flex-1">
                  {tContent('historyDesc', landmark.id)}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/30 mt-auto">
                  <span className="text-primary font-bold text-sm tracking-wide group-hover:underline">{t('discoverMoreBtn')}</span>
                  <button className="bg-secondary hover:bg-secondary-container text-on-secondary hover:text-on-secondary-container p-3 rounded-full transition-all duration-300 transform group-hover:rotate-45">
                    <span className="material-symbols-outlined text-xl">castle</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <BottomNav activeTab="history" />
    </div>
  );
}
