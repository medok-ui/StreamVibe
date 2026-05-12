# StreamVibe

**StreamVibe** is a Netflix-inspired streaming platform landing page built with Angular 21. It features a full UI for browsing movies and TV shows, subscription plan selection, authentication (email/password), and server-side rendering.

---

## ⚠️ Known Issues

> **Google Sign-In is currently non-functional.**
> The "Sign in with Google" button is present in the UI but the OAuth flow is not yet configured. Firebase Google Auth provider setup and proper OAuth credentials are still pending. Use email/password registration and login instead.

---

## Features

- 🎬 **Home page** — hero section, trending movies/shows, new releases, genre categories, and user reviews
- 🎥 **Movies & Shows pages** — browsable content sections with recommendation and trending cards
- 💳 **Subscription page** — Basic / Standard / Premium pricing table with feature comparison
- 🔐 **Authentication** — email/password register & login powered by Firebase Auth
- 📱 **Multi-device section** — highlights compatibility across phone, tablet, laptop, TV, and more
- ❓ **FAQ & Support pages**
- 🌐 **SSR (Server-Side Rendering)** — via Angular Universal / `@angular/ssr`

---

## Tech Stack

| Layer        | Technology                                                      |
| ------------ | --------------------------------------------------------------- |
| Framework    | Angular 21                                                      |
| Language     | TypeScript 5.9                                                  |
| Styling      | SCSS                                                            |
| Auth         | Firebase Auth + `@angular/fire`                                 |
| Social Login | `@abacritt/angularx-social-login` (Google — not yet configured) |
| SSR          | `@angular/ssr` + Express 5                                      |
| Linting      | ESLint + `@typescript-eslint`                                   |
| Formatting   | Prettier                                                        |
| Testing      | Vitest                                                          |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 11+
- Angular CLI 21

### Installation

```bash
git clone https://github.com/medok-ui/StreamVibe.git
cd stream-vibe
npm install
```

### Environment Setup

Create `src/environments/environment.ts` with your Firebase config:

```ts
export const environment = {
  production: false,
  firebase: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
  },
};
```

### Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically on file changes.

### SSR Build & Run

```bash
ng build
node dist/stream-vibe/server/server.mjs
```

---

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── auth/          # Firebase auth service
│   │   ├── constants/     # Static data (pricing, nav, FAQ, etc.)
│   │   ├── guards/        # Auth & redirect route guards
│   │   └── services/      # Modal, movie services
│   ├── features/
│   │   ├── auth/          # Login & register components
│   │   ├── home/          # Landing / home page
│   │   ├── movies/        # Movies listing page
│   │   ├── shows/         # TV shows listing page
│   │   ├── subscription/  # Pricing / plans page
│   │   └── support/       # Support & FAQ page
│   ├── layout/
│   │   ├── header/
│   │   └── footer/
│   └── shared/
│       ├── components/    # Reusable UI cards and sections
│       └── interfaces/    # TypeScript interfaces
└── environments/
```

---

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm start`     | Start dev server           |
| `npm run build` | Production build           |
| `npm test`      | Run unit tests with Vitest |
