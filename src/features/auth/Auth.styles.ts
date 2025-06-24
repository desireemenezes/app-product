import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 90vh; /* ocupa toda a altura da tela */
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  background: ${({ theme }) => theme.colors.backgroundContainer};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.borderColor};
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundContainer};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-align: center;
`;

export const Container = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.backgroundContainer};
`;

export const Tabs = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const TabButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 0.6rem;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : "transparent"};
  color: ${({ active, theme }) => (active ? "white" : theme.colors.textLabel)};
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}cc;
    color: white;
  }
`;

export const SwitchContainer = styled.div`
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
`;

export const SwitchButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;

  &:hover {
     opacity: 0.8; /* aplica leve transparência ao hover */
`;
