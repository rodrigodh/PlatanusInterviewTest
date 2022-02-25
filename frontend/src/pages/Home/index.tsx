import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ReportCard } from "../../components/ReportCard";
import { Search } from "../../components/Search";

import { api } from "../../services/api";
import { Report } from "../../types/report";
import { Container } from "./styles";

export function Home() {
  const [news, setNews] = useState<Report[]>([]);
  const [search, setSearch] = useState("");

  const filteredNews = useMemo(() => {
    const searchText = search.toLowerCase();

    const newsWithSearch = news.filter((report) => {
      const searchReportTitle = report.title.toLowerCase();
      return searchReportTitle.search(searchText) !== -1;
    });

    return newsWithSearch;
  }, [news, search]);

  const handleGetNews = useCallback(async () => {
    const response = await api.get<Report[]>("news");
    setNews(response.data);
  }, []);

  useEffect(() => {
    handleGetNews();
  }, []);

  return (
    <Container>
      <Header />

      <header>
        <Search onChange={(e) => setSearch(e.target.value)} value={search} />
        <Link to="/create-report">
          <Button isSecondary>Adicionar noticia</Button>
        </Link>
      </header>

      <section>
        {filteredNews.reverse().map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </section>
    </Container>
  );
}
