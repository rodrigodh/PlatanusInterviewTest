import { Routes as Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { CreateReport } from "../pages/CreateReport";
import { ReportCard } from "../pages/ReportCard";
import { EditReport } from "../pages/EditReport";

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/create-report" element={<CreateReport />} />
      <Route path="/report-card/:id" element={<ReportCard />} />
      <Route path="/edit-report/:id" element={<EditReport />} />
    </Switch>
  );
}
