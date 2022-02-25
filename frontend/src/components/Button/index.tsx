import { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
  isSecondary?: boolean;
  onClick?: () => void;
}

export function Button({ children, isSecondary, onClick }: Props) {
  return (
    <Container onClick={onClick} isSecondary={isSecondary}>
      {children}
    </Container>
  );
}

Button.defaultProps = {
  onClick: undefined,
  isSecondary: undefined,
};
