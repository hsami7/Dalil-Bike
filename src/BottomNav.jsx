import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

export default function BottomNav({ activeTab = 'explore' }) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.06)] flex justify-around items-center px-4 pb-6 pt-3 font-sans text-[10px] font-semibold uppercase tracking-wider">
      {/* Explore Tab */}
      <button 
        onClick={() => navigate('/')}
        className={activeTab === 'explore' 
          ? "flex flex-col items-center justify-center bg-sky-100 text-sky-900 rounded-xl px-5 py-1.5 scale-90 transition-transform" 
          : "flex flex-col items-center justify-center text-slate-400 px-5 py-1.5 hover:bg-slate-100 rounded-xl transition-colors"}
      >
        <span 
          className="material-symbols-outlined mb-1" 
          data-icon="explore" 
          data-weight={activeTab === 'explore' ? "fill" : undefined}
          style={activeTab === 'explore' ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          explore
        </span>
        <span>{t('bottomDiscover')}</span>
      </button>

      {/* Stays Tab */}
      <button 
        onClick={() => navigate('/hotel')}
        className={activeTab === 'stays' 
          ? "flex flex-col items-center justify-center bg-sky-100 text-sky-900 rounded-xl px-5 py-1.5 scale-90 transition-transform" 
          : "flex flex-col items-center justify-center text-slate-400 px-5 py-1.5 hover:bg-slate-100 rounded-xl transition-colors"}
      >
        <span 
          className="material-symbols-outlined mb-1" 
          data-icon="location_city"
          data-weight={activeTab === 'stays' ? "fill" : undefined}
          style={activeTab === 'stays' ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          location_city
        </span>
        <span>{t('bottomStays')}</span>
      </button>

      {/* History Tab */}
      <button 
        onClick={() => navigate('/place')}
        className={activeTab === 'history' 
          ? "flex flex-col items-center justify-center bg-sky-100 text-sky-900 rounded-xl px-5 py-1.5 scale-90 transition-transform" 
          : "flex flex-col items-center justify-center text-slate-400 px-5 py-1.5 hover:bg-slate-100 rounded-xl transition-colors"}
      >
        <span 
          className="material-symbols-outlined mb-1" 
          data-icon="bookmark"
          data-weight={activeTab === 'history' ? "fill" : undefined}
          style={activeTab === 'history' ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          bookmark
        </span>
        <span>{t('bottomHistory')}</span>
      </button>
    </nav>
  );
}
