import {
  LoginContainer,
  LoginForm,
  Input,
  Button,
  ErrorMessage,
  Title,
} from "./Auth.styles";
import { useLogin } from "./hooks/useLogin";

export function Login() {
  const { email, password, error, setEmail, setPassword, handleLogin } =
    useLogin();

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <Title>Entrar</Title>

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
          autoComplete="current-password"
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit">Entrar</Button>
      </LoginForm>
    </LoginContainer>
  );
}
