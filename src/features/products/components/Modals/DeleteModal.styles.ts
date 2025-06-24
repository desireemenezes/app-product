// Styles
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textLine};
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  text-align: center;
`;

export const Actions = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const CancelButton = styled.button`
  padding: 0.6rem 1rem;
  background: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  padding: 0.6rem 1rem;
  background: ${({ theme }) => theme.colors.error};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
