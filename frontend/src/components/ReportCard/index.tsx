import { Report } from "../../types/report";

import { Container } from "./styles";

interface Props {
  report: Report;
}

export function ReportCard({ report }: Props) {
  return (
    <Container to={`report-card/${report.id}`}>
      <h3>{report.title}</h3>

      <p>{report.description}</p>

      <footer>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa890f5c-ddc3-4a42-94ce-fa6c5578bf1d/dbq6oqq-0dc73b83-9aaf-42e1-96c5-298245423867.png/v1/fill/w_1024,h_1024,q_80,strp/cuphead_for_profile_pic_by_whitedog121_dbq6oqq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2ZhODkwZjVjLWRkYzMtNGE0Mi05NGNlLWZhNmM1NTc4YmYxZFwvZGJxNm9xcS0wZGM3M2I4My05YWFmLTQyZTEtOTZjNS0yOTgyNDU0MjM4NjcucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ObZXHzeOVrHYt08QUsInShfyWTtLmtxcBV8PiZGN3ok"
          alt="ProfilePicture"
        />

        <strong>{report.author}</strong>
      </footer>
    </Container>
  );
}
