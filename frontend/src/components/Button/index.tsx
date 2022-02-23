import { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
}

export function Button({ children }: Props) {
  return <Container>{children}</Container>;
}
