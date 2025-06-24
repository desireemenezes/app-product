import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundContainer};
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const MenuToggle = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
