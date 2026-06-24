# WCMS Backend

This directory is reserved for the production API implementation.

Suggested modules:

- `app/` — application bootstrap and middleware
- `routes/` — REST API route definitions
- `controllers/` — request handlers
- `models/` — domain and persistence models
- `database/` — migrations, seed data and connection configuration

The current administration interface uses local demonstration data in `frontend/src/data.js` and is ready to connect to an API through `frontend/src/services/api.js`.
