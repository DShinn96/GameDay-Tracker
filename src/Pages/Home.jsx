import { useState } from "react";
import TeamCard from "../Components/TeamCard";
import SearchBar from "../Components/SearchBar";
import { getTeamsByLeague } from "../API/sportsApi";

function Home() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");

  async function handleSelectLeague(league) {
    setSelectedLeague(league);
    setLoading(true);
    setError("");

    try {
      const results = await getTeamsByLeague(league);
      setTeams(results);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while loading teams.");
      setTeams([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="page-header">
        <h1>GameDay Tracker</h1>
        <p>
          Explore teams by league, view recent results, and check upcoming match
          ups.
        </p>
        <SearchBar onSelectLeague={handleSelectLeague} />
      </div>

      {selectedLeague && (
        <p className="status-text">Showing teams for {selectedLeague}</p>
      )}
      {loading && <p className="status-text">Loading teams...</p>}
      {error && <p className="status-text error-text">{error}</p>}

      {!loading && !selectedLeague && (
        <div className="empty-state">
          <p>Select a league to start browsing teams.</p>
        </div>
      )}

      {!loading && selectedLeague && teams.length === 0 && !error && (
        <div className="empty-state">
          <p>No teams available right now for this league.</p>
        </div>
      )}

      {!loading && teams.length > 0 && (
        <div className="team-grid">
          {teams.map((team) => (
            <TeamCard key={team.idTeam} team={team} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
