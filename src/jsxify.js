import fs from 'fs';
import path from 'path';

const files = [
  { name: 'city-selection', out: 'Home.jsx' },
  { name: 'city-hub', out: 'Hub.jsx' },
  { name: 'bahia-palace', out: 'Place.jsx' },
  { name: 'hotel', out: 'Hotel.jsx' }
];

const processHtmlToJsx = (htmlString) => {
  let jsx = htmlString;
  
  // class to className
  jsx = jsx.replace(/class=/g, 'className=');
  
  // handle unclosed img
  jsx = jsx.replace(/<img(.*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match; 
    return "<img" + p1 + " />";
  });
  
  // handle unclosed hr
  jsx = jsx.replace(/<hr(.*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match; 
    return "<hr" + p1 + " />";
  });

  // handle unclosed input
  jsx = jsx.replace(/<input(.*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match; 
    return "<input" + p1 + " />";
  });

  // handle style strings - specific to stitched material symbols
  // handle style strings - specific to stitched material symbols
  jsx = jsx.replace(/style="font-variation-settings:\\s*'FILL'\\s*1;"/g, 'style={{ fontVariationSettings: "\\'FILL\\' 1" }}');
  jsx = jsx.replace(/style="font-variation-settings:\\s*'FILL'\\s*0;"/g, 'style={{ fontVariationSettings: "\\'FILL\\' 0" }}');
  
  // Some standard strings usually found in inline CSS
  jsx = jsx.replace(/<!--(.*?)-->/g, ''); // strip comments
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  jsx = jsx.replace(/tabindex=/g, 'tabIndex=');

  return jsx;
}

const template = (name, innerHtml) => `
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ${name}() {
  const navigate = useNavigate();
  const location = useLocation();
  const [toast, setToast] = useState(null);
  
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const currentPath = location.pathname;

  return (
    <>
    {toast && (
      <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-surface-container-highest text-on-surface px-6 py-3 rounded-full shadow-lg z-[100] border border-outline-variant/30 flex items-center gap-2 animate-bounce">
        <span className="material-symbols-outlined text-primary">info</span>
        <span className="font-label text-sm font-bold">{toast}</span>
      </div>
    )}
    <div className="relative pb-[100px]">
      ${innerHtml}
    </div>
    </>
  );
}
`;

for (const file of files) {
  const fileP = path.join(process.cwd(), 'src', file.name + '.html');
  if (!fs.existsSync(fileP)) {
    console.log('Skipping', file.name, 'not found');
    continue;
  }
  
  const content = fs.readFileSync(fileP, 'utf-8');
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let innerHtml = bodyMatch ? bodyMatch[1] : content;
  innerHtml = innerHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Transform HTML to JSX
  let jsxHtml = processHtmlToJsx(innerHtml);

  // --- SPECIFIC COMPONENT WIRING ---
  
  // Home: Wire the destinations and bottom nav
  if (file.out === 'Home.jsx') {
      jsxHtml = jsxHtml.replace(
        /onClick=\{.*?\}/g, '' // clear any old
      );
      // Hook up topbar search/menu
      jsxHtml = jsxHtml.replace(
          />menu<\/span>/,
          ' onClick={() => showToast("Menu coming soon!")}>menu</span>'
      );
      jsxHtml = jsxHtml.replace(
          />search<\/span>/,
          ' onClick={() => showToast("Search coming soon!")}>search</span>'
      );
      
      // Hook up cities 
      jsxHtml = jsxHtml.replace(
          /<div className="absolute bottom-0 left-0 p-6">[\s\S]*?Marrakech<\/h3>/m,
          '$&<button onClick={() => navigate("/hub")} className="absolute inset-0 w-full h-full cursor-pointer z-10" aria-label="Go to Marrakech"></button>'
      );
      jsxHtml = jsxHtml.replace(
          /Chefchaouen<\/h3>.*?<button.*?>(.*?)<\/button>/ms,
          (match) => match.replace('<button', '<button onClick={() => showToast("Chefchaouen details coming soon!")}')
      );
      
      // Bottom Nav hookup - we replace the <a> tags with <button>
      jsxHtml = jsxHtml.replace(/<a(.*?)Explore<\\/span>\\s*<\\/a>/s, 
          '<button className="flex flex-col items-center justify-center text-[#003857] dark:text-sky-200 transition-all scale-110" onClick={() => navigate("/")}><span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "\\'FILL\\' 1" }}>explore</span><span className="font-[\\'Plus_Jakarta_Sans\\'] text-[10px] uppercase tracking-widest font-bold">Explore</span></button>'
      );
      jsxHtml = jsxHtml.replace(/<a(.*?)Destinations<\/span>\s*<\/a>/s, 
          '<button className="flex flex-col items-center justify-center text-[#1a1c1e]/50 dark:text-slate-500 hover:text-[#536343] dark:hover:text-emerald-400 transition-colors" onClick={() => navigate("/")}><span className="material-symbols-outlined mb-1">location_city</span><span className="font-[\'Plus_Jakarta_Sans\'] text-[10px] uppercase tracking-widest font-bold">Destinations</span></button>'
      );
      jsxHtml = jsxHtml.replace(/<a(.*?)Saved<\/span>\s*<\/a>/s, 
          '<button className="flex flex-col items-center justify-center text-[#1a1c1e]/50 dark:text-slate-500 hover:text-[#536343] dark:hover:text-emerald-400 transition-colors" onClick={() => showToast("Saved places coming soon!")}><span className="material-symbols-outlined mb-1">bookmark</span><span className="font-[\'Plus_Jakarta_Sans\'] text-[10px] uppercase tracking-widest font-bold">Saved</span></button>'
      );
      jsxHtml = jsxHtml.replace(/<a(.*?)Journal<\/span>\s*<\/a>/s, 
          '<button className="flex flex-col items-center justify-center text-[#1a1c1e]/50 dark:text-slate-500 hover:text-[#536343] dark:hover:text-emerald-400 transition-colors" onClick={() => showToast("Journal entries coming soon!")}><span className="material-symbols-outlined mb-1">menu_book</span><span className="font-[\'Plus_Jakarta_Sans\'] text-[10px] uppercase tracking-widest font-bold">Journal</span></button>'
      );
  }

  // Hub: Wire up the elements inside City Hub to Place and Hotel
  if (file.out === 'Hub.jsx') {
      // Wire back button
      jsxHtml = jsxHtml.replace(
          />arrow_back<\/span>/,
          ' onClick={() => navigate("/")}>arrow_back</span>'
      );
      // Wire Bahia Palace Card
      jsxHtml = jsxHtml.replace(
          /Bahia Palace<\/h4>/,
          'Bahia Palace</h4><button onClick={() => navigate("/place")} className="absolute inset-0 w-full h-full cursor-pointer z-10" aria-label="Go to Bahia Palace"></button>'
      );
      // Wire La Mamounia Card
      jsxHtml = jsxHtml.replace(
          /La Mamounia<\/h4>/,
          'La Mamounia</h4><button onClick={() => navigate("/hotel")} className="absolute inset-0 w-full h-full cursor-pointer z-10" aria-label="Go to La Mamounia"></button>'
      );
  }

  // Place: Wire back button inside Bahia Palace
  if (file.out === 'Place.jsx') {
       jsxHtml = jsxHtml.replace(
          />arrow_back<\/span>/,
          ' onClick={() => navigate("/hub")}>arrow_back</span>'
      );
  }

  // Hotel: Wire back button inside La Mamounia
  if (file.out === 'Hotel.jsx') {
       jsxHtml = jsxHtml.replace(
          />arrow_back_ios_new<\/span>/,
          ' onClick={() => navigate("/hub")}>arrow_back_ios_new</span>'
      );
  }

  // Convert and Write to file
  const jsxName = file.out.replace('.jsx', '');
  fs.writeFileSync(path.join(process.cwd(), 'src', file.out), template(jsxName, jsxHtml));
  console.log('Processed', file.out);
}
