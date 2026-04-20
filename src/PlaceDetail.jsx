import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DOMAINS, LANDMARKS, HOTELS } from './data';
import { HISTORY_IMAGES } from './data/history-images';
import Header from './Header';
import BottomNav from './BottomNav';
import { useLanguage } from './LanguageContext';

export default function PlaceDetail() {
  const navigate = useNavigate();
  const { landmarkId } = useParams();
  const { t, tCity, tContent } = useLanguage();

  const landmark = LANDMARKS.find(l => l.id === landmarkId);
  const domain = landmark ? DOMAINS.find(d => d.id === landmark.cityId) : null;

  if (!landmark || !domain) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <p className="text-on-surface-variant text-xl">{t('noResults')}</p>
      </div>
    );
  }

  const cityName = tCity(domain.id);
  const hData = HISTORY_IMAGES[landmark.imageKey];
  
  // Find a hotel in this city for the recommended stay section
  const hotel = HOTELS.find(h => h.cityId === domain.id);
  
  const landmarkPhotos = hData ? [
    { url: hData.primary },
    ...hData.gallery.map(url => ({ url }))
  ] : (landmark.img ? [{ url: landmark.img }] : []);

  return (
    <div className="min-h-screen bg-surface">
      <Header activeTab="history" mobileTitle={tContent('historyName', landmark.id)} />

      <main className="pt-0 lg:pt-0 pb-32 lg:pb-24">
        {/* Hero Section — Full-bleed cinematic image */}
        <section className="relative w-full h-[60vh] lg:h-[80vh] bg-surface-container-low overflow-hidden">
          <img
            alt={tContent('historyName', landmark.id)}
            className="w-full h-full object-cover"
            src={landmarkPhotos[0]?.url}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>

          {/* Location / Period Widget Overlay */}
          <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 bg-surface/60 backdrop-blur-[20px] rounded-xl p-4 flex items-center gap-4 text-on-surface shadow-[0_32px_32px_rgba(26,28,30,0.06)]">
            <div className="flex flex-col">
              <span className="text-[0.75rem] font-bold uppercase tracking-wider text-primary">{cityName}</span>
              <span className="font-headline text-[1.375rem]">{tContent('historyPeriod', landmark.id)}</span>
            </div>
            <div className="w-px h-8 bg-outline-variant/30"></div>
            <div className="flex flex-col">
              <span className="text-[0.75rem] font-bold uppercase tracking-wider text-primary">{t('status')}</span>
              <span className="font-headline text-[1.375rem]">{t('heritageProtected')}</span>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-12 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Main Article */}
          <article className="lg:col-span-8">
            <header className="mb-12">
              <span className="text-[0.75rem] font-bold uppercase tracking-wider text-secondary mb-4 block">
                {tContent('historyPeriod', landmark.id)}
              </span>
              <h1 className="font-headline text-[2.5rem] md:text-[3.5rem] leading-tight text-primary mb-6">
                {tContent('historyName', landmark.id)}
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {tContent('historyDesc', landmark.id)}
              </p>
            </header>

            <div className="text-on-surface max-w-none">
              {/* Decorative quote */}
              <p className="font-headline text-[1.75rem] leading-relaxed mb-8 text-primary-container italic">
                {tContent('historyQuote', landmark.id)}
              </p>

              {/* Extended article section */}
              <h2 className="font-headline text-[1.75rem] text-primary mt-12 mb-6">
                {tContent('historyArticleTitle', landmark.id)}
              </h2>
              <p className="mb-6 leading-relaxed text-on-surface-variant">
                {tContent('historyArticleBody', landmark.id)}
              </p>

              {/* Historical Timeline */}
              <div className="relative ps-8 mt-12 mb-12">
                <div className="absolute start-0 top-0 bottom-0 w-px bg-outline-variant/20"></div>
                {/* Check for structured timeline first, else fallback to legacy flat keys */}
                {(() => {
                  const structuredTimeline = tContent('historyTimeline', landmark.id);
                  if (Array.isArray(structuredTimeline) && structuredTimeline.length > 0) {
                    return structuredTimeline.map((item, idx) => (
                      <TimelineItem 
                        key={idx} 
                        date={item.date} 
                        text={item.text} 
                        last={idx === structuredTimeline.length - 1} 
                      />
                    ));
                  }
                  
                  // Legacy Fallback for original 10 landmarks
                  return (
                    <>
                      <TimelineItem
                        date={tContent('historyTimeline1Date', landmark.id)}
                        text={tContent('historyTimeline1Text', landmark.id)}
                      />
                      <TimelineItem
                        date={tContent('historyTimeline2Date', landmark.id)}
                        text={tContent('historyTimeline2Text', landmark.id)}
                      />
                      <TimelineItem
                        date={tContent('historyTimeline3Date', landmark.id)}
                        text={tContent('historyTimeline3Text', landmark.id)}
                        last
                      />
                    </>
                  );
                })()}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Visitor Info Card */}
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_32px_64px_-12px_rgba(26,28,30,0.06)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container"></div>
              <h3 className="font-headline text-[1.375rem] text-primary mb-6">{t('visitorInfo')}</h3>
              <ul className="space-y-6">
                <InfoItem icon="schedule" label={t('openingHours')} value={t('openingHoursValue')} />
                <InfoItem icon="location_on" label={t('locationLabel')} value={`${cityName}, ${t('morocco')}`} />
                <InfoItem icon="confirmation_number" label={t('entryFee')} value={t('entryFeeValue')} />
              </ul>
              <button
                onClick={() => navigate(`/hub?city=${domain.id}`)}
                className="mt-8 w-full bg-gradient-to-br from-primary to-primary-container text-white rounded-full py-3 px-6 font-bold text-sm tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                {t('exploreSite')}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Mini Map Card */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(26,28,30,0.06)] relative h-64">
              <img
                alt={cityName}
                className="w-full h-full object-cover opacity-80"
                src={domain.img}
              />
              <div className="absolute inset-0 bg-primary/10"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-surface/80 backdrop-blur-md rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-primary text-sm">{tContent('historyName', landmark.id)}</h4>
                  <p className="text-xs text-on-surface-variant">{cityName}, {t('morocco')}</p>
                </div>
                <button
                  onClick={() => navigate(`/hub?city=${domain.id}`)}
                  className="bg-surface-container-lowest p-2 rounded-full shadow-sm text-primary hover:bg-surface-variant transition-colors"
                >
                  <span className="material-symbols-outlined">directions</span>
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Photo Gallery — Bento Grid */}
        <section className="bg-surface-container-low py-16 md:py-24">
          <div className="max-w-screen-2xl mx-auto px-4 md:px-12">
            <header className="mb-12">
              <h2 className="font-headline text-[1.75rem] text-primary">{t('visualJourney')}</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
              {/* Large image */}
              <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden relative group">
                <img
                  alt={tContent('historyName', landmark.id)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={landmarkPhotos[0]?.url}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-sm font-medium">{tContent('historyName', landmark.id)}</span>
                </div>
              </div>
              {/* Smaller images */}
              <div className="rounded-xl overflow-hidden relative group">
                <img
                  alt={cityName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={landmarkPhotos[1]?.url || domain.img}
                />
              </div>
              {hotel ? (
                <article 
                  className="group cursor-pointer flex flex-col bg-surface-container-low rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-outline-variant/30"
                  onClick={() => navigate(`/hotel/${domain.id}`)}
                >
                  <div className="relative h-[240px] overflow-hidden">
                    <img
                      alt={tContent('stayName', hotel.id)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={hotel.img}
                    />
                    <div className="absolute top-4 right-4 bg-tertiary/90 backdrop-blur-md text-on-tertiary text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
                      {t('premiumLocation')}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col gap-4 text-left">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-headline text-2xl text-on-surface font-medium leading-tight group-hover:text-primary transition-colors italic">
                          {tContent('stayName', hotel.id)}
                        </h3>
                        <p className="text-on-surface-variant text-sm mt-1">{cityName}</p>
                      </div>
                      <span className="material-symbols-outlined text-primary scale-125">add_circle</span>
                    </div>
                    <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">
                      {tContent('stayDesc', hotel.id)}
                    </p>
                  </div>
                </article>
              ) : (
                <div className="flex flex-col items-center justify-center bg-surface-container-low rounded-[2rem] border border-dashed border-outline-variant/30 p-8 text-center opacity-60">
                  <span className="material-symbols-outlined text-4xl mb-4 text-on-surface-variant">hotel</span>
                  <p className="font-headline text-xl text-on-surface-variant italic">{t('noResults')}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <BottomNav activeTab="history" />
    </div>
  );
}

// Sub-components
function TimelineItem({ date, text, last }) {
  if (!date || !text) return null;
  return (
    <div className={`relative ${last ? '' : 'mb-8'}`}>
      <div className="absolute -start-[37px] top-2 w-3 h-3 rounded-full bg-secondary"></div>
      <h3 className="font-headline text-xl text-primary">{date}</h3>
      <p className="text-on-surface-variant text-sm mt-1">{text}</p>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <li className="flex items-start gap-4">
      <span className="material-symbols-outlined text-secondary mt-1">{icon}</span>
      <div>
        <span className="block text-sm font-bold text-on-surface">{label}</span>
        <span className="block text-sm text-on-surface-variant mt-1">{value}</span>
      </div>
    </li>
  );
}
