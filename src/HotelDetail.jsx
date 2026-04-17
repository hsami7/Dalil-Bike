import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DOMAINS } from './data';
import Header from './Header';
import BottomNav from './BottomNav';
import { useLanguage } from './LanguageContext';

export default function HotelDetail() {
  const navigate = useNavigate();
  const { cityId } = useParams();
  const { t, tCity } = useLanguage();

  const domain = DOMAINS.find(d => d.id === cityId);

  if (!domain) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <p className="text-on-surface-variant text-xl">{t('noResults')}</p>
      </div>
    );
  }

  const stay = domain.stay;
  const cityName = tCity(domain.id);

  return (
    <div className="min-h-screen bg-surface">
      <Header activeTab="stays" mobileTitle={stay.name} />

      <main className="pt-28 pb-24">
        {/* Hero Gallery Bento Grid */}
        <section className="max-w-screen-2xl mx-auto px-4 md:px-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[400px] md:h-[716px]">
            {/* Main large image */}
            <div className="md:col-span-3 row-span-2 rounded-xl overflow-hidden relative group">
              <img
                alt={stay.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={stay.img}
              />
              {/* Location Overlay Widget */}
              <div className="absolute bottom-6 left-6 bg-surface/40 backdrop-blur-md rounded-xl p-4 text-on-surface flex items-center gap-4 shadow-[0_32px_32px_rgba(26,28,30,0.06)]">
                <div>
                  <p className="font-headline text-2xl font-medium">{stay.price}</p>
                  <p className="text-sm font-medium">{cityName}</p>
                </div>
                <span
                  className="material-symbols-outlined text-4xl text-on-surface"
                  data-weight="fill"
                >
                  location_city
                </span>
              </div>
            </div>
            {/* Smaller images */}
            <div className="hidden md:block rounded-xl overflow-hidden group">
              <img
                alt={cityName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={domain.img}
              />
            </div>
            <div className="hidden md:block rounded-xl overflow-hidden relative group">
              <img
                alt={domain.history.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={domain.history.img}
              />
              <div className="absolute inset-0 bg-primary/20 hover:bg-primary/10 transition-colors flex items-center justify-center cursor-pointer">
                <span className="bg-surface-container-lowest/80 backdrop-blur text-primary px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">photo_library</span>
                  {t('viewPhotos')}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-16 relative">
          {/* Left Column: Editorial Content */}
          <div className="flex-1 max-w-3xl">
            {/* Header Block */}
            <div className="mb-12 relative">
              <span className="inline-block text-tertiary font-semibold text-xs tracking-widest uppercase mb-4 bg-tertiary-fixed px-3 py-1 rounded-full">
                {t('editorsChoice')}
              </span>
              <h1 className="font-headline text-[3.5rem] leading-tight text-primary mb-4 tracking-tight">
                {stay.name}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-on-surface-variant mb-8">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-tertiary" data-weight="fill">star</span>
                  <span className="font-bold text-on-surface">4.9</span>
                  <span className="text-sm">(128 {t('reviews')})</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                  {cityName}
                </div>
              </div>
              <p className="text-lg leading-relaxed text-on-surface/80 max-w-2xl">
                {stay.desc}
              </p>
            </div>

            {/* Section: The Heritage */}
            <section className="mb-16 bg-surface-container-low rounded-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <h2 className="font-headline text-[1.75rem] text-primary mb-6 relative z-10">{t('theHeritage')}</h2>
              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                <div className="w-1 bg-outline-variant/20 rounded-full hidden md:block"></div>
                <div className="space-y-6 text-on-surface-variant leading-relaxed">
                  <p>{domain.history.desc}</p>
                </div>
              </div>
            </section>

            {/* Section: Curated Amenities */}
            <section className="mb-16">
              <h2 className="font-headline text-[1.75rem] text-primary mb-8 ps-4">{t('curatedAmenities')}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
                <AmenityItem icon="pool" title={t('amenityPool')} subtitle={t('amenityPoolDesc')} />
                <AmenityItem icon="restaurant" title={t('amenityDining')} subtitle={t('amenityDiningDesc')} />
                <AmenityItem icon="spa" title={t('amenitySpa')} subtitle={t('amenitySpaDesc')} />
                <AmenityItem icon="local_bar" title={t('amenityBar')} subtitle={t('amenityBarDesc')} />
                <AmenityItem icon="park" title={t('amenityGardens')} subtitle={t('amenityGardensDesc')} />
                <AmenityItem icon="wifi" title={t('amenityWifi')} subtitle={t('amenityWifiDesc')} />
              </div>
            </section>

            {/* Section: Guest Logs (Reviews) */}
            <section>
              <div className="flex justify-between items-end mb-8 ps-4">
                <h2 className="font-headline text-[1.75rem] text-primary">{t('fromTheLogs')}</h2>
              </div>
              <div className="space-y-12">
                <ReviewCard
                  initial="A"
                  name="Alexander M."
                  date="September 2024"
                  text={t('review1')}
                />
                <ReviewCard
                  initial="S"
                  name="Sofia K."
                  date="July 2024"
                  text={t('review2')}
                  offset
                />
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Booking & Info Panel */}
          <div className="w-full lg:w-[400px]">
            <div className="sticky top-32 space-y-8">
              {/* Booking Card */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_32px_32px_rgba(26,28,30,0.06)]">
                <div className="mb-6">
                  <span className="text-sm text-on-surface-variant font-medium uppercase tracking-wider">{t('startingFrom')}</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-headline text-[2.5rem] text-primary">{stay.price}</span>
                    <span className="text-on-surface-variant text-sm">{t('perNight')}</span>
                  </div>
                </div>

                {/* Inputs */}
                <div className="space-y-4 mb-8">
                  <div className="bg-surface-container-high rounded-full px-5 py-3 flex items-center justify-between cursor-pointer hover:bg-surface-container-highest transition-all">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-on-surface-variant">{t('checkInOut')}</span>
                      <span className="text-sm font-semibold text-on-surface">{t('selectDates')}</span>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant">calendar_month</span>
                  </div>
                  <div className="bg-surface-container-high rounded-full px-5 py-3 flex items-center justify-between cursor-pointer hover:bg-surface-container-highest transition-all">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-on-surface-variant">{t('guests')}</span>
                      <span className="text-sm font-semibold text-on-surface">{t('guestsDefault')}</span>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant">group</span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={stay.link && stay.link !== '#' ? stay.link : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-br from-primary to-primary-container text-white rounded-full py-4 font-bold tracking-wide hover:shadow-lg transition-shadow flex justify-center items-center gap-2"
                >
                  {t('reserveSuite')}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
                <p className="text-center text-xs text-on-surface-variant mt-4">{t('noCharge')}</p>
              </div>

              {/* Map/Location Card */}
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_32px_32px_rgba(26,28,30,0.06)] relative h-64">
                <img
                  alt={cityName}
                  className="w-full h-full object-cover opacity-80"
                  src={domain.img}
                />
                <div className="absolute inset-0 bg-primary/10"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-surface/80 backdrop-blur-md rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-primary text-sm">{stay.name}</h4>
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
            </div>
          </div>
        </div>
      </main>

      <BottomNav activeTab="stays" />
    </div>
  );
}

// Sub-components
function AmenityItem({ icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-surface-container-low p-3 rounded-full text-secondary">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <h3 className="font-semibold text-on-surface mb-1">{title}</h3>
        <p className="text-xs text-on-surface-variant">{subtitle}</p>
      </div>
    </div>
  );
}

function ReviewCard({ initial, name, date, text, offset }) {
  return (
    <div className={`bg-surface-container-lowest p-6 rounded-xl shadow-[0_32px_32px_rgba(26,28,30,0.02)] ${offset ? 'ms-0 md:ms-12' : ''}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-headline text-xl">
          {initial}
        </div>
        <div>
          <h4 className="font-semibold text-on-surface">{name}</h4>
          <p className="text-xs text-on-surface-variant">{date}</p>
        </div>
      </div>
      <p className="text-on-surface-variant italic font-serif leading-relaxed">"{text}"</p>
    </div>
  );
}
