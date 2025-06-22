import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return setError("Preencha todos os campos.");
    }

    if (password.length < 6) {
      return setError("A senha deve ter no mínimo 6 caracteres.");
    }

    // Simulação de login
    if (email === "admin@admin.com" && password === "123456") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard", { replace: true });
    } else {
      setError("Login ou senha inválidos.");
    }
  };

  return {
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleLogin,
  };
}
