import { useState, useEffect } from 'react';
import { HOTEL_IMAGES } from './data/hotel-images';
import { HISTORY_IMAGES } from './data/history-images';

function collectAllUrls() {
  const urls = new Set();

  for (const city of DOMAINS) {
    if (city.img) urls.add(city.img);
    // These are now linked to HOTEL_IMAGES/HISTORY_IMAGES in src/data.js
    if (city.stay?.img) urls.add(city.stay.img);
    if (city.history?.img) urls.add(city.history.img);
  }

  // Preload all gallery images as well
  for (const photos of Object.values(HOTEL_IMAGES)) {
    if (photos.primary) urls.add(photos.primary);
    for (const url of photos.gallery) urls.add(url);
  }
  for (const photos of Object.values(HISTORY_IMAGES)) {
    if (photos.primary) urls.add(photos.primary);
    for (const url of photos.gallery) urls.add(url);
  }

  return [...urls];
}

export default function ImagePreloader({ children }) {
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const urls = collectAllUrls();
    setTotal(urls.length);

    let count = 0;
    const done = () => {
      count++;
      setLoaded(count);
      if (count >= urls.length) setReady(true);
    };

    for (const url of urls) {
      const img = new Image();
      img.onload = done;
      img.onerror = done;
      img.src = url;
    }
  }, []);

  if (!ready) {
    const pct = total > 0 ? Math.round((loaded / total) * 100) : 0;
    return (
      <div className="fixed inset-0 bg-surface flex flex-col items-center justify-center gap-6 z-50">
        <span className="font-headline text-primary text-2xl tracking-widest uppercase">Morocco</span>
        <div className="w-48 h-1 bg-surface-container-high rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-on-surface-variant text-xs tabular-nums">{pct}%</span>
      </div>
    );
  }

  return children;
}
