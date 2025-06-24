import styled, { keyframes } from "styled-components";

const fade = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

export const SplashWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundContainer};
  color: ${({ theme }) => theme.colors.borderColor};
  font-size: 1.5rem;
  font-weight: bold;
  animation: ${fade} 0.6s ease-in-out;
`;
