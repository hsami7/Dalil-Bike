# Architecture

## System Pattern
- **Type**: Single Page Application (SPA).
- **Core**: React 19 functional components with Hooks.
- **Routing**: Client-side routing via `react-router-dom`.

## Component Hierarchy
1. `main.jsx` (Root)
2. `App.jsx` (Router & Layout Wrapper)
3. `Header.jsx` / `BottomNav.jsx` (Navigation)
4. Page Components (`Home`, `Hub`, `Hotel`, `Place`)

## Implementation Details
- Content is managed via a centralized `data.js` object.
- Legacy HTML files (`src/*.html`) appear to be reference materials from the design phase.
