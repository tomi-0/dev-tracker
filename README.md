# 🛠️ Dev Tracker

A full-stack web app for developers to log coding projects and track skills they're learning. Built as a learning project while working through [Full Stack Open](https://fullstackopen.com/).

![App Screenshot](./docs/screenshot.png) <!-- Add a screenshot once your UI is built -->

---

## ✨ Features

- 📁 **Project logging** — Add and manage coding projects with status tracking (In Progress / Completed / Paused)
- 🧠 **Skill tracker** — Log technologies you're learning with a self-rated confidence level
- 🔗 **Link skills to projects** — Associate what you learned with the project that taught you it
- 🔐 **Authentication** — Secure sign-up and login via Supabase Auth
- 📊 **Dashboard** — Overview of your progress at a glance

---

## 🧰 Tech Stack

**Frontend**
- React (Vite)
- React Router

**Backend**
- Node.js
- Express.js
- REST API

**Database & Auth**
- [Supabase](https://supabase.com/) (PostgreSQL)
- Supabase Auth (email/password)

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A free [Supabase](https://supabase.com/) account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/dev-tracker.git
   cd dev-tracker
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the `/server` directory (see [Environment Variables](#environment-variables) below).

4. **Run the app**
   ```bash
   # Start the backend (from /server)
   npm run dev

   # Start the frontend (from /client)
   npm run dev
   ```

   The frontend will run on `http://localhost:5173` and the backend on `http://localhost:3001`.

---

## 🔑 Environment Variables

Create a `.env` file in the `/server` directory with the following:

```env
PORT=3001
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 📁 Project Structure

```
dev-tracker/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route-level pages (Dashboard, Projects, Skills)
│   │   ├── services/       # API call functions
│   │   └── App.jsx
│   └── package.json
│
├── server/                 # Express backend
│   ├── controllers/        # Route handler logic
│   ├── routes/             # API route definitions
│   ├── middleware/         # Auth middleware, error handling
│   └── index.js
│
└── README.md
```

---

## 🗺️ Roadmap

- [ ] Project tagging by tech stack
- [ ] Daily coding streak tracker
- [ ] Public profile page to share progress
- [ ] Export progress as PDF

---

## 📖 Learning Notes

This project was built to practice and consolidate concepts from [Full Stack Open](https://fullstackopen.com/), including:

- React state and component design (Part 2)
- Node.js and Express REST APIs (Part 3)
- Supabase as a managed PostgreSQL backend
- JWT-based authentication

---

## 📄 License

[MIT](./LICENSE)
