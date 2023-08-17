import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ ...props }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [name, setName] = useState("");

  const login = (name) => {
    setName(name);
    setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ name, login, logout, authenticated }}
      {...props}
    />
  );
};
