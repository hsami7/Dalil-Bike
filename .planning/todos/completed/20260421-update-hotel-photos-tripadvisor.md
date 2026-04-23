---
created: 2026-04-21T17:10:00Z
title: Update hotel photos with TripAdvisor images
area: ui
files:
  - src/data/hotel-images.js
---

## Problem

The current hotel photos are a mix of sources and placeholders (Unsplash, etc.). We need high-quality, professional photos from TripAdvisor for all ~40 hotels listed in the original request.

## Hotels to Update

### Marrakech
- Royal Mansour Marrakech
- Amanjena
- Mandarin Oriental Marrakech
- Selman Marrakech

### Fez
- Riad Fes
- Palais Faraj
- Karawan Riad
- Palais Amani

### Casablanca
- Royal Mansour Casablanca
- Hyatt Regency
- Le Casablanca Hotel
- Hotel Le Doge

### Chefchaouen
- Le Petit Palais
- Dar Echchaouen
- Riad Hicham
- Casa Perleta

### Rabat
- Fairmont La Marina
- Conrad Rabat Arzana
- Rabat Marriott Hotel
- La Villa Mandarine

### Meknes
- Riad Heritage
- Palais Didi
- Hotel Transatlantique
- Riad Zaki

### Tangier
- Grand Hotel Villa de France
- Palais Zahia
- Marina Bay City Center
- Hilton Tanger Al Houara

### Essaouira
- Sofitel Essaouira Mogador
- Le Jardin des Douars
- Atlas Essaouira & Spa
- Riad Mimouna

### Agadir
- Hotel Riu Palace Tikida
- Palais des Roses
- Royal Atlas & Spa
- Hyatt Place Taghazout Bay

### Ouarzazate & Merzouga
- Oscar Hotel
- Ksar Ighnda
- Dar Kamoula
- Riad Kounouz

## Solution

- Systematically research each hotel on TripAdvisor.
- Find the primary CDN URL for a professional photo (e.g., `https://dynamic-media-cdn.tripadvisor.com/media/photo-o/...`).
- Update the corresponding entry in `src/data/hotel-images.js`.
- **Avoid hallucination**: Verify each image against the hotel name.
