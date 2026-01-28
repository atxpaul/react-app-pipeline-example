# react-app-pipeline-example

Repositorio de ejemplo **React + Vite** pensado para mostrar un flujo completo de **CI/CD con GitHub Actions**, incluyendo **lint**, **tests unitarios (Jest)** y **tests end-to-end (Cypress)**, con build estático listo para despliegue.

Repo: https://github.com/atxpaul/react-app-pipeline-example

---

## Objetivo del proyecto

Este repo sirve como ejemplo práctico para:

- Construir una app frontend moderna con React
- Validar calidad con linting y tests
- Ejecutar tests end-to-end en pipeline
- Generar un artefacto estático (`dist/`)
- Integrarlo todo en un flujo de GitHub Actions

Está pensado para **demos, formaciones y ejemplos de pipelines**.

---

## Features

- React + Vite
- ESLint
- Unit tests con Jest
- End-to-End tests con Cypress
- CI/CD con GitHub Actions
- Build estático
- Configuración opcional para Azure Static Web Apps

---

## Requisitos

- Node.js 18+ (recomendado)
- npm

---

## Estructura del proyecto (alto nivel)

- `.github/` → workflows de GitHub Actions  
- `src/` → código fuente  
- `public/` → assets estáticos  
- `tests/` → unit tests (Jest)  
- `cypress/` → e2e tests (Cypress)  
- `dist/` → salida del build (generada)  
- `mocks/` → mocks/fixtures (si aplica)  
- `staticwebapp.config.json` → reglas de routing/rewrites (si aplica)

---

## Uso en local

### Instalar dependencias

    npm ci

### Arrancar en modo desarrollo

    npm run dev

La app suele quedar en:

    http://localhost:5173

---

## Scripts habituales

> Los nombres exactos dependen del `package.json`. Esto es orientativo.

### Desarrollo / Build

- Dev server:

      npm run dev

- Build de producción:

      npm run build

- Preview del build:

      npm run preview

### Lint

- Ejecutar ESLint:

      npm run lint

### Unit tests (Jest)

- Ejecutar tests:

      npm test

  o

      npm run test

### E2E (Cypress)

- Abrir Cypress (UI):

      npm run cy:open

- Ejecutar Cypress (headless):

      npm run cy:run

---

## Testing

### Unit tests

- Ubicación típica: `tests/`
- Config habitual: `jest.config.mjs`

### End-to-End (Cypress)

- Specs: `cypress/e2e/`
- Config habitual: `cypress.config.js`

---

## CI/CD con GitHub Actions

Los workflows en `.github/workflows/` suelen seguir este flujo:

1. Checkout del repo  
2. Setup de Node  
3. Instalación de dependencias (`npm ci`)  
4. Lint  
5. Unit tests  
6. Build (`npm run build`)  
7. E2E (Cypress)  
8. (Opcional) Deploy  

Estrategia típica (si aplica a tu repo):

- Pull Requests → validación (lint + unit + e2e)  
- Rama `main` → despliegue a `staging`  
- Ramas `release/*` → despliegue a `production`

---

## Variables de entorno

Si el proyecto usa variables de entorno:

- En local: `.env`
- En CI/CD: GitHub Secrets / Variables o GitHub Environments

En Vite, las variables expuestas al frontend suelen empezar por `VITE_`.

Ejemplo:

    VITE_API_URL=https://example.com

---

## Deploy

### Azure Static Web Apps (opcional)

Configuración típica:

- Build command: `npm run build`
- Output folder: `dist`

Si es una SPA, revisa `staticwebapp.config.json` para rutas/rewrites.

### Hosting estático genérico

1. Construir:

       npm run build

2. Publicar el contenido de `dist/` (Netlify, GitHub Pages, S3, etc.)

---

## Contribuir

1. Fork  
2. Rama (`feat/*` o `fix/*`)  
3. Verificar lint + tests  
4. PR a `main`

---

## Licencia

Pendiente de definir (añade un `LICENSE` si quieres publicarlo como OSS).
