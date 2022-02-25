import styled, { css } from "styled-components";

import { Tooltip } from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: var(--white);
  border-radius: 10px;
  border: solid 2px transparent;
  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--error);
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--secondary);
      border-color: var(--secondary);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--primary);
    `}

  input {
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;

    &::placeholder {
      opacity: 0.5;
    }
  }

  strong {
    font-weight: 400;
    margin-right: 16px;
    color: var(--text);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: var(--error);
    color: var(--white);
    &::before {
      border-color: var(--error) transparent;
    }
  }
`;
