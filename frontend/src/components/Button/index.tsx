import { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
  isSecondary?: boolean;
}

export function Button({ children, isSecondary }: Props) {
  return <Container isSecondary={isSecondary}>{children}</Container>;
}

Button.defaultProps = {
  isSecondary: undefined,
};
