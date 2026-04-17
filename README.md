# 🏟️ GameDay Tracker

A responsive sports web application that allows users to explore teams, view game data, and save favorites — built with React and deployed on Vercel.

🔗 **Live App:** https://game-day-tracker.vercel.app/  
📦 **GitHub Repo:** https://github.com/DShinn96/GameDay-Tracker

---

## 🚀 Features

- 🔍 Browse teams by league (NBA, NFL, MLB, NHL)
- 📊 View team details, recent games, and upcoming matchups
- ⭐ Add and remove favorite teams
- 👤 Mock user authentication (login/signup)
- 💾 Favorites persist per user using localStorage
- 📱 Fully responsive design
- ⚡ Fast performance with Vite

---

## 🛠 Tech Stack

- **Frontend:** React
- **Routing:** React Router
- **Build Tool:** Vite
- **Styling:** CSS
- **API:** TheSportsDB
- **Deployment:** Vercel

---

## 🧠 How It Works

- Users can select a league and browse teams
- Clicking a team shows game data (recent + upcoming)
- Users can "log in" with a mock username system
- Favorites are stored locally per user using dynamic keys:

favorites\_{username}

---

## 📸 Screenshots

> (Add screenshots here once you take them)

### Home Page

![Home](./screenshots/home.png)

### Team Details

![Team Details](./screenshots/team-details.png)

### Favorites Page

![Favorites](./screenshots/favorites.png)

---

## 🧪 Local Development

```bash
git clone https://github.com/DShinn96/GameDay-Tracker.git
cd GameDay-Tracker
npm install
npm run dev
```
