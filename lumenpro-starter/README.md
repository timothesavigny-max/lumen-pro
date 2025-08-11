# LumenPro — Starter (Next.js 14 + Tailwind + Prisma/SQLite)

## Démarrer en 3 étapes
1. Installe les dépendances :
   ```bash
   npm install
   ```

2. Configure la base locale (SQLite) :
   ```bash
   cp .env.example .env
   npm run db:push
   ```

3. Lance le serveur :
   ```bash
   npm run dev
   ```

Ouvre http://localhost:3000 pour voir :
- **Accueil** (landing simple)
- **/pricing** (pricing mocké)
- **/dashboard** (calculateur ROI LED qui fonctionne 100% client-side)

## Étapes suivantes (optionnel)
- Passer la datasource Prisma en PostgreSQL pour la prod.
- Ajouter l’auth (NextAuth) et les API routes (Stripe, projets, devis).
- Générer des PDF avec @react-pdf/renderer.

> Ce starter fonctionne tel quel en local (sans clé Stripe ni Postgres). 
> Tu peux ensuite brancher les briques avancées du plan fourni.
