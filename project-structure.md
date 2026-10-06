# Project Structure

A personal portfolio website built with **React** (bootstrapped with Create React App) and styled with **Sass** using a 7-1-style architecture. Routing is handled by `react-router-dom`, the contact form integrates **EmailJS** (with a Firebase config present), and icons come from **Font Awesome**.

## Tech Stack

- **React 17** + **react-dom** — UI library
- **react-router-dom v5** — client-side routing (`BrowserRouter`, `Switch`, `Route`)
- **react-scripts (CRA 5)** — build/dev tooling
- **Sass** — styling, compiled from `src/Styles/main.scss`
- **EmailJS** (`emailjs-com`) — contact form submissions
- **Firebase** — configured in `src/Utility/firebase.js`
- **Font Awesome** — brand + solid icon set
- **web-vitals** — performance reporting

## Entry Points

| File | Role |
| --- | --- |
| [public/index.html](public/index.html) | HTML shell; React mounts into `#root` |
| [src/index.js](src/index.js) | App bootstrap — renders `<App />` and imports `main.scss` |
| [src/Pages/App.jsx](src/Pages/App.jsx) | Root component — sets up the Router, registers Font Awesome icons, defines routes |

## Routing

Routes are declared in [src/Pages/App.jsx](src/Pages/App.jsx):

| Path | Page |
| --- | --- |
| `/` | Home |
| `/Portfolio` | Portfolio |
| `/Contact` | Contact |
| `/Affiliates` | Affiliates |

`About` and `Blog` pages exist in the codebase but are currently **commented out** of routing and navigation. The Netlify-style [public/_redirects](public/_redirects) file rewrites all paths to `index.html` (200) so client-side routing works on refresh/deep links.

## Directory Layout

```
portfolio-website/
├── public/                 # Static assets served as-is
│   ├── index.html          # HTML template (React mount point)
│   └── _redirects          # SPA fallback redirect for hosting
├── src/
│   ├── index.js            # React entry point
│   ├── reportWebVitals.js  # Performance metric hook
│   ├── Assets/             # Images & logos (avatar, affiliate logos, project shots)
│   ├── Components/          # Reusable UI components
│   │   ├── Navigation.jsx   # Header/nav with hamburger menu (useState toggle)
│   │   └── AffiliateCard.jsx # Card used on the Affiliates page
│   ├── Pages/              # Route-level page components
│   │   ├── App.jsx          # Router + icon registration
│   │   ├── Home/            # Home.jsx
│   │   ├── Portfolio/       # Portfolio.jsx
│   │   ├── Contact/         # Contact.jsx (EmailJS form)
│   │   ├── Affiliates/      # Affiliates.jsx (renders AffiliateCard)
│   │   ├── About/           # About.jsx (not currently routed)
│   │   └── Blog/            # Blog.jsx (not currently routed)
│   ├── Utility/            # Helpers / integrations
│   │   └── firebase.js      # Firebase initialization
│   ├── Helpers/            # (reserved; currently empty)
│   └── Styles/             # Sass — 7-1 inspired architecture (see below)
├── package.json
├── README.md               # Project README
└── REACTREADME.md          # Default Create React App README
```

## Styles Architecture

All styles compile from [src/Styles/main.scss](src/Styles/main.scss), which imports each numbered layer in cascade order:

| Layer | Folder | Purpose |
| --- | --- | --- |
| `0-Plugins` | `0-Plugins/` | Third-party styles — includes the **hamburgers** menu-icon library |
| `1-Helpers` | `1-Helpers/` | `_variables`, `_functions`, `_mixins` |
| `2-Base` | `2-Base/` | `_reset`, `_global` base element styles |
| `3-Layout` | `3-Layout/` | Structural layout — e.g. `_navigation` |
| `4-Modules` | `4-Modules/` | Reusable components — e.g. `_button` |
| `5-Templates` | `5-Templates/` | Per-page styles — `_home`, `_portfolio`, `_contact`, `_about`, `_affiliates` |

Each folder has an index partial (e.g. `_3-layout.scss`) that forwards its members, which `main.scss` imports.

## Components

- **Navigation** ([src/Components/Navigation.jsx](src/Components/Navigation.jsx)) — site header with `NavLink`s, a `useState`-driven hamburger menu toggle, and a copyright footer using the live year.
- **AffiliateCard** ([src/Components/AffiliateCard.jsx](src/Components/AffiliateCard.jsx)) — presentational card (props: `company`, `image`, `notes`, `link`) rendered on the Affiliates page.

## Scripts

From [package.json](package.json):

| Command | Action |
| --- | --- |
| `npm start` | Run the dev server (`react-scripts start`) |
| `npm run build` | Production build (`react-scripts build`) |
| `npm test` | Run tests (`react-scripts test`) |
| `npm run eject` | Eject CRA configuration |

## Notes

- The Firebase config in [src/Utility/firebase.js](src/Utility/firebase.js) contains hardcoded credentials; these are client-side keys but worth keeping in mind when reviewing security/secrets.
- `About` and `Blog` are scaffolded but disabled in both routing and navigation — re-enable by uncommenting the relevant blocks in `App.jsx` and `Navigation.jsx`.
