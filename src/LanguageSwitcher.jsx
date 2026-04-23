import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const FlagEn = () => (
  <svg viewBox="0 0 640 480" className="w-full h-full rounded-sm">
    <path fill="#012169" d="M0 0h640v480H0z"/>
    <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
    <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zM227 199 0 32V0l270 199h-43zm55 82L42 480H0l240-179h42zm59-82L596 0h44L385 199h-44z"/>
    <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
    <path fill="#C8102E" d="M0 193v95h640v-95H0zM273 0v480h95V0h-95z"/>
  </svg>
);

const FlagFr = () => (
  <svg viewBox="0 0 640 480" className="w-full h-full rounded-sm">
    <path fill="#fff" d="M0 0h640v480H0z"/>
    <path fill="#00267f" d="M0 0h213.3v480H0z"/>
    <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
  </svg>
);

const FlagEs = () => (
  <svg viewBox="0 0 640 480" className="w-full h-full rounded-sm">
    <path fill="#f1bf00" d="M0 0h640v480H0z"/>
    <path fill="#c60b1e" d="M0 0h640v120H0zm0 360h640v120H0z"/>
    <path fill="#8b3133" d="M154 158v114h78V158h-78z"/>
  </svg>
);

const FlagAr = () => (
  <svg viewBox="0 0 640 480" className="w-full h-full rounded-sm">
    <path fill="#c1272d" d="M0 0h640v480H0z"/>
    <path fill="#006233" d="M320 179.4L334.7 225h47.9l-38.7 28.2 14.8 45.6-38.7-28.1-38.7 28.1 14.8-45.6-38.8-28.2h48z"/>
  </svg>
);

export const LANGS = [
  { code: 'en', flag: <FlagEn /> },
  { code: 'fr', flag: <FlagFr /> },
  { code: 'es', flag: <FlagEs /> },
  { code: 'ar', flag: <FlagAr /> },
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
        <span className="w-5 h-4 flex items-center justify-center shrink-0">{current.flag}</span>
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
              <span className="w-5 h-4 flex items-center justify-center shrink-0">{lang.flag}</span>
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
