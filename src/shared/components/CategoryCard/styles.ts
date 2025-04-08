import styled, { css } from "styled-components";

interface ContainerProps {
  $isDarkTheme: boolean;
}

export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 8.125rem;
  height: 8.125rem;

  gap: 0.5rem;
  padding: 1.75rem 2.625rem;
  border-radius: 1rem;

  ${(props) =>
    props.$isDarkTheme
      ? css`
          background-color: rgba(59, 47, 74, 1);
        `
      : css`
          background-color: var(--LIGHT-GREEN);
        `}

  p {
    white-space: nowrap;
  }

  :hover {
    transition: all 0.25s ease-in-out;
    transform: scale(1.05);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    .pulse {
      margin-top: 4px;
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #cc472c;
      cursor: pointer;
      box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
      animation: pulse 2s infinite;
    }

    .pulse:hover {
      animation: none;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      }
    }
  }

  @media (max-width: 500px) {
    gap: 0;
    padding: 1rem;
    width: 4rem;
    height: 4rem;

    p {
      font-size: 12px;
    }

    div {
      gap: 0.25rem;

      .pulse {
        margin-top: 2px;
      }
    }
  }
`;
