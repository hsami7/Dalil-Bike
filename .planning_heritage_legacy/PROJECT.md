# Moroccan Heritage Guide

## What This Is
A premium, interactive travel guide for Moroccan cities, showcasing diverse cultural landmarks, luxury stays, and historical heritage sites. It provides travelers with a seamless, visually stunning interface to explore Morocco's "Imperial Cities" and beyond.

## Core Value
Providing an immersive and authoritative digital gateway to Moroccan heritage through premium design and intuitive content discovery.

## Requirements

### Validated
- ✓ **Framework Foundation**: React 19 + Vite 8 SPA structure — existing
- ✓ **Responsive Navigation**: Dual Header/BottomNav system for desktop and mobile — existing
- ✓ **City Directory**: A card-based grid layout for city discovery (Home/Hub) — existing
- ✓ **Content Templates**: Dedicated page structures for "Stays" and "Heritage Sites" — existing

### Active
- [ ] **Dynamic Data Migration**: Transition from static `data.js` to a dynamic backend or CMS (e.g., Supabase).
- [ ] **Prefix-Aware Search**: Implement an intelligent search system with typo-correction.
- [ ] **UI Modernization**: Refactor components to use pure React patterns and consistent CSS/Tokens.
- [ ] **Legacy Clean-up**: Archive/Delete legacy HTML files and unbundle unused assets.

### Out of Scope
- **Booking Engine**: Direct hotel bookings (deferred to external links).
- **Social Features**: User comments or community boards.

## Context
- The project started as a set of static HTML designs (Stitch exports).
- Currently in a "partially migrated" state where many HTML files coexist with React components.
- Styling is predominantly plain CSS, with layout logic baked into some components.

## Constraints
- **Tech Stack**: React 19 / Vite 8 / React Router 7.
- **Performance**: Must maintain sub-1s load times for premium feel.
- **Aesthetics**: High visual standard (rich colors, smooth animations).

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| React 19 / Vite 8 | Modern, high-performance foundation. | ✓ Good |
| Plain CSS | Maximum flexibility for premium design. | ✓ Good |

## Evolution
This document evolves at phase transitions and milestone boundaries.

---
*Last updated: 2026-04-17 after initialization*
