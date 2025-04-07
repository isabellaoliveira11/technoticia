import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  padding: 1.5rem 0 0 0;
  border-top: 1px solid var(--LIGHT-GRAY);
  margin-bottom: 1.5rem;

  width: 100%;

  .news {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .see-more-news {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      transition: all 0.4s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      h4 {
        transition: all 0.4s ease-in-out;
        color: var(--GREEN);
      }

      svg {
        transition: all 0.4s ease-in-out;
      }
    }

    button:hover {
      transition: all 0.4s ease-in-out;

      h4 {
        transition: all 0.4s ease-in-out;
        border-bottom: 1px solid var(--GREEN);
      }

      svg {
        transition: all 0.4s ease-in-out;
        transform: rotate(180deg);
      }
    }
  }

  @media (max-width: 1180px) {
    .news {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;