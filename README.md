# WCMS Administration Module

A responsive administration dashboard for managing users, roles, departments, sites, positions, workflows, organizational structure, audit logs and system settings.

## Highlights

- Responsive desktop and mobile layout
- Operational dashboard with statistics and activity visualization
- Searchable user, department and audit tables
- Role and organization views
- Working create-record modals and success notifications
- API service layer ready for backend integration

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production build

```bash
cd frontend
npm run build
```

## Project structure

```text
wcms/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── styles.css
│   ├── package.json
│   └── vite.config.js
├── backend/
└── README.md
```
