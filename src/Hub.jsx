import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DOMAINS, LANDMARKS, HOTELS } from './data';
import Header from './Header';
import BottomNav from './BottomNav';
import { useLanguage } from './LanguageContext';
import CityMedia from './components/CityMedia';

export default function Hub() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, tCity, tContent, language } = useLanguage();
  const historyRef = useRef(null);
  const staysRef = useRef(null);
  
  const searchParams = new URLSearchParams(location.search);
  const cityId = searchParams.get('city') || 'marrakech';
  const initialTab = searchParams.get('tab') || 'all';
  
  const [activeTab, setActiveTab] = useState(initialTab);
  const domain = DOMAINS.find(d => d.id === cityId) || DOMAINS[0];

  // Filter landmarks and hotels for this city
  const cityLandmarks = LANDMARKS.filter(l => l.cityId === cityId);
  const cityHotels = HOTELS.filter(h => h.cityId === cityId);

  useEffect(() => {
    // If a specific tab was requested, scroll to it
    if (initialTab === 'history') {
      historyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (initialTab === 'stays') {
      staysRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [initialTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Update URL without full refresh to stay in sync
    const params = new URLSearchParams(location.search);
    params.set('tab', tab);
    navigate({ search: params.toString() }, { replace: true });
    
    // Smooth scroll to section if not "all"
    if (tab === 'history') {
      historyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (tab === 'stays') {
      staysRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <Header activeTab="explore" mobileTitle={tCity(domain.id)} />
      
      <main className="w-full">
        {/* Hero Section (Immersive Bleed) */}
        <section className="relative w-full h-[614px] lg:h-[768px] min-h-[400px] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <CityMedia 
              city={domain} 
              imgClassName="object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
          </div>
          <div className="relative z-10 px-6 lg:px-12 pb-12 max-w-screen-2xl mx-auto w-full">
            <span className="inline-block px-3 py-1 bg-surface/70 backdrop-blur-xl text-primary font-semibold text-[0.75rem] uppercase tracking-wider rounded-full mb-4 border border-outline-variant/30">
              {t('morocco')}
            </span>
            <h1 className="font-headline text-[3.5rem] lg:text-[5rem] leading-none text-primary italic font-bold tracking-tight mb-4 drop-shadow-sm">
              {tCity(domain.id)}
            </h1>
            <p className="text-on-surface-variant max-w-lg text-lg font-body leading-relaxed">
              {tContent('desc', domain.id)}
            </p>
          </div>
        </section>

        {/* Filters (Sticky Tab Bar) */}
        <section className="sticky top-[72px] z-30 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 px-6 md:px-12 py-4">
          <div className="max-w-screen-2xl mx-auto flex space-x-3 overflow-x-auto no-scrollbar">
            <button 
              onClick={() => handleTabChange('all')}
              className={`flex-shrink-0 px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                activeTab === 'all' 
                ? 'bg-primary text-on-primary shadow-md' 
                : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-low border border-outline-variant/30'
              }`}
            >
              {t('allDiscoveries')}
            </button>
            <button 
              onClick={() => handleTabChange('history')}
              className={`flex-shrink-0 px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                activeTab === 'history' 
                ? 'bg-primary text-on-primary shadow-md' 
                : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-low border border-outline-variant/30'
              }`}
            >
              {t('historicalLandmarks')}
            </button>
            <button 
              onClick={() => handleTabChange('stays')}
              className={`flex-shrink-0 px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                activeTab === 'stays' 
                ? 'bg-primary text-on-primary shadow-md' 
                : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-low border border-outline-variant/30'
              }`}
            >
              {t('recommendedHotels')}
            </button>
          </div>
        </section>

        {/* Historical Landmarks Section */}
        {(activeTab === 'all' || activeTab === 'history') && (
          <section ref={historyRef} className="px-6 md:px-12 py-16 md:py-24 max-w-screen-2xl mx-auto w-full scroll-mt-32">
            <div className="mb-12">
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">{t('echoesOfCrown')}</span>
              <h2 className="font-headline text-3xl md:text-4xl text-on-surface font-medium">{t('historicalLandmarks')}</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {cityLandmarks.map((landmark) => (
                <article 
                  key={landmark.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 group cursor-pointer"
                  onClick={() => navigate(`/place/${landmark.id}`)}
                >
                  <div className="lg:col-span-12">
                    <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-xl border border-outline-variant/20 flex flex-col md:flex-row h-full md:h-[500px] transition-transform duration-500 hover:-translate-y-1">
                      <div className="md:w-3/5 h-[300px] md:h-full overflow-hidden relative">
                        <img 
                          alt={tContent('historyName', landmark.id)} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                          src={landmark.img} 
                        />
                        <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-xl border border-white/30 px-4 py-2 rounded-full">
                           <span className="text-white font-bold text-xs uppercase tracking-widest">{tContent('historyPeriod', landmark.id)}</span>
                        </div>
                      </div>
                      <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="font-headline text-3xl md:text-5xl text-on-surface mb-6 font-medium leading-tight italic">{tContent('historyName', landmark.id)}</h3>
                        <p className="text-on-surface-variant text-lg leading-relaxed mb-8 line-clamp-4">
                          {tContent('historyDesc', landmark.id)}
                        </p>
                        <div className="flex items-center gap-4 text-primary font-bold hover:underline">
                          <span>{t('exploreLandmark')}</span>
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Recommended Hotels Section */}
        {(activeTab === 'all' || activeTab === 'stays') && (
          <section ref={staysRef} className="bg-surface-container-low py-16 md:py-24 w-full scroll-mt-32">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
              <div className="mb-12">
                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">{t('sanctuariesStays')}</span>
                <h2 className="font-headline text-3xl md:text-4xl text-on-surface font-medium">{t('curatedAccommodations')}</h2>
              </div>
              
              <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-8">
                {cityHotels.map((hotel) => (
                  <article 
                    key={hotel.id}
                    className="flex-shrink-0 w-80 md:w-[450px] bg-surface-container-lowest rounded-3xl overflow-hidden shadow-lg group cursor-pointer border border-outline-variant/20 transition-all hover:shadow-2xl"
                    onClick={() => navigate(`/hotel/${cityId}/${hotel.id}`)}
                  >
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img 
                        alt={tContent('stayName', hotel.id)} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        src={hotel.img} 
                      />
                      <div className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur-md px-4 py-2 rounded-xl">
                        <span className="text-on-primary font-bold text-lg">{hotel.price}</span>
                        <span className="text-on-primary/70 text-xs font-medium ml-1">{t('perNight')}</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-headline text-2xl md:text-3xl text-on-surface font-medium group-hover:text-primary transition-colors italic">
                          {tContent('stayName', hotel.id)}
                        </h3>
                      </div>
                      <p className="text-on-surface-variant text-base line-clamp-3 mb-6 leading-relaxed">
                        {tContent('stayDesc', hotel.id)}
                      </p>
                      <div className="flex items-center text-sm font-semibold text-secondary">
                        <span className="material-symbols-outlined text-xl me-2">location_on</span>
                        {t('premiumLocation')}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <BottomNav activeTab="explore" />
    </div>
  );
}
