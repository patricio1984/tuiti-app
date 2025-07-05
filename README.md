# Tuiti — Un homenaje al viejo Twitter

Este proyecto es un homenaje visual y funcional al viejo Twitter (antes de ser X). Fue desarrollado en Next.js 15 con React 19, usando la API pública de JSONPlaceholder y generado con **Orval** + **React Query**.

---

## 🚀 Tecnologías usadas

- Next.js 15 (App Router)
- TailwindCSS
- React 19
- React Query
- Orval (generación automática de hooks desde OpenAPI)
- Vitest + Testing Library
- Theme toggle con modo claro/oscuro

---

## Pruebas

Incluye pruebas unitarias de componentes como `PostItem`, con mocks del router y snapshots.

---

## Instalación

```bash
pnpm install
pnpm dev
```

---

## Scripts útiles

```bash
pnpm orval:gen     # Generar hooks desde la spec de OpenAPI
pnpm test          # Ejecutar tests con Vitest
pnpm lint          # Lint + Fix
```

---

## Deploy

Optimizado para deploy en Vercel.

```
✅ Lighthouse 100/100 en Accesibilidad
```