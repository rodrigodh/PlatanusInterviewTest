import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <header>
        <Search />
        <Button isSecondary>Adicionar noticia</Button>
      </header>
    </Container>
  );
}
