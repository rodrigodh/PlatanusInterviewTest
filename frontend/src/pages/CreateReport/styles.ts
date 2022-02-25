import styled, { keyframes } from "styled-components";

const appearFromTop = keyframes`
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

  > h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    animation: ${appearFromTop} 1s;
  }

  form {
    animation: ${appearFromTop} 1s;
  }

  > form button {
    margin-right: 0;
    margin-left: auto;
    margin-top: 1rem;
  }
`;
