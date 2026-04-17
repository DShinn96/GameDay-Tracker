import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const { login: handleLogin } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username.trim()) return;

    handleLogin(username);
    navigate("/");
  }

  return (
    <div className="page-header">
      <h1>Login</h1>
      <p>Enter a username to continue.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="standings-select"
        />

        <button type="submit" className="favorite-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
