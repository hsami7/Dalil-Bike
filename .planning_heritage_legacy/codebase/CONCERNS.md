# Concerns

## Technical Debt
- **Legacy Files**: Many `.html` files remaining in `src/` that should be moved to a private/temp directory or deleted after migration is verified.
- **Static Data**: Data is hardcoded in `data.js`. For a "dynamic" project, this should eventually move to a CMS or database (e.g., Supabase).

## Maintenance
- **CSS Management**: Global styles are scattered between `index.css`, `App.css`, and inline-ish logic.
- **Scalability**: Adding new cities requires manual editing of `data.js`.
