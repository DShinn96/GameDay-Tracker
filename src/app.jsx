import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Standings from "./pages/standings";
import Favorites from "./pages/favorites";
import TeamDetails from "./pages/teamdetails";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/team/:id" element={<TeamDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p style={{ textAlign: "center" }}>
          GameDay Tracker • Built with React, Vite, and TheSportsDB API
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
