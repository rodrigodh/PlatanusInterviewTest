import styled from "styled-components";

export const Container = styled.button`
  transition: 0.5s;
  border: 0;
  outline: 0;
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;
  font-size: 16px;

  background: var(--primary);
  color: #ffffff;

  > svg {
    margin-bottom: 3px;
    margin-right: 8px;
  }

  :hover {
    background: var(--primary-dark);
  }
`;
