import React, { createContext, useContext, useState, useEffect } from 'react';
import translations, { cityNames } from './translations';
import contentTranslations from './content-translations';

const LanguageContext = createContext();

const STORAGE_KEY = 'dalil-bike-lang';

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // localStorage unavailable
    }
    // Set dir attribute for RTL support (Arabic)
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  // Translate a city id (e.g. 'fes') to its localized name
  const tCity = (cityId) => {
    return cityNames[language]?.[cityId] || cityNames.en[cityId] || cityId;
  };

  // Translate content data: tContent('desc', 'marrakech') or tContent('stayName', 'fes')
  const tContent = (field, cityId) => {
    return contentTranslations[field]?.[language]?.[cityId]
      || contentTranslations[field]?.en?.[cityId]
      || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tCity, tContent }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
