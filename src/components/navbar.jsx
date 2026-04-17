import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2>🏟️ GameDay Tracker</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/standings">League Overview</Link>
        <Link to="/favorites">Favorites</Link>

        {user ? (
          <>
            <span>Hi, {user.username}</span>
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="favorite-btn"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
