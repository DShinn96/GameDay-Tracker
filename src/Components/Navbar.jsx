import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🏟️ GameDay Tracker</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/standings">League Overview</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;
