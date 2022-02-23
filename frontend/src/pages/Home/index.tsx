import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ReportCard } from "../../components/ReportCard";
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

      <section>
        <ReportCard />
      </section>
    </Container>
  );
}
