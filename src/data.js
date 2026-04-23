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
  },
  // Marrakech
  { 
    id: "marrakech_royal_mansour", 
    cityId: "marrakech", 
    imageKey: "marrakech_royal_mansour", 
    img: HOTEL_IMAGES.marrakech_royal_mansour.primary,
    price: "4500 MAD"
  },
  { 
    id: "marrakech_amanjena", 
    cityId: "marrakech", 
    imageKey: "marrakech_amanjena", 
    img: HOTEL_IMAGES.marrakech_amanjena.primary,
    price: "6200 MAD"
  },
  { 
    id: "marrakech_mandarin_oriental", 
    cityId: "marrakech", 
    imageKey: "marrakech_mandarin_oriental", 
    img: HOTEL_IMAGES.marrakech_mandarin_oriental.primary,
    price: "7800 MAD"
  },
  { 
    id: "marrakech_selman", 
    cityId: "marrakech", 
    imageKey: "marrakech_selman", 
    img: HOTEL_IMAGES.marrakech_selman.primary,
    price: "3900 MAD"
  },
  // Fes
  { 
    id: "fes_riad_fes", 
    cityId: "fes", 
    imageKey: "fes_riad_fes", 
    img: HOTEL_IMAGES.fes_riad_fes.primary,
    price: "2800 MAD"
  },
  { 
    id: "fes_palais_faraj", 
    cityId: "fes", 
    imageKey: "fes_palais_faraj", 
    img: HOTEL_IMAGES.fes_palais_faraj.primary,
    price: "2400 MAD"
  },
  { 
    id: "fes_karawan_riad", 
    cityId: "fes", 
    imageKey: "fes_karawan_riad", 
    img: HOTEL_IMAGES.fes_karawan_riad.primary,
    price: "3100 MAD"
  },
  { 
    id: "fes_palais_amani", 
    cityId: "fes", 
    imageKey: "fes_palais_amani", 
    img: HOTEL_IMAGES.fes_palais_amani.primary,
    price: "1900 MAD"
  },
  // Casablanca
  { 
    id: "casablanca_royal_mansour", 
    cityId: "casablanca", 
    imageKey: "casablanca_royal_mansour", 
    img: HOTEL_IMAGES.casablanca_royal_mansour.primary,
    price: "5500 MAD"
  },
  { 
    id: "casablanca_hyatt_regency", 
    cityId: "casablanca", 
    imageKey: "casablanca_hyatt_regency", 
    img: HOTEL_IMAGES.casablanca_hyatt_regency.primary,
    price: "2100 MAD"
  },
  { 
    id: "casablanca_le_casablanca", 
    cityId: "casablanca", 
    imageKey: "casablanca_le_casablanca", 
    img: HOTEL_IMAGES.casablanca_le_casablanca.primary,
    price: "2600 MAD"
  },
  { 
    id: "casablanca_le_doge", 
    cityId: "casablanca", 
    imageKey: "casablanca_le_doge", 
    img: HOTEL_IMAGES.casablanca_le_doge.primary,
    price: "2200 MAD"
  },
  // Chefchaouen
  { 
    id: "chefchaouen_le_petit_palais", 
    cityId: "chefchaouen", 
    imageKey: "chefchaouen_le_petit_palais", 
    img: HOTEL_IMAGES.chefchaouen_le_petit_palais.primary,
    price: "1200 MAD"
  },
  { 
    id: "chefchaouen_dar_echchaouen", 
    cityId: "chefchaouen", 
    imageKey: "chefchaouen_dar_echchaouen", 
    img: HOTEL_IMAGES.chefchaouen_dar_echchaouen.primary,
    price: "1500 MAD"
  },
  { 
    id: "chefchaouen_riad_hicham", 
    cityId: "chefchaouen", 
    imageKey: "chefchaouen_riad_hicham", 
    img: HOTEL_IMAGES.chefchaouen_riad_hicham.primary,
    price: "1800 MAD"
  },
  { 
    id: "chefchaouen_casa_perleta", 
    cityId: "chefchaouen", 
    imageKey: "chefchaouen_casa_perleta", 
    img: HOTEL_IMAGES.chefchaouen_casa_perleta.primary,
    price: "1100 MAD"
  },
  // Rabat
  { 
    id: "rabat_fairmont", 
    cityId: "rabat", 
    imageKey: "rabat_fairmont", 
    img: HOTEL_IMAGES.rabat_fairmont.primary,
    price: "3800 MAD"
  },
  { 
    id: "rabat_conrad", 
    cityId: "rabat", 
    imageKey: "rabat_conrad", 
    img: HOTEL_IMAGES.rabat_conrad.primary,
    price: "4200 MAD"
  },
  { 
    id: "rabat_marriott", 
    cityId: "rabat", 
    imageKey: "rabat_marriott", 
    img: HOTEL_IMAGES.rabat_marriott.primary,
    price: "2600 MAD"
  },
  { 
    id: "rabat_villa_mandarine", 
    cityId: "rabat", 
    imageKey: "rabat_villa_mandarine", 
    img: HOTEL_IMAGES.rabat_villa_mandarine.primary,
    price: "2200 MAD"
  },
  // Meknes
  { 
    id: "meknes_riad_heritage", 
    cityId: "meknes", 
    imageKey: "meknes_riad_heritage", 
    img: HOTEL_IMAGES.meknes_riad_heritage.primary,
    price: "1400 MAD"
  },
  { 
    id: "meknes_palais_didi", 
    cityId: "meknes", 
    imageKey: "meknes_palais_didi", 
    img: HOTEL_IMAGES.meknes_palais_didi.primary,
    price: "1600 MAD"
  },
  { 
    id: "meknes_transatlantique", 
    cityId: "meknes", 
    imageKey: "meknes_transatlantique", 
    img: HOTEL_IMAGES.meknes_transatlantique.primary,
    price: "900 MAD"
  },
  { 
    id: "meknes_riad_zaki", 
    cityId: "meknes", 
    imageKey: "meknes_riad_zaki", 
    img: HOTEL_IMAGES.meknes_riad_zaki.primary,
    price: "1300 MAD"
  },
  // Tangier
  { 
    id: "tangier_villa_de_france", 
    cityId: "tangier", 
    imageKey: "tangier_villa_de_france", 
    img: HOTEL_IMAGES.tangier_villa_de_france.primary,
    price: "2500 MAD"
  },
  { 
    id: "tangier_palais_zahia", 
    cityId: "tangier", 
    imageKey: "tangier_palais_zahia", 
    img: HOTEL_IMAGES.tangier_palais_zahia.primary,
    price: "1800 MAD"
  },
  { 
    id: "tangier_marina_bay", 
    cityId: "tangier", 
    imageKey: "tangier_marina_bay", 
    img: HOTEL_IMAGES.tangier_marina_bay.primary,
    price: "1400 MAD"
  },
  { 
    id: "tangier_hilton", 
    cityId: "tangier", 
    imageKey: "tangier_hilton", 
    img: HOTEL_IMAGES.tangier_hilton.primary,
    price: "2800 MAD"
  },
  // Essaouira
  { 
    id: "essaouira_sofitel_mogador", 
    cityId: "essaouira", 
    imageKey: "essaouira_sofitel_mogador", 
    img: HOTEL_IMAGES.essaouira_sofitel_mogador.primary,
    price: "3200 MAD"
  },
  { 
    id: "essaouira_le_jardin_des_douars", 
    cityId: "essaouira", 
    imageKey: "essaouira_le_jardin_des_douars", 
    img: HOTEL_IMAGES.essaouira_le_jardin_des_douars.primary,
    price: "2400 MAD"
  },
  { 
    id: "essaouira_atlas_essaouira", 
    cityId: "essaouira", 
    imageKey: "essaouira_atlas_essaouira", 
    img: HOTEL_IMAGES.essaouira_atlas_essaouira.primary,
    price: "1100 MAD"
  },
  { 
    id: "essaouira_riad_mimouna", 
    cityId: "essaouira", 
    imageKey: "essaouira_riad_mimouna", 
    img: HOTEL_IMAGES.essaouira_riad_mimouna.primary,
    price: "1300 MAD"
  },
  // Agadir
  { 
    id: "agadir_riu_palace", 
    cityId: "agadir", 
    imageKey: "agadir_riu_palace", 
    img: HOTEL_IMAGES.agadir_riu_palace.primary,
    price: "2900 MAD"
  },
  { 
    id: "agadir_palais_des_roses", 
    cityId: "agadir", 
    imageKey: "agadir_palais_des_roses", 
    img: HOTEL_IMAGES.agadir_palais_des_roses.primary,
    price: "1500 MAD"
  },
  { 
    id: "agadir_royal_atlas", 
    cityId: "agadir", 
    imageKey: "agadir_royal_atlas", 
    img: HOTEL_IMAGES.agadir_royal_atlas.primary,
    price: "1800 MAD"
  },
  { 
    id: "agadir_hyatt_place", 
    cityId: "agadir", 
    imageKey: "agadir_hyatt_place", 
    img: HOTEL_IMAGES.agadir_hyatt_place.primary,
    price: "2200 MAD"
  },
  // Ouarzazate
  { 
    id: "ouarzazate_oscar_hotel", 
    cityId: "ouarzazate", 
    imageKey: "ouarzazate_oscar_hotel", 
    img: HOTEL_IMAGES.ouarzazate_oscar_hotel.primary,
    price: "1200 MAD"
  },
  { 
    id: "ouarzazate_ksar_ighnda", 
    cityId: "ouarzazate", 
    imageKey: "ouarzazate_ksar_ighnda", 
    img: HOTEL_IMAGES.ouarzazate_ksar_ighnda.primary,
    price: "2100 MAD"
  },
  { 
    id: "ouarzazate_dar_kamoula", 
    cityId: "ouarzazate", 
    imageKey: "ouarzazate_dar_kamoula", 
    img: HOTEL_IMAGES.ouarzazate_dar_kamoula.primary,
    price: "1600 MAD"
  },
  { 
    id: "ouarzazate_riad_kounouz", 
    cityId: "ouarzazate", 
    imageKey: "ouarzazate_riad_kounouz", 
    img: HOTEL_IMAGES.ouarzazate_riad_kounouz.primary,
    price: "900 MAD"
  }
];

export const DOMAINS = [
  {
    id: "marrakech",
    name: "Marrakech",
    tagline: "The Red City",
    cols: "md:col-span-8 row-span-2",
    desc: "Southern Majesty. The ochre heart of Morocco layered with millennia of history.",
    img: "https://images.unsplash.com/photo-1585004607620-fb4c44331e73?auto=format&fit=crop&q=80&w=2000",
    videoId: "WGoSnw5Y3nE",
    videoPath: "/videos/marrakech.mp4"
  },
  {
    id: "fes",
    name: "Fez",
    tagline: "The Cultural Capital",
    cols: "md:col-span-4 row-span-1",
    desc: "Narrow labyrinthine alleyways and intricate mosaic tilework, celebrated as home to the world's oldest university.",
    img: "https://images.unsplash.com/photo-1696952252983-46cb2c304ad9?auto=format&fit=crop&w=1200&q=80",
    videoId: "kYxBn98X3Ig",
    videoPath: "/videos/fes.mp4"
  },
  {
    id: "casablanca",
    name: "Casablanca",
    tagline: "The Economic Hub",
    cols: "md:col-span-4 row-span-1",
    desc: "White-washed modern architecture sitting by the Atlantic ocean, where tradition meets contemporary dynamism.",
    img: "https://images.unsplash.com/photo-1706203644187-a719449587bb?auto=format&fit=crop&w=1200&q=80",
    videoId: "BDqAcVIRqXc",
    videoPath: "/videos/casablanca.mp4"
  },
  {
    id: "chefchaouen",
    name: "Chefchaouen",
    tagline: "The Blue Pearl",
    cols: "md:col-span-12 row-span-1",
    desc: "Famous for its brilliant blue-painted houses situated in the dramatic Rif Mountains. A photographer's dream.",
    img: "https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=1200&q=80",
    videoId: "4CQ0irysD8s",
    videoPath: "/videos/chefchaouen.mp4"
  },
  {
    id: "rabat",
    name: "Rabat",
    tagline: "The Elegant Capital",
    cols: "md:col-span-6 row-span-1",
    desc: "A stunning blend of Islamic history and French colonial architecture. Both sophisticated and traditional.",
    img: "https://images.unsplash.com/photo-1598022124758-26d09adcb7b6?auto=format&fit=crop&w=1200&q=80",
    videoId: "6gVdAWDf0G0",
    videoPath: "/videos/rabat.mp4"
  },
  {
    id: "meknes",
    name: "Meknes",
    tagline: "The Imperial City",
    cols: "md:col-span-6 row-span-1",
    desc: "A quiet, regal UNESCO World Heritage site known for its grand imperial palaces and monumental gateways.",
    img: "https://images.unsplash.com/photo-1600353908694-a606c58a0b73?auto=format&fit=crop&w=1200&q=80",
    videoId: "8t0O0VjmJtQ",
    videoPath: "/videos/meknes.mp4"
  },
  {
    id: "tangier",
    name: "Tangier",
    tagline: "Gateway to Africa",
    cols: "md:col-span-4 row-span-1",
    desc: "A coastal city perched by the Strait of Gibraltar with a rich multicultural history and views of Spain.",
    img: "https://images.unsplash.com/photo-1582919534700-acf2374f10d3?auto=format&fit=crop&w=1200&q=80",
    videoId: "qGUwPoOuFuA",
    videoPath: "/videos/tangier.mp4"
  },
  {
    id: "essaouira",
    name: "Essaouira",
    tagline: "The Windy City",
    cols: "md:col-span-4 row-span-1",
    desc: "A peaceful coastal town favored for its long beaches, steady winds, and historic UNESCO medina.",
    img: "https://images.unsplash.com/photo-1624802706192-78b15c3edae0?auto=format&fit=crop&w=1200&q=80",
    videoId: "joRZxY4gcyQ",
    videoPath: "/videos/essaouira.mp4"
  },
  {
    id: "agadir",
    name: "Agadir",
    tagline: "Sunshine Resort",
    cols: "md:col-span-4 row-span-1",
    desc: "A major seaside resort known for its exceptionally mild climate and modern golden sand beaches.",
    img: "https://images.unsplash.com/photo-1710092538995-4af0c11a3f3c?auto=format&fit=crop&w=1200&q=80",
    videoId: "6GME_pODsJQ",
    videoPath: "/videos/agadir.mp4"
  },
  {
    id: "ouarzazate",
    name: "Ouarzazate & Merzouga",
    tagline: "The Desert Experience",
    cols: "md:col-span-12 row-span-2",
    desc: "The Hollywood of Africa and gateway to the Sahara. From the clay kasbahs of Ouarzazate to the towering dunes of Merzouga.",
    img: "https://images.unsplash.com/photo-1677839698101-c145cda4718a?auto=format&fit=crop&w=1200&q=80",
    videoId: "485DQw5_ZRo",
    videoPath: "/videos/ouarzazate.mp4"
  }
];
