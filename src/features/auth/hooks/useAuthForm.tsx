import { useState } from "react";
import { toast } from "react-toastify";

export function useAuthForm(
  onSubmit: (email: string, password: string) => boolean,
  onSuccess?: () => void
) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      const msg = "Preencha todos os campos.";
      toast.error(msg);
      setError(msg);
      return;
    }

    const success = onSubmit(email, password);

    if (success) {
      toast.success("Ação realizada com sucesso!");
      onSuccess?.(); // só executa se for passado
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
    setError,
    handleSubmit,
  };
}
