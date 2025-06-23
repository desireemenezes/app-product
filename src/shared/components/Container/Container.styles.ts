// Container.styles.ts
import styled from "styled-components";

interface WrapperProps {
  $isAuthPage?: boolean;
}

export const ContainerWrapper = styled.div<WrapperProps>`
  flex: 1;
  margin-left: ${({ $isAuthPage }) => ($isAuthPage ? "180px" : "0px")};
  padding: 1rem 2rem;
  transition: margin 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
