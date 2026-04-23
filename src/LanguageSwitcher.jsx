import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export const LANGS = [
  { code: 'en', flag: 'https://flagcdn.com/gb.svg', alt: 'English' },
  { code: 'fr', flag: 'https://flagcdn.com/fr.svg', alt: 'Français' },
  { code: 'es', flag: 'https://flagcdn.com/es.svg', alt: 'Español' },
  { code: 'ar', flag: 'https://flagcdn.com/ma.svg', alt: 'العربية' },
];

export default function LanguageSwitcher() {
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
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-sky-100 hover:bg-sky-50 transition-all text-sky-900 text-sm font-medium shadow-sm"
        aria-label="Change language"
      >
        <img
          src={current.flag}
          alt={current.alt}
          className="w-5 h-3.5 object-cover rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] border border-white/50"
        />
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
              className={`w-full flex items-center gap-3 px-5 py-3.5 text-sm transition-colors ${language === lang.code
                ? 'bg-sky-50 text-sky-900 font-bold'
                : 'text-slate-600 hover:bg-slate-50'
                }`}
            >
              <img
                src={lang.flag}
                alt={lang.alt}
                className="w-5 h-3.5 object-cover rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)] border border-white/50"
              />
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

