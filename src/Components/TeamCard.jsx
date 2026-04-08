import { Link } from "react-router-dom";
import { useState } from "react";

function TeamCard({ team }) {
  const [message, setMessage] = useState("");

  function handleFavorite(e) {
    e.preventDefault();
    e.stopPropagation();

    const existing = JSON.parse(localStorage.getItem("favorites")) || [];

    const alreadyFavorited = existing.find((t) => t.idTeam === team.idTeam);

    if (alreadyFavorited) {
      setMessage("Already in favorites ⭐");
      return;
    }

    const updated = [...existing, team];
    localStorage.setItem("favorites", JSON.stringify(updated));
    setMessage("Added to favorites ⭐");
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
