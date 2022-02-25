import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Button } from "../Button";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <h3>Plathanus News</h3>

      <Link to="/">
        <Button>
          <FiHome /> Home
        </Button>
      </Link>
    </Container>
  );
}
