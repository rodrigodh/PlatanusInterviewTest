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

  > div:last-child,
  > header {
    animation: ${apperFromTop} 1s;
  }

  header {
    display: flex;
  }

  header section {
    display: flex;
    margin-left: auto;
    margin-right: 0;
  }

  header section > button {
    margin-left: 16px;
    background: var(--error);
  }

  > div:last-child {
    background: var(--white);
    padding: 16px;
    margin-top: 16px;
    border-radius: 10px;
    margin-bottom: 1rem;

    h3 {
      font-size: 24px;
      margin-bottom: 8px;
    }

    p {
      white-space: pre-line;
      text-overflow: ellipsis;
      overflow-x: hidden;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 8px;
  }

  strong {
    font-weight: 400;
  }
`;
