import { useNavigate } from "react-router-dom";
import { useAuthStorage } from "./useAuthStorage";
import { useAuthForm } from "./useAuthForm";

export function useLogin() {
  const { login, error } = useAuthStorage();
  const navigate = useNavigate();

  const { email, password, handleSubmit, setEmail, setPassword } = useAuthForm(
    login,
    () => navigate("/dashboard")
  );

  return {
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleLogin: handleSubmit,
  };
}
