import { useEffect, useState } from "react";

export interface AuthUser {
  email: string;
  password: string;
}

const AUTH_KEY = "authUsers";
const SESSION_KEY = "isAuthenticated";

export function useAuthStorage() {
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);
    setIsAuthenticated(session === "true");
    setIsAuthLoading(false);
  }, []);

  const getUsers = (): AuthUser[] => {
    const stored = localStorage.getItem(AUTH_KEY);
    return stored ? JSON.parse(stored) : [];
  };

  const saveUsers = (users: AuthUser[]) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(users));
  };

  const register = (email: string, password: string): boolean => {
    setError("");
    const users = getUsers();
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError("E-mail já cadastrado.");
      return false;
    }

    if (password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres.");
      return false;
    }

    users.push({ email, password });
    saveUsers(users);
    return true;
  };

  const login = (email: string, password: string): boolean => {
    setError("");
    const users = getUsers();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      setError("E-mail ou senha inválidos.");
      return false;
    }

    localStorage.setItem(SESSION_KEY, "true");
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  };

  return {
    error,
    setError,
    register,
    login,
    logout,
    isAuthenticated,
    isAuthLoading,
  };
}
