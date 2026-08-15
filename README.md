# Progheads Paraguay

Sitio web de Progheads Paraguay, comunidad paraguaya de rock y metal progresivo. El
contenido del día a día vive en [Instagram](https://www.instagram.com/progheads_py);
este sitio es la landing, el blog y el punto de referencia en la web.

Repo: [github.com/fedebarriosd/progheads](https://github.com/fedebarriosd/progheads).
Software libre bajo licencia [AGPL-3.0](./LICENSE).

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com) v4
- Deploy en [Vercel](https://vercel.com), dominio `progheads.org`

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de producción
npm run lint     # eslint
```

## Estructura

- `src/app/` — páginas (App Router): landing, `about`, `blog`, `blog/[slug]`, 404
- `src/components/` — Navbar, Footer, y las secciones de la landing
- `src/data/posts.js` — metadata de los posts del blog (título, fecha, PDF)
- `src/data/playlists.js` — playlists de Spotify destacadas en la landing
- `public/uploads/` — PDFs de los posts del blog
- `public/brand/` — assets de marca (logo, patrón, ornamentos) provistos por el diseñador
- `src/fonts/` — tipografía Dunbar Low, cargada vía `next/font/local`

## Marca

Paleta y tipografía definidas en el manual de marca del proyecto: navy `#0D2D53`,
amarillo `#FED107`, fuente Dunbar Low. Configurados como tokens de Tailwind en
`src/app/globals.css`.
