function SearchBar({ onSelectLeague }) {
  function handleChange(e) {
    onSelectLeague(e.target.value);
  }

  return (
    <div className="search-bar">
      <select onChange={handleChange} defaultValue="">
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
  );
}

export default SearchBar;
