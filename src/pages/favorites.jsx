import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Favorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  if (!user) {
    return (
      <div className="page-header">
        <h1>Favorite Teams</h1>
        <p>Please log in to view your favorite teams.</p>
        <Link to="/login" className="login-link-btn">
          Go to Login
        </Link>
      </div>
    );
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("mockUser"));
    const key = user ? `favorites_${user.username}` : "favorites_guest";

    const stored = JSON.parse(localStorage.getItem(key)) || [];
    setFavorites(stored);
  }, []);

  function removeFavorite(teamId) {
    const updated = favorites.filter((team) => team.idTeam !== teamId);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  return (
    <div>
      <div className="page-header">
        <h1>Favorite Teams</h1>
        <p>Save teams here for quick access later.</p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <p>No favorite teams yet.</p>
          <p>Go add some from the home page. ⭐</p>
        </div>
      ) : (
        <div className="team-grid">
          {favorites.map((team) => (
            <div key={team.idTeam} className="team-card">
              <Link
                to={`/team/${team.idTeam}`}
                state={{ team }}
                className="favorite-team-link"
              >
                <img
                  src={team.strBadge || "https://via.placeholder.com/80"}
                  alt={team.strTeam}
                  className="team-logo"
                />
                <h3>{team.strTeam}</h3>
                <p>{team.strLeague}</p>
                <p>{team.strSport}</p>
              </Link>

              <button
                type="button"
                className="remove-btn"
                onClick={() => removeFavorite(team.idTeam)}
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
