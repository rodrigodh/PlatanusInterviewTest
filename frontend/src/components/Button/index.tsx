import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isSecondary?: boolean;
  children: ReactNode;
};

export function Button({ children, isSecondary, ...rest }: ButtonProps) {
  return (
    <Container {...rest} isSecondary={isSecondary}>
      {children}
    </Container>
  );
}

Button.defaultProps = {
  isSecondary: undefined,
};
