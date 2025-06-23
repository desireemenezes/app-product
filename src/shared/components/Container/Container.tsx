// Container.tsx
import { ContainerWrapper } from "./Container.styles";
import type { ReactNode, MouseEventHandler } from "react";

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isAuthPage?: boolean;
}

export const Container = ({ children, onClick, isAuthPage }: Props) => {
  return (
    <ContainerWrapper onClick={onClick} $isAuthPage={isAuthPage}>
      {children}
    </ContainerWrapper>
  );
};
