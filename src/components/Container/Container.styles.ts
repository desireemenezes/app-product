import styled from "styled-components";

export const ContainerWrapper = styled.div`
  flex: 1;
  margin-left: 180px;
  padding: 1rem 2rem;
  transition: margin 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
