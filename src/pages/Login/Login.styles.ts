import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
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
  box-shadow: 0 0 10px #00000022;
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
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
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
