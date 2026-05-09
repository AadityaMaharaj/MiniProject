import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);

  useEffect(() => {
    if (token) {
      // Decode token to get user info if needed
      // For simplicity, assume token is valid
      setUser({ role: 'college' }); // Placeholder, decode from token
    }
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('authToken', newToken);
    // Decode and set user
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};