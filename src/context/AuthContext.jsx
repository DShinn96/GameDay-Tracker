import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("mockUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  function login(username) {
    const userData = { username };
    localStorage.setItem("mockUser", JSON.stringify(userData));
    setUser(userData);
  }

  function logout() {
    localStorage.removeItem("mockUser");
    setUser(null);
  }

  function signup(username) {
    // same as login for mock
    login(username);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
