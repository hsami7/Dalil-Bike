import React from 'react';

export default function CityMedia({ city, className = "", imgClassName = "" }) {
  // Priority 1: Local High-Quality Video
  if (city.videoPath) {
    return (
      <div className={`relative w-full h-full overflow-hidden ${className}`}>
        {/* Fallback Image */}
        <img 
          src={city.img} 
          alt={city.name} 
          className={`absolute inset-0 w-full h-full object-cover z-0 ${imgClassName}`} 
        />
        <video
          src={city.videoPath}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        <div className="absolute inset-0 z-20 bg-black/10"></div>
      </div>
    );
  }

  // Priority 2: YouTube Embed
  if (city.videoId) {
    const videoUrl = `https://www.youtube.com/embed/${city.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${city.videoId}&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&enablejsapi=1&origin=${window.location.origin}`;

    return (
      <div className={`relative w-full h-full overflow-hidden ${className}`}>
        <img 
          src={city.img} 
          alt={city.name} 
          className={`absolute inset-0 w-full h-full object-cover z-0 ${imgClassName}`} 
        />
        
        <div className="absolute inset-0 z-10 pointer-events-none select-none">
          <iframe
            src={videoUrl}
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.77vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            frameBorder="0"
            allow="autoplay; fullscreen"
            title={`Background video of ${city.name}`}
            style={{ 
              pointerEvents: 'none',
              userSelect: 'none'
            }}
          ></iframe>
        </div>
        
        <div className="absolute inset-0 z-20 bg-black/10 transition-opacity duration-1000"></div>
      </div>
    );
  }

  // Fallback: Static Image
  return (
    <img 
      src={city.img} 
      alt={city.name} 
      className={`w-full h-full object-cover ${imgClassName} ${className}`} 
    />
  );
}
