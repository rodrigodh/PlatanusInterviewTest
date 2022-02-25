import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  header {
    display: flex;
  }

  header section {
    display: flex;
    margin-left: auto;
    margin-right: 0;
  }

  header section button:last-child {
    margin-left: 16px;
    background: var(--error);
  }

  > div:last-child {
    background: var(--white);
    padding: 16px;
    margin-top: 16px;
    border-radius: 10px;

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
