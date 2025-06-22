import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStorage } from "./useAuthStorage";
import { toast } from "react-toastify";

export function useRegister(onSuccess: () => void) {
  const { register, error, setError } = useAuthStorage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      toast.error("Preencha todos os campos.");
      return setError("Preencha todos os campos.");
    }

    const success = register(email, password);

    if (success) {
      toast.success("Cadastro realizado com sucesso!");
      onSuccess();
      // Opcional: navegar para login, mas onSuccess geralmente faz isso
    } else {
      toast.error(error);
    }
  };

  return {
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleRegister,
  };
}
