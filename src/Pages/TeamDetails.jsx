import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getLastEvents, getNextEvents } from "../api/sportsApi";

function TeamDetails() {
  const { id } = useParams();
  const location = useLocation();

  const [team, setTeam] = useState(location.state?.team || null);
  const [lastGames, setLastGames] = useState([]);
  const [nextGames, setNextGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadTeamData() {
      setLoading(true);
      setError("");

      try {
        const [recentGames, upcomingGames] = await Promise.all([
          getLastEvents(id),
          getNextEvents(id),
        ]);

        setLastGames(recentGames);
        setNextGames(upcomingGames);

        if (location.state?.team) {
          setTeam(location.state.team);
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong while loading team details.");
      } finally {
        setLoading(false);
      }
    }

    loadTeamData();
  }, [id, location.state]);

  if (loading) return <p className="status-text">Loading team details...</p>;
  if (error) return <p className="status-text">{error}</p>;
  if (!team)
    return (
      <p className="status-text">
        Team not found. Go back and select a team again.
      </p>
    );

  return (
    <div className="team-details-page">
      <div className="team-header-card">
        <img
          src={team.strBadge || "https://via.placeholder.com/100"}
          alt={team.strTeam}
          className="team-detail-logo"
        />
        <div>
          <h1>{team.strTeam}</h1>
          <p>
            <strong>League:</strong> {team.strLeague}
          </p>
          <p>
            <strong>Sport:</strong> {team.strSport}
          </p>
          <p>
            <strong>Country:</strong> {team.strCountry || "N/A"}
          </p>
        </div>
      </div>

      <section className="section-card">
        <h2>Recent Games</h2>
        {lastGames.length > 0 ? (
          lastGames.map((game) => (
            <div key={game.idEvent} className="game-card">
              <p>
                {game.strHomeTeam} {game.intHomeScore} - {game.intAwayScore}{" "}
                {game.strAwayTeam}
              </p>
              <p>{game.dateEvent}</p>
            </div>
          ))
        ) : (
          <p>No recent games found.</p>
        )}
      </section>

      <section className="section-card">
        <h2>Upcoming Games</h2>
        {nextGames.length > 0 ? (
          nextGames.map((game) => (
            <div key={game.idEvent} className="game-card">
              <p>
                {game.strHomeTeam} vs {game.strAwayTeam}
              </p>
              <p>{game.dateEvent}</p>
            </div>
          ))
        ) : (
          <p>No upcoming games found.</p>
        )}
      </section>
    </div>
  );
}

export default TeamDetails;
