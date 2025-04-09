import styled, { css } from "styled-components";

interface ContainerProps {
  errorWarningLayout?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  ${(props) =>
    !props.errorWarningLayout &&
    css`
      border-top: 1px solid var(--LIGHT-GRAY);
    `}

  .logo-and-return-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 7.5rem 0 4rem 0;
    border-bottom: 1px solid var(--LIGHT-GRAY);

    .return-top {
      button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        gap: 0.5rem;

        :hover {
          svg {
            transition: all 0.4s ease-in-out;
            transform: rotate(360deg);
            
          }

          h4 {
            transition: all 0.4s ease-in-out;
            border-bottom: 1px solid var(--GRAY);
          }
        }
      }
    }
  }

  .copyrights {
    padding: 1.5rem 0 4rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: var(--GRAY);
    }

    a:hover {
      transition: all 0.4s ease-in-out;
      border-bottom: 1px solid var(--GRAY);
      color: #8C52FF;
    }
  }

  @media (max-width: 768px) {
    .logo-and-return-top {
      flex-direction: column-reverse;
      gap: 2rem;
      padding: 2rem;
    }

    .copyrights {
      flex-direction: column;
      gap: 1rem;

      h4 {
        text-align: center;
      }
    }
  }

  @media (max-width: 375px) {
    h4 {
      flex-direction: column;
    }
  }
`;
