import { Routes as Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { CreateReport } from "../pages/CreateReport";

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/create-report" element={<CreateReport />} />
    </Switch>
  );
}
