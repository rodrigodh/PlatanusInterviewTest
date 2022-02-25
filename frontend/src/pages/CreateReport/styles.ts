import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  > form button {
    margin-right: 0;
    margin-left: auto;
    margin-top: 1rem;
  }
`;
