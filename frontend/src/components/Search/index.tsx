import { FiSearch } from "react-icons/fi";
import { Container } from "./styles";

export function Search() {
  return (
    <Container>
      <FiSearch />
      <input placeholder="Pesquisar" type="text" />
    </Container>
  );
}
