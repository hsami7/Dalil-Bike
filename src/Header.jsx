import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header({ activeTab = 'explore', mobileTitle = '', onSearchClick }) {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (onSearchClick) {
      onSearchClick();
    } else {
      alert("Search is available on the Home page.");
    }
  };

  return (
    <>
      {/* TopNavBar (Web) - Matches Home.jsx Reference */}
      <header className="hidden md:flex fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm transition-transform duration-200 ease-in-out">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
          {/* Brand */}
          <div 
            onClick={() => navigate('/')}
            className="font-serif italic text-2xl text-sky-900 font-headline font-bold cursor-pointer"
          >
            Tourist Guide
          </div>
          
          {/* Navigation Links */}
          <nav className="flex gap-8 items-center">
            <a 
              href="/" 
              className={activeTab === 'explore' 
                ? "text-sky-900 font-bold border-b-2 border-sky-900 pb-1 text-sm tracking-wide" 
                : "text-slate-500 font-medium hover:text-sky-700 transition-colors text-sm tracking-wide"}
            >
              Explore
            </a>
            <a 
              href="/hotel" 
              className={activeTab === 'stays' 
                ? "text-sky-900 font-bold border-b-2 border-sky-900 pb-1 text-sm tracking-wide" 
                : "text-slate-500 font-medium hover:text-sky-700 transition-colors text-sm tracking-wide"}
            >
              Stays
            </a>
            <a 
              href="/place" 
              className={activeTab === 'history' 
                ? "text-sky-900 font-bold border-b-2 border-sky-900 pb-1 text-sm tracking-wide" 
                : "text-slate-500 font-medium hover:text-sky-700 transition-colors text-sm tracking-wide"}
            >
              History
            </a>
          </nav>

          {/* Trailing Actions Removed */}
          <div className="md:w-[80px]"></div> {/* Spacer to maintain layout balance if needed, or just empty */}
        </div>
      </header>

      {/* Mobile App Bar - Dynamic based on page */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl flex justify-between items-center px-6 py-4 md:hidden">
        {mobileTitle ? (
           <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 transition-transform duration-300 scale-95 active:scale-90 hover:bg-[#f3f3f7] rounded-full">
             <span className="material-symbols-outlined text-[#003857]" data-icon="arrow_back">arrow_back</span>
           </button>
        ) : (
           <div className="w-10"></div>
        )}
        
        <h1 className="font-serif text-[#1a1c1e] text-xl font-headline font-bold italic">
          {mobileTitle || "Tourist Guide"}
        </h1>
        
        <div className="w-10"></div> {/* Placeholder for removed person icon */}
      </header>
    </>
  );
}
