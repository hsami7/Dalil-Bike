import { HOTEL_IMAGES } from './data/hotel-images';
import { HISTORY_IMAGES } from './data/history-images';

export const LANDMARKS = [
  { id: "marrakech", cityId: "marrakech", imageKey: "marrakech_jemaa_el_fnaa", img: HISTORY_IMAGES.marrakech_jemaa_el_fnaa.primary },
  { id: "fes", cityId: "fes", imageKey: "fez_fes_el_bali", img: HISTORY_IMAGES.fez_fes_el_bali.primary },
  { id: "fes_bab_bou_jeloud", cityId: "fes", imageKey: "fes_bab_bou_jeloud", img: HISTORY_IMAGES.fes_bab_bou_jeloud.primary },
  { id: "fes_chouara_tannery", cityId: "fes", imageKey: "fes_chouara_tannery", img: HISTORY_IMAGES.fes_chouara_tannery.primary },
  { id: "fes_al_quaraouiyine", cityId: "fes", imageKey: "fes_al_quaraouiyine", img: HISTORY_IMAGES.fes_al_quaraouiyine.primary },
  { id: "fes_musee_batha", cityId: "fes", imageKey: "fes_musee_batha", img: HISTORY_IMAGES.fes_musee_batha.primary },
  { id: "casablanca", cityId: "casablanca", imageKey: "casablanca_hassan_ii_mosque", img: HISTORY_IMAGES.casablanca_hassan_ii_mosque.primary },
  { id: "chefchaouen", cityId: "chefchaouen", imageKey: "chefchaouen_blue_medina", img: HISTORY_IMAGES.chefchaouen_blue_medina.primary },
  { id: "rabat", cityId: "rabat", imageKey: "rabat_hassan_tower", img: HISTORY_IMAGES.rabat_hassan_tower.primary },
  { id: "meknes", cityId: "meknes", imageKey: "meknes_bab_mansour", img: HISTORY_IMAGES.meknes_bab_mansour.primary },
  { id: "tangier", cityId: "tangier", imageKey: "tangier_hercules_caves", img: HISTORY_IMAGES.tangier_hercules_caves.primary },
  { id: "essaouira", cityId: "essaouira", imageKey: "essaouira_skala", img: HISTORY_IMAGES.essaouira_skala.primary },
  { id: "agadir", cityId: "agadir", imageKey: "agadir_agadir_oufella", img: HISTORY_IMAGES.agadir_agadir_oufella.primary },
  { id: "ouarzazate", cityId: "ouarzazate", imageKey: "ouarzazate_ait_benhaddou", img: HISTORY_IMAGES.ouarzazate_ait_benhaddou.primary },
  // Marrakech
  { id: "marrakech_koutoubia", cityId: "marrakech", imageKey: "marrakech_koutoubia", img: HISTORY_IMAGES.marrakech_koutoubia.primary },
  { id: "marrakech_bahia", cityId: "marrakech", imageKey: "marrakech_bahia", img: HISTORY_IMAGES.marrakech_bahia.primary },
  { id: "marrakech_saadian", cityId: "marrakech", imageKey: "marrakech_saadian", img: HISTORY_IMAGES.marrakech_saadian.primary },
  // Casablanca
  { id: "casablanca_mahkama", cityId: "casablanca", imageKey: "casablanca_mahkama", img: HISTORY_IMAGES.casablanca_mahkama.primary },
  { id: "casablanca_royal_palace", cityId: "casablanca", imageKey: "casablanca_royal_palace", img: HISTORY_IMAGES.casablanca_royal_palace.primary },
  { id: "casablanca_medina", cityId: "casablanca", imageKey: "casablanca_medina", img: HISTORY_IMAGES.casablanca_medina.primary },
  // Chefchaouen
  { id: "chefchaouen_kasbah", cityId: "chefchaouen", imageKey: "chefchaouen_kasbah", img: HISTORY_IMAGES.chefchaouen_kasbah.primary },
  { id: "chefchaouen_spanish_mosque", cityId: "chefchaouen", imageKey: "chefchaouen_spanish_mosque", img: HISTORY_IMAGES.chefchaouen_spanish_mosque.primary },
  { id: "chefchaouen_ras_el_maa", cityId: "chefchaouen", imageKey: "chefchaouen_ras_el_maa", img: HISTORY_IMAGES.chefchaouen_ras_el_maa.primary },
  // Rabat
  { id: "rabat_udayas", cityId: "rabat", imageKey: "rabat_udayas", img: HISTORY_IMAGES.rabat_udayas.primary },
  { id: "rabat_chellah", cityId: "rabat", imageKey: "rabat_chellah", img: HISTORY_IMAGES.rabat_chellah.primary },
  { id: "rabat_mausoleum", cityId: "rabat", imageKey: "rabat_mausoleum", img: HISTORY_IMAGES.rabat_mausoleum.primary },
  // Meknes
  { id: "meknes_stables", cityId: "meknes", imageKey: "meknes_stables", img: HISTORY_IMAGES.meknes_stables.primary },
  { id: "meknes_mausoleum", cityId: "meknes", imageKey: "meknes_mausoleum", img: HISTORY_IMAGES.meknes_mausoleum.primary },
  { id: "meknes_prison", cityId: "meknes", imageKey: "meknes_prison", img: HISTORY_IMAGES.meknes_prison.primary },
  // Tangier
  { id: "tangier_kasbah", cityId: "tangier", imageKey: "tangier_kasbah", img: HISTORY_IMAGES.tangier_kasbah.primary },
  { id: "tangier_sultan_palace", cityId: "tangier", imageKey: "tangier_sultan_palace", img: HISTORY_IMAGES.tangier_sultan_palace.primary },
  { id: "tangier_american_legation", cityId: "tangier", imageKey: "tangier_american_legation", img: HISTORY_IMAGES.tangier_american_legation.primary },
  // Essaouira
  { id: "essaouira_medina", cityId: "essaouira", imageKey: "essaouira_medina", img: HISTORY_IMAGES.essaouira_medina.primary },
  { id: "essaouira_sqala_port", cityId: "essaouira", imageKey: "essaouira_sqala_port", img: HISTORY_IMAGES.essaouira_sqala_port.primary },
  { id: "essaouira_borj_barmil", cityId: "essaouira", imageKey: "essaouira_borj_barmil", img: HISTORY_IMAGES.essaouira_borj_barmil.primary },
  // Agadir
  { id: "agadir_memoire", cityId: "agadir", imageKey: "agadir_memoire", img: HISTORY_IMAGES.agadir_memoire.primary },
  { id: "agadir_medina_coco", cityId: "agadir", imageKey: "agadir_medina_coco", img: HISTORY_IMAGES.agadir_medina_coco.primary },
  { id: "agadir_gardens", cityId: "agadir", imageKey: "agadir_gardens", img: HISTORY_IMAGES.agadir_gardens.primary },
  // Ouarzazate
  { id: "ouarzazate_taourirt", cityId: "ouarzazate", imageKey: "ouarzazate_taourirt", img: HISTORY_IMAGES.ouarzazate_taourirt.primary },
  { id: "ouarzazate_atlas_studios", cityId: "ouarzazate", imageKey: "ouarzazate_atlas_studios", img: HISTORY_IMAGES.ouarzazate_atlas_studios.primary },
  { id: "ouarzazate_tifoultoute", cityId: "ouarzazate", imageKey: "ouarzazate_tifoultoute", img: HISTORY_IMAGES.ouarzazate_tifoultoute.primary }
];

export const HOTELS = [
  { 
    id: "marrakech_la_mamounia", 
    cityId: "marrakech", 
    imageKey: "marrakech_la_mamounia", 
    img: HOTEL_IMAGES.marrakech_la_mamounia.primary,
    price: "7500 MAD"
  },
  { 
    id: "fez_hotel_sahrai", 
    cityId: "fes", 
    imageKey: "fez_hotel_sahrai", 
    img: HOTEL_IMAGES.fez_hotel_sahrai.primary,
    price: "4200 MAD"
  },
  { 
    id: "casablanca_four_seasons", 
    cityId: "casablanca", 
    imageKey: "casablanca_four_seasons", 
    img: HOTEL_IMAGES.casablanca_four_seasons.primary,
    price: "5000 MAD"
  },
  { 
    id: "chefchaouen_lina_ryad", 
    cityId: "chefchaouen", 
    imageKey: "chefchaouen_lina_ryad", 
    img: HOTEL_IMAGES.chefchaouen_lina_ryad.primary,
    price: "2400 MAD"
  },
  { 
    id: "rabat_tour_hassan", 
    cityId: "rabat", 
    imageKey: "rabat_tour_hassan", 
    img: HOTEL_IMAGES.rabat_tour_hassan.primary,
    price: "3500 MAD"
  },
  { 
    id: "meknes_chateau_roslane", 
    cityId: "meknes", 
    imageKey: "meknes_chateau_roslane", 
    img: HOTEL_IMAGES.meknes_chateau_roslane.primary,
    price: "1800 MAD"
  },
  { 
    id: "tangier_el_minzah", 
    cityId: "tangier", 
    imageKey: "tangier_el_minzah", 
    img: HOTEL_IMAGES.tangier_el_minzah.primary,
    price: "2200 MAD"
  },
  { 
    id: "essaouira_heure_bleue", 
    cityId: "essaouira", 
    imageKey: "essaouira_heure_bleue", 
    img: HOTEL_IMAGES.essaouira_heure_bleue.primary,
    price: "3100 MAD"
  },
  { 
    id: "agadir_sofitel", 
    cityId: "agadir", 
    imageKey: "agadir_sofitel", 
    img: HOTEL_IMAGES.agadir_sofitel.primary,
    price: "3800 MAD"
  },
  { 
    id: "ouarzazate_berber_palace", 
    cityId: "ouarzazate", 
    imageKey: "ouarzazate_berber_palace", 
    img: HOTEL_IMAGES.ouarzazate_berber_palace.primary,
    price: "1900 MAD"
  }
];

export const DOMAINS = [
  {
    id: "marrakech",
    name: "Marrakech",
    tagline: "The Red City",
    cols: "md:col-span-8 row-span-2",
    desc: "Southern Majesty. The ochre heart of Morocco layered with millennia of history.",
    img: "https://images.unsplash.com/photo-1585004607620-fb4c44331e73?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: "fes",
    name: "Fez",
    tagline: "The Cultural Capital",
    cols: "md:col-span-4 row-span-1",
    desc: "Narrow labyrinthine alleyways and intricate mosaic tilework, celebrated as home to the world's oldest university.",
    img: "https://images.unsplash.com/photo-1696952252983-46cb2c304ad9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "casablanca",
    name: "Casablanca",
    tagline: "The Economic Hub",
    cols: "md:col-span-4 row-span-1",
    desc: "White-washed modern architecture sitting by the Atlantic ocean, where tradition meets contemporary dynamism.",
    img: "https://images.unsplash.com/photo-1706203644187-a719449587bb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "chefchaouen",
    name: "Chefchaouen",
    tagline: "The Blue Pearl",
    cols: "md:col-span-12 row-span-1",
    desc: "Famous for its brilliant blue-painted houses situated in the dramatic Rif Mountains. A photographer's dream.",
    img: "https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "rabat",
    name: "Rabat",
    tagline: "The Elegant Capital",
    cols: "md:col-span-6 row-span-1",
    desc: "A stunning blend of Islamic history and French colonial architecture. Both sophisticated and traditional.",
    img: "https://images.unsplash.com/photo-1598022124758-26d09adcb7b6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "meknes",
    name: "Meknes",
    tagline: "The Imperial City",
    cols: "md:col-span-6 row-span-1",
    desc: "A quiet, regal UNESCO World Heritage site known for its grand imperial palaces and monumental gateways.",
    img: "https://images.unsplash.com/photo-1600353908694-a606c58a0b73?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "tangier",
    name: "Tangier",
    tagline: "Gateway to Africa",
    cols: "md:col-span-4 row-span-1",
    desc: "A coastal city perched by the Strait of Gibraltar with a rich multicultural history and views of Spain.",
    img: "https://images.unsplash.com/photo-1582919534700-acf2374f10d3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "essaouira",
    name: "Essaouira",
    tagline: "The Windy City",
    cols: "md:col-span-4 row-span-1",
    desc: "A peaceful coastal town favored for its long beaches, steady winds, and historic UNESCO medina.",
    img: "https://images.unsplash.com/photo-1624802706192-78b15c3edae0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "agadir",
    name: "Agadir",
    tagline: "Sunshine Resort",
    cols: "md:col-span-4 row-span-1",
    desc: "A major seaside resort known for its exceptionally mild climate and modern golden sand beaches.",
    img: "https://images.unsplash.com/photo-1710092538995-4af0c11a3f3c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "ouarzazate",
    name: "Ouarzazate & Merzouga",
    tagline: "The Desert Experience",
    cols: "md:col-span-12 row-span-2",
    desc: "The Hollywood of Africa and gateway to the Sahara. From the clay kasbahs of Ouarzazate to the towering dunes of Merzouga.",
    img: "https://images.unsplash.com/photo-1677839698101-c145cda4718a?auto=format&fit=crop&w=1200&q=80"
  }
];
