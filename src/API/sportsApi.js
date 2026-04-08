const BASE_URL = "https://www.thesportsdb.com/api/v1/json/123";

export async function getTeamsByLeague(leagueName) {
  const response = await fetch(
    `${BASE_URL}/search_all_teams.php?l=${encodeURIComponent(leagueName)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch teams");
  }

  const data = await response.json();
  return data.teams || [];
}

export async function getLastEvents(teamId) {
  const response = await fetch(`${BASE_URL}/eventslast.php?id=${teamId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch recent games");
  }

  const data = await response.json();
  return data.results || [];
}

export async function getNextEvents(teamId) {
  const response = await fetch(`${BASE_URL}/eventsnext.php?id=${teamId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch upcoming games");
  }

  const data = await response.json();
  return data.events || [];
}
