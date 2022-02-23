import { InputHTMLAttributes } from "react";
import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Search({ onChange, value }: Props) {
  return (
    <Container>
      <FiSearch />
      <input
        placeholder="Pesquisar"
        type="text"
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}
