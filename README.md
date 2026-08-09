# 🛠️ Dev Tracker

A full-stack web app for developers to log coding projects and track skills they're learning. Built as a learning project while working through [Full Stack Open](https://fullstackopen.com/).

<img width="1917" height="956" alt="Dev Tracker screenshot" src="https://github.com/user-attachments/assets/0a999a10-5b0a-49cd-9362-9280dbb3fc6e" />

## 🎥 Demo

https://github.com/user-attachments/assets/7ca0c433-4f9d-4f2d-a734-4ca67e55d8e2

---

## ✨ Features

- 📁 **Project logging** — Add, edit, and delete coding projects with status tracking (In Progress / Completed / Paused)
- 🧠 **Skill tracker** — Log technologies you're learning with a self-rated confidence level (1–5)
- ✏️ **Edit & delete** — Update or remove projects and skills at any time
- 📋 **Activity log** — Automatically tracks when you add or update projects and skills
- 📊 **Dashboard** — Weekly overview of your progress including recent activity and in-progress projects
- 🔐 **Authentication** — Secure sign-up and login via Supabase Auth _(coming soon)_

---

## 🧰 Tech Stack

**Frontend**
- React (Vite)
- React Router
- Lucide React (icons)
- Pure CSS with CSS custom properties

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
git clone https://github.com/tomi-0/dev-tracker.git
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

Create a `.env` file in the `/server` directory (see [Environment Variables](#-environment-variables) below).

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

```
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
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectForm.jsx
│   │   │   ├── UpdateProjectForm.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   ├── SkillForm.jsx
│   │   │   ├── UpdateSkillForm.jsx
│   │   │   └── ActivityLog.jsx
│   │   ├── pages/          # Route-level pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   ├── data/
│   │   │   └── testData.js
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

- [ ] Connect frontend to Supabase backend
- [ ] User authentication (sign up / login)
- [ ] Persist projects and skills to database
- [ ] Project tagging by tech stack
- [ ] Daily coding streak tracker
- [ ] Public profile page to share progress
- [ ] Export progress as PDF

---

## 📖 Learning Notes

This project was built to practice and consolidate concepts from [Full Stack Open](https://fullstackopen.com/), including:

- React state management and component design (Parts 1–2)
- Lifting state up and passing handlers as props
- Controlled components and form handling
- React Router for client-side navigation
- Node.js and Express REST APIs (Part 3)
- Supabase as a managed PostgreSQL backend
- JWT-based authentication (Part 4)

---

## 📄 License

[MIT](./LICENSE)
