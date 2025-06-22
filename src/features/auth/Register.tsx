import {
  LoginContainer,
  LoginForm,
  Input,
  Button,
  ErrorMessage,
  Title,
} from "./Auth.styles";
import { useRegister } from "./hooks/useRegister";

interface RegisterProps {
  onSuccess: () => void;
}

export function Register({ onSuccess }: RegisterProps) {
  const { email, password, error, setEmail, setPassword, handleRegister } =
    useRegister(onSuccess);

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleRegister}>
        <Title>Cadastro</Title>

        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit">Registrar</Button>
      </LoginForm>
    </LoginContainer>
  );
}
