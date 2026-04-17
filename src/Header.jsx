import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const LANGS = [
  { code: 'en', flag: '🇬🇧' },
  { code: 'fr', flag: '🇫🇷' },
  { code: 'es', flag: '🇪🇸' },
  { code: 'ar', flag: '🇲🇦' },
];

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const current = LANGS.find(l => l.code === language) || LANGS[0];

  const langLabelMap = {
    en: 'langEn',
    fr: 'langFr',
    es: 'langEs',
    ar: 'langAr',
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-sky-50 transition-colors text-sky-900 text-sm font-medium"
        aria-label="Change language"
      >
        <span className="text-lg leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{t(langLabelMap[language])}</span>
        <span className="material-symbols-outlined text-base transition-transform" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)' }}>
          expand_more
        </span>
      </button>

      {open && (
        <div className="absolute end-0 top-full mt-2 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,56,87,0.15)] border border-sky-100 overflow-hidden min-w-[180px] z-[99] animate-[fadeSlideIn_0.2s_ease-out]">
          {LANGS.map(lang => (
            <button
              key={lang.code}
              onClick={() => { setLanguage(lang.code); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-5 py-3.5 text-sm transition-colors ${
                language === lang.code
                  ? 'bg-sky-50 text-sky-900 font-bold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{t(langLabelMap[lang.code])}</span>
              {language === lang.code && (
                <span className="material-symbols-outlined text-sky-600 text-base ms-auto">check</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header({ activeTab = 'explore', mobileTitle = '', onSearchClick }) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <>
      {/* TopNavBar (Web) */}
      <header className="hidden md:flex fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm transition-transform duration-200 ease-in-out">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
          {/* Brand */}
          <div 
            onClick={() => navigate('/')}
            className="font-serif italic text-2xl text-sky-900 font-headline font-bold cursor-pointer"
          >
            {t('brandName')}
          </div>
          
          {/* Navigation Links */}
          <nav className="flex gap-8 items-center">
            <a 
              href="/" 
              className={activeTab === 'explore' 
                ? "text-sky-900 font-bold border-b-2 border-sky-900 pb-1 text-sm tracking-wide" 
                : "text-slate-500 font-medium hover:text-sky-700 transition-colors text-sm tracking-wide"}
            >
              {t('navExplore')}
            </a>
            <a 
              href="/hotel" 
              className={activeTab === 'stays' 
                ? "text-sky-900 font-bold border-b-2 border-sky-900 pb-1 text-sm tracking-wide" 
                : "text-slate-500 font-medium hover:text-sky-700 transition-colors text-sm tracking-wide"}
            >
              {t('navStays')}
            </a>
            <a 
              href="/place" 
              className={activeTab === 'history' 
                ? "text-sky-900 font-bold border-b-2 border-sky-900 pb-1 text-sm tracking-wide" 
                : "text-slate-500 font-medium hover:text-sky-700 transition-colors text-sm tracking-wide"}
            >
              {t('navHistory')}
            </a>
          </nav>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </header>

      {/* Mobile App Bar */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl flex justify-between items-center px-6 py-4 md:hidden">
        {mobileTitle ? (
           <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 transition-transform duration-300 scale-95 active:scale-90 hover:bg-[#f3f3f7] rounded-full">
             <span className="material-symbols-outlined text-[#003857]" data-icon="arrow_back">arrow_back</span>
           </button>
        ) : (
           <div className="w-10"></div>
        )}
        
        <h1 className="font-serif text-[#1a1c1e] text-xl font-headline font-bold italic">
          {mobileTitle || t('brandName')}
        </h1>
        
        <LanguageSwitcher />
      </header>
    </>
  );
}
