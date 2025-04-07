import styled, { css } from "styled-components";

interface ContainerProps {
  $isSelected?: boolean;
}

export const Container = styled.button<ContainerProps>`
  transition: all 0.4s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 32px;
  width: 32px;
  border-radius: 100%;

  :hover {
    opacity: 50%;
  }

  ${(props) =>
    props.$isSelected
      ? css`
          background-color: var(--GREEN);
          border: 1px solid transparent;
        `
      : css`
          border: 1px solid var(--GREEN);
        `}
`;
