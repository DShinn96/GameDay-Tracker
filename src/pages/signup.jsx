import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username.trim()) return;

    signup(username);
    navigate("/");
  }

  return (
    <div className="page-header">
      <h1>Sign Up </h1>
      <p>Create a mock account (no real data stored).</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="standings-select"
        />

        <button type="submit" className="favorite-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
