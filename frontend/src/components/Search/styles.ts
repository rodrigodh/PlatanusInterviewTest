import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 8px 16px;
  transition: 0.5s;
  background: #ffffff;
  flex: 1;

  input {
    font-size: 1rem;
    border: 0;
    outline: 0;
    flex: 1;
  }

  svg {
    margin-right: 8px;
    margin-bottom: 4px;
  }
`;
