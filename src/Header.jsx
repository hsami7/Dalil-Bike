import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

function DalilBikeLogo({ scale = 1, transformOrigin = 'center center' }) {
  const height = Math.round(50 * scale);
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '40px' }}>
      <img
        src="/src/assets/just_dalil_bike_logo.png"
        alt="Dalil Bike"
        style={{
          height: height,
          width: 'auto',
          objectFit: 'contain',
          transform: `scale(${4.0 * scale})`,
          transformOrigin: transformOrigin,
          marginLeft: '0px'
        }}
      />
    </div>
  );
}

import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ activeTab = 'explore', mobileTitle = '', onSearchClick }) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <>
      {/* TopNavBar (Web) */}
      <header className="hidden lg:flex fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm transition-transform duration-200 ease-in-out">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
          {/* Brand */}
          <div onClick={() => navigate('/explore')} className="cursor-pointer">
            <DalilBikeLogo scale={1} transformOrigin="left center" />
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-8 items-center">
            <a
              href="/explore"
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
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl grid grid-cols-[100px_1fr_100px] items-center px-6 py-4 lg:hidden">
        <div className="flex justify-start">
          {mobileTitle ? (
            <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 transition-transform duration-300 scale-95 active:scale-90 hover:bg-[#f3f3f7] rounded-full">
              <span className="material-symbols-outlined text-[#003857]" data-icon="arrow_back">arrow_back</span>
            </button>
          ) : (
            <div className="w-10"></div>
          )}
        </div>

        <div className="flex justify-center">
          <h1 className="font-serif text-[#1a1c1e] text-xl font-headline font-bold italic">
            {mobileTitle || <DalilBikeLogo scale={0.8} transformOrigin="center center" />}
          </h1>
        </div>

        <div className="flex justify-end">
          <LanguageSwitcher />
        </div>
      </header>
    </>
  );
}
