import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 10px;
  background: #ffffff;
  border: 2px solid transparent;
  transition: 0.5s;
  cursor: pointer;

  > h3 {
    font-size: 24px;
    font-weight: bold;
  }

  > p {
    overflow-x: hidden;
    margin: 16px 0;
    white-space: pre-line;
    text-overflow: ellipsis;
  }

  > footer {
    display: flex;
    align-items: center;
  }

  > footer img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 8px;
  }

  > footer strong {
    font-weight: 400;
    font-size: 16px;
  }

  :hover {
    background: var(--background);
    border: 4px solid #ffffff;
  }
`;
