import { useAuthStorage } from "./useAuthStorage";
import { useAuthForm } from "./useAuthForm";

export function useRegister(onSuccess: () => void) {
  const { register, error } = useAuthStorage();

  const { email, password, handleSubmit, setEmail, setPassword } = useAuthForm(
    register,
    onSuccess
  );

  return {
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleRegister: handleSubmit,
  };
}
