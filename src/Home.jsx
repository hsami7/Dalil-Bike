import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DOMAINS } from './data';
import Header from './Header';
import BottomNav from './BottomNav';
import { useLanguage } from './LanguageContext';

// Helper for fuzzy matching (Levenshtein distance)
function getLevenshteinDistance(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const d = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) d[i][0] = i;
  for (let j = 0; j <= n; j++) d[0][j] = j;

  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= m; i++) {
      if (s1[i - 1] === s2[j - 1]) d[i][j] = d[i - 1][j - 1];
      else d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + 1);
    }
  }
  return d[m][n];
}

export default function Home() {
  const navigate = useNavigate();
  const { t, tCity, tContent } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);

  // Sophisticated search ranking and filtering
  const processSearch = () => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return { finalResults: DOMAINS, autocorrectedFrom: null, suggestion: null };

    // 1. Calculate scores for all domains
    const scoredResults = DOMAINS.map(city => {
      const cityName = city.name.toLowerCase();
      let score = 0;

      // Type 1: Exact Start (Highest priority)
      if (cityName.startsWith(term)) {
        score = 100;
      }
      // Type 2: Contains Name
      else if (cityName.includes(term)) {
        score = 80;
      }
      // Type 3: Contains in Tagline/Desc
      else if (city.tagline?.toLowerCase().includes(term) || city.desc.toLowerCase().includes(term)) {
        score = 50;
      }
      // Type 4: Fuzzy Match (Levenshtein)
      else {
        const distance = getLevenshteinDistance(term, cityName);
        // Only consider if distance is small compared to length
        if (distance <= 2) {
          score = 40;
        } else if (term.length > 3 && distance <= 3) {
          score = 20;
        }
      }

      return { city, score };
    }).filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);

    const results = scoredResults.map(item => item.city);
    
    // Determine if we need to show the "Showing results for..." banner
    const hasExact = scoredResults.some(item => item.score >= 50);
    const autocorrectedFrom = (!hasExact && results.length > 0) ? searchTerm : null;

    // Suggestion logic for very distant matches
    let suggestion = null;
    if (results.length === 0 && term.length > 2) {
      const bestMatch = DOMAINS.map(city => ({
        city,
        distance: getLevenshteinDistance(term, city.name.toLowerCase())
      })).sort((a, b) => a.distance - b.distance)[0];
      
      if (bestMatch.distance <= 4) {
        suggestion = bestMatch.city;
      }
    }

    return { finalResults: results, autocorrectedFrom, suggestion };
  };

  const { finalResults, autocorrectedFrom, suggestion } = processSearch();

  const handleSearchFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
      searchInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const recommendedCities = DOMAINS.slice(0, 3); // Marrakech, Fez, Casablanca

  return (
    <>
      <Header activeTab="explore" onSearchClick={handleSearchFocus} />
      
      <main className="pt-0 md:pt-20 pb-24">
        {/* Hero Section */}
        <section className="relative w-full h-[614px] md:h-[768px] flex flex-col justify-center items-center px-6 overflow-hidden">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              alt="Royal Palace of Fez" 
              className="w-full h-full object-cover object-center scale-105" 
              src="https://www.franceinfo.fr/pictures/59sAu-qqo0UM84yqVEPCdMOPxdU/0x14:6361x3575/1024x576/filters:format(avif):quality(50)/2019/06/03/phpriESYi.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-surface text-on-surface"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-3xl mx-auto text-center mt-auto mb-16 md:mb-24">
            <h1 className="font-headline text-5xl md:text-7xl text-white md:text-on-surface mb-6 drop-shadow-sm font-medium tracking-tight" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.8)' }}>
              {t('heroTitle')}
            </h1>
            
            {/* Search Bar */}
            <div className="relative w-full max-w-xl mx-auto bg-surface-container-high rounded-full flex items-center px-2 py-2 focus-within:bg-surface-container-highest focus-within:shadow-[0_0_0_2px_#9dcbf4] transition-all duration-300">
              <span className="material-symbols-outlined text-on-surface-variant ml-4">search</span>
              <input 
                ref={searchInputRef}
                className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-outline py-3 px-4 font-body text-base outline-none" 
                placeholder={t('searchPlaceholder')} 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                onClick={() => setSearchTerm(searchTerm)}
                className="bg-gradient-to-br from-primary to-primary-container text-white rounded-full px-6 py-3 font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                {t('searchButton')}
              </button>
            </div>
          </div>
        </section>

        {/* Curated Destinations (Bento Grid) */}
        <section className="bg-surface-container-low py-16 md:py-24 px-6 rounded-t-[2.5rem] md:rounded-none -mt-8 relative z-20">
          <div className="max-w-screen-xl mx-auto">
            <header className="mb-10 md:mb-16 ml-0 md:ml-12">
              <h2 className="font-headline text-3xl md:text-4xl text-on-surface font-medium tracking-tight">
                {searchTerm 
                  ? (finalResults.length > 0 ? `${t('discovering')} "${searchTerm}"` : `${t('noMatches')} "${searchTerm}"`)
                  : t('editorSelection')}
              </h2>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mt-2">
                <p className="font-body text-on-surface-variant text-sm md:text-base max-w-md">
                  {searchTerm 
                    ? (finalResults.length > 0 
                        ? t('showingResults').replace('{count}', finalResults.length).replace('{s}', finalResults.length > 1 ? 's' : '')
                        : suggestion 
                          ? t('noExactMatch')
                          : t('trySearching'))
                    : t('editorSubtitle')
                  }
                </p>
                {autocorrectedFrom && (
                  <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium border border-primary/20">
                    <span className="material-symbols-outlined text-base">auto_fix_high</span>
                    <span>{t('showingResultsFor')} <strong>{finalResults[0].name}</strong> {t('instead')}</span>
                    <button onClick={() => setSearchTerm('')} className="ms-2 hover:underline opacity-70">{t('clear')}</button>
                  </div>
                )}
              </div>
            </header>

            {finalResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[300px]">
                {finalResults.map(city => (
                  <article 
                    key={city.id}
                    className={`${city.cols} group rounded-xl overflow-hidden relative bg-surface-container-lowest cursor-pointer shadow-[0_4px_32px_rgba(26,28,30,0.06)]`}
                    onClick={() => navigate(`/hub?city=${city.id}`)}
                  >
                    <img 
                      alt={city.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out object-center" 
                      src={city.img}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      {city.id === 'marrakech' && (
                        <span className="inline-block bg-tertiary/90 backdrop-blur-sm text-on-tertiary text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-3">
                          {t('mustSee')}
                        </span>
                      )}
                      <h3 className="font-headline text-4xl md:text-5xl text-white font-medium mb-1 drop-shadow-md">{tCity(city.id)}</h3>
                      <p className="font-body text-white/90 text-sm max-w-xl line-clamp-2 pb-2">{tContent('desc', city.id)}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="py-12">
                <div className="text-center py-20 bg-surface-container-highest rounded-[2rem] mb-16 shadow-inner border border-outline-variant/30">
                  <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-6 opacity-50">search_off</span>
                  
                  {suggestion ? (
                    <div className="px-6">
                      <p className="text-on-surface font-headline text-2xl md:text-3xl mb-4">
                        {t('didYouMean')} <button 
                          onClick={() => navigate(`/hub?city=${suggestion.id}`)}
                          className="text-primary font-bold hover:underline italic underline-offset-8 decoration-primary/30"
                        >
                          {suggestion.name}
                        </button>?
                      </p>
                      <p className="text-on-surface-variant font-body mb-8">{t('clickAbove')}</p>
                    </div>
                  ) : (
                    <p className="text-on-surface-variant font-body text-lg mb-8 px-6">{t('noResults')}</p>
                  )}

                  <button 
                    onClick={() => setSearchTerm('')}
                    className="text-primary font-medium hover:bg-primary/5 px-6 py-2 rounded-full transition-colors flex items-center justify-center gap-2 mx-auto"
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                    {t('clearSearch')}
                  </button>
                </div>

                <div className="max-w-screen-xl mx-auto px-4 md:px-0">
                   <div className="flex justify-between items-end mb-10">
                     <div>
                       <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">{t('topDestinations')}</span>
                       <h3 className="font-headline text-3xl md:text-4xl text-on-surface font-medium">{t('recommendedForYou')}</h3>
                     </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {recommendedCities.map(city => (
                       <article 
                        key={city.id}
                        className="group rounded-2xl overflow-hidden relative h-[380px] bg-surface-container-lowest cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        onClick={() => navigate(`/hub?city=${city.id}`)}
                       >
                         <img src={city.img} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                         <div className="absolute bottom-0 left-0 p-8">
                           <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full mb-3 border border-white/30">{t('trending')}</span>
                           <h4 className="text-white font-headline text-3xl font-medium mb-1">{tCity(city.id)}</h4>
                           <p className="text-white/70 text-sm font-body line-clamp-1">{tContent('tagline', city.id)}</p>
                         </div>
                       </article>
                     ))}
                   </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <BottomNav activeTab="explore" />
    </>
  );
}
