# Stemora – Lighting Young Minds

React + Vite + Tailwind CSS (frontend) · Node + Express (backend).
Same palette, layout and sections as the original static page.

## Run it (dev)
```bash
npm run install:all     # installs root, server and client deps
npm run dev             # server on :5000, client on :5173
```
Open http://localhost:5173

## Production
```bash
npm run build           # builds client/dist
npm start               # Express serves the API + built site on :5000
```

## Structure
```
server/
  index.js            Express app + routes
  store.js            saves enquiries to data/enquiries.json
  data/content.js     ALL website text/placeholders (edit here)
  .env                PORT, CLIENT_ORIGIN, ADMIN_KEY
client/
  tailwind.config.js  palette: navy, teal, gold, paper, grid …
  src/components/     one file per section
  src/api.js          fetch helpers
```

## API
| Method | Route            | What it does                                   |
|--------|------------------|------------------------------------------------|
| GET    | /api/content     | all page content                               |
| POST   | /api/enquiries   | contact form (validated, rate-limited 10/hr)   |
| GET    | /api/enquiries   | list enquiries – header `x-admin-key: <ADMIN_KEY>` |
| GET    | /api/health      | health check                                   |

Change `ADMIN_KEY` in `server/.env` before deploying.
