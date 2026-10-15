# CampusConnect

**Your Campus. One Connected Experience.**

CampusConnect is a responsive, student-facing college portal prototype built with React, Vite, JavaScript, CSS, React Router, and Lucide React. It is designed as a beginner-friendly innovation project. It is a frontend prototype, not a production college-management system.

## Features

- Demo login and logout flow with basic client-side validation.
- Dashboard with sample timetable, library statistics, resources, marketplace items, and notices.
- Monday–Saturday timetable with day and week views and a sample schedule generator.
- Resource availability finder for seats, study spaces, classrooms, and study-resource records.
- Interactive library seat map with filters and simulated seat statuses.
- Study resource search, category/subject/semester filters, sorting, and detail views.
- Marketplace search, category/price filters, sorting, item details, and a validated Add Listing form.
- Notice board with search, category/priority filters, sorting, detail view, and read/unread status.
- Editable demo student profile.
- Responsive desktop sidebar, mobile navigation drawer, toast messages, empty states, and localStorage persistence for selected demo data.

## Technology stack

- React + JavaScript
- Vite
- React Router
- Lucide React
- CSS3

## Prerequisites

Install a current LTS version of Node.js and npm. Verify with:

```bash
node -v
npm -v
```

## Run locally

1. Extract the project folder and open a terminal inside `campusconnect`.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL Vite prints in the terminal (usually `http://localhost:5173`).
5. Use **Continue with demo account** on the login page, or enter `student@example.edu` and any password containing at least six characters.

## Production build

```bash
npm run build
npm run preview
```

Vite creates the optimized frontend in `dist/`. The preview command serves that build locally.

## Folder structure

```text
campusconnect/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── SeatMap.jsx
│   │   └── UI.jsx
│   ├── data/
│   │   └── index.js
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Timetable.jsx
│   │   ├── Availability.jsx
│   │   ├── Library.jsx
│   │   ├── StudyResources.jsx
│   │   ├── Marketplace.jsx
│   │   ├── NoticeBoard.jsx
│   │   └── Profile.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## What works in the frontend

- Client-side navigation between all nine pages.
- Form validation and inline feedback for login, profile editing, and marketplace listing creation.
- Search, filters, sorting, seat selection, day/week timetable views, sample timetable generation, and notice read state.
- Demo session state, marketplace listings, read notices, and profile edits persist in the same browser via `localStorage`.
- Layout adapts for desktop, tablet, and mobile screens.

## Sample data and prototype limitations

- Timetable, classroom availability, study-space availability, library seats, resources, and notices use fictional/sample data from `src/data/index.js`.
- The timetable generator changes the displayed sample ordering; it does **not** run a genetic algorithm or validate scheduling conflicts.
- Library seat status is simulated. No camera, sensor, or computer-vision service is connected.
- Resource cards are metadata examples. No actual study-resource files are bundled, so the app intentionally avoids broken download links.
- Marketplace listings are local to one browser. There is no shared listing database, seller contact system, checkout, payment, or transaction handling.
- Profile edits and notice read state are local to the browser.
- Demo login only checks basic form validity. It is not secure authentication and does not verify a real student identity.

## Backend work needed for production

A production version would need a backend/API and database for users, permissions, notices, resources, listings, timetable records, and live resource availability. Production authentication should use a secure server-side identity/session solution. Validate and authorize all writes on the server, apply rate limits, protect sensitive data, and use HTTPS. Do not treat client-side validation or `localStorage` as a security boundary.

## Future AI/ML integrations

- **Timetable optimization:** a genuine constraint/optimization service could consider instructor availability, room capacity, student groups, and conflict constraints. The current generator is only a demo interaction.
- **Library occupancy:** an authorized privacy-aware sensor/computer-vision pipeline could provide estimates. No camera feed or vision model is implemented here.
- **Resource recommendations:** a backend recommendation service could suggest materials based on a student's course and chosen preferences. Current resources are a static sample catalogue.
- **Academic assistant:** a separately hosted AI service could offer guidance with suitable privacy, safety, and data controls. No generative AI service is connected.

## Troubleshooting

- **`npm` or `node` not found:** install Node.js LTS, close and reopen your terminal, and retry `node -v` / `npm -v`.
- **Dependencies fail to install:** check your internet connection and Node.js version, then retry `npm install`.
- **Port 5173 is busy:** Vite normally offers another available port; use the URL shown in the terminal.
- **A blank page appears:** inspect the browser console and terminal for import or syntax errors, then restart with `npm run dev`.
- **Changes seem not to persist:** prototype data uses browser `localStorage`; it is not shared across browsers/devices. Clear site storage only if you want to reset the demo data.

## Project status

This repository provides a functional frontend prototype with sample data. It should be presented as a student innovation demo, not as a live or production-connected college system.
