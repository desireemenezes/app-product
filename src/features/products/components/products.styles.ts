import styled, { keyframes } from "styled-components";

interface PageButtonProps {
  active?: boolean;
}

export const HeaderActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const FilterInput = styled.input`
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  flex: 1;
  max-width: 300px;
  background: ${({ theme }) => theme.colors.backgroundContainer};
  color: ${({ theme }) => theme.colors.textLine};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLabel};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.backgroundContainer};
`;

export const Th = styled.th`
  font-size: 14px;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const Td = styled.td`
  font-size: 14px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const ProductListWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.backgroundContainer};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  padding: 1rem;
  gap: 1rem;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.borderColor};
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  gap: 0.25rem;
`;

export const ProductLabel = styled.span`
  font-weight: bold;
  font-size: 0.875rem;
`;

export const ProductValue = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLine};
`;

export const TableWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  position: relative;
`;

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1rem;
  float: right;

  &:hover {
    opacity: 0.9;
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 6px;
  transition: background 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.colors.textLabel};
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.borderColor};
  }
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
