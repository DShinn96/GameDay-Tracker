import { Link } from "react-router-dom";
import { useState } from "react";

function TeamCard({ team }) {
  const [message, setMessage] = useState("");

  function showMessage(text) {
    setMessage(text);
    setTimeout(() => setMessage(""), 2000);
  }

  function handleFavorite(e) {
    e.preventDefault();
    e.stopPropagation();

    const user = JSON.parse(localStorage.getItem("mockUser"));

    if (!user) {
      showMessage("Please log in to save favorites");
      return;
    }

    const key = `favorites_${user.username}`;
    const existing = JSON.parse(localStorage.getItem(key)) || [];

    const alreadyFavorited = existing.find((t) => t.idTeam === team.idTeam);

    if (alreadyFavorited) {
      showMessage("Already in favorites ⭐");
      return;
    }

    const updated = [...existing, team];
    localStorage.setItem(key, JSON.stringify(updated));
    showMessage("Added to favorites ⭐");
  }

  return (
    <Link to={`/team/${team.idTeam}`} state={{ team }} className="team-card">
      <img
        src={team.strBadge || "https://via.placeholder.com/80"}
        alt={team.strTeam}
        className="team-logo"
      />
      <h3>{team.strTeam}</h3>
      <p>{team.strLeague}</p>
      <p>{team.strSport}</p>

      <button type="button" onClick={handleFavorite} className="favorite-btn">
        ⭐ Favorite
      </button>

      {message && <p className="fav-message">{message}</p>}
    </Link>
  );
}

export default TeamCard;
