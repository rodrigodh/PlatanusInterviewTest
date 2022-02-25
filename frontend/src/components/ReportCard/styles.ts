import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled(Link)`
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
    color: var(--text);
  }

  > p {
    margin: 16px 0;
    white-space: pre-line;
    text-overflow: ellipsis;
    max-height: 10rem;
    overflow: hidden;
    color: var(--text);
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
    color: var(--text);
  }

  :hover {
    background: var(--background);
    border: 4px solid #ffffff;
  }
`;
