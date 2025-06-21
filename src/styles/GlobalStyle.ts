import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Variáveis CSS baseadas no tema */
  :root {
    --background: ${({ theme }) => theme.colors.background};
    --text: ${({ theme }) => theme.colors.text};
    --primary: ${({ theme }) => theme.colors.primary};
    --error: ${({ theme }) => theme.colors.error};
  }

  /* Reset e estilos base */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--background);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: var(--primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    background-color: var(--primary);
    color: var(--text);
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.2s ease;

    &:hover {
      opacity: 0.85;
    }
  }
`;
