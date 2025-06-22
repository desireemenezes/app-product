import { ContainerWrapper } from "./Container.styles";
import type { ReactNode, MouseEventHandler } from "react";

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Container = ({ children, onClick }: Props) => {
  return <ContainerWrapper onClick={onClick}>{children}</ContainerWrapper>;
};
