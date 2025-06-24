import styled, { keyframes } from "styled-components";

interface PageButtonProps {
  active?: boolean;
}

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.backgroundContainer};
`;

export const Th = styled.th`
  font-size: 14px;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #00000022;
`;

export const Td = styled.td`
  font-size: 14px;
  padding: 10px;
  border-bottom: 1px solid #00000022;
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

export const SkeletonRow = styled.tr`
  td {
    background-color: ${({ theme }) => theme.colors.backgroundContainer};
    height: 20px;
    border-radius: 4px;
    animation: ${pulse} 1.5s infinite ease-in-out;
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const PageButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<PageButtonProps>`
  padding: 8px 12px;
  margin: 0 4px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundContainer};
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.background : theme.colors.backgroundContainer};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
`;
