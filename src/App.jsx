import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Standings from "./Pages/Standings";
import Favorites from "./Pages/Favorites";
import TeamDetails from "./Pages/TeamDetails";

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
        </Routes>
      </main>

      <footer className="site-footer">
        <p style={{ textAlign: "center" }}>
          GameDay Tracker ● Built with React and TheSportsDB API
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
