import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  > header {
    display: flex;
    max-width: 800px;
  }

  > header button {
    margin-left: 2rem;
  }
`;
