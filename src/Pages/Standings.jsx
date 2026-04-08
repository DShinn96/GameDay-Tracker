import { useState } from "react";
import { getTeamsByLeague } from "../api/sportsApi";

function Standings() {
  const [teams, setTeams] = useState([]);
  const [league, setLeague] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadStandings(selectedLeague) {
    setLeague(selectedLeague);
    setLoading(true);
    setError("");

    try {
      const results = await getTeamsByLeague(selectedLeague);
      setTeams(results);
    } catch (err) {
      console.error(err);
      setError("Could not load league overview.");
      setTeams([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="page-header">
        <h1>League Overview</h1>
        <p>Browse teams for a selected league in a standings-style layout.</p>

        <select
          className="standings-select"
          onChange={(e) => loadStandings(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Select a league
          </option>
          <option value="NBA">NBA</option>
          <option value="NFL">NFL</option>
          <option value="MLB">MLB</option>
          <option value="NHL">NHL</option>
          <option value="English Premier League">English Premier League</option>
        </select>
      </div>

      {league && <p className="status-text">Showing: {league}</p>}
      {loading && <p className="status-text">Loading league overview...</p>}
      {error && <p className="status-text">{error}</p>}

      {!loading && teams.length > 0 && (
        <div className="standings-wrapper">
          <table className="standings-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>League</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr key={team.idTeam}>
                  <td className="standing-rank">{index + 1}</td>
                  <td>
                    <div className="standing-team-cell">
                      <img
                        src={team.strBadge || "https://via.placeholder.com/34"}
                        alt={team.strTeam}
                        className="standing-logo"
                      />
                      <span>{team.strTeam}</span>
                    </div>
                  </td>
                  <td>{team.strLeague}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Standings;
