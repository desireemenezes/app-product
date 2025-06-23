import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundContainer};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLabel};
`;

export const IconWrapper = styled.span`
  font-size: 14px;
  margin-right: 8px;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
`;

export const Text = styled.span``;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.textLine};
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr); // 3 cards por linha

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); // 2 cards por linha em telas médias
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; // 1 card por linha em telas pequenas
  }
`;

export const CategoryName = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;

export const Emoji = styled.span`
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 8px;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;
