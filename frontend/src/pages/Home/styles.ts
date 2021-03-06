import styled, { keyframes } from "styled-components";

const apperFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  > header {
    animation: ${apperFromTop} 1s;
    display: flex;
    max-width: 800px;
  }

  > header button {
    margin-left: 2rem;
  }

  > section {
    animation: ${apperFromTop} 1s;
    margin-top: 2rem;

    a + a {
      margin-top: 2rem;
    }
  }
`;
