import { useState } from "react";
import { Register } from "./Register";
import { Login } from "./Login";
import { SwitchButton, SwitchContainer } from "./Auth.styles";

export function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSuccessRegister = () => {
    setIsRegistering(false); // Volta para login após registro
  };

  return (
    <>
      {isRegistering ? (
        <Register onSuccess={handleSuccessRegister} />
      ) : (
        <Login />
      )}

      <SwitchContainer>
        {isRegistering ? (
          <>
            Já tem conta?{" "}
            <SwitchButton onClick={() => setIsRegistering(false)}>
              Entrar
            </SwitchButton>
          </>
        ) : (
          <>
            Não tem conta?{" "}
            <SwitchButton onClick={() => setIsRegistering(true)}>
              Cadastrar
            </SwitchButton>
          </>
        )}
      </SwitchContainer>
    </>
  );
}
