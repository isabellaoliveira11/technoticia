import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.5s ease-in-out;

  display: flex;
  flex-direction: column; /* <- Agora empilha os elementos */
  align-items: flex-end;
  justify-content: flex-end;

  width: 100%;
  margin-top: 4rem;
  gap: 1.5rem; /* Espaço entre a data e os cards */

  .categories-card {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 2.5rem;
  }

  .date-temperature {
    h2 {
      margin: 0;
      color: var(--GRAY);
      text-align: right;
    }

    h3 {
      color: var(--GRAY);
      text-align: right;
    }
  }

  @media (max-width: 720px) {
    padding-bottom: 1rem;
  }

  @media (max-width: 500px) {
    margin-top: 2rem;
    gap: 1rem;

    .categories-card {
      gap: 1rem;
    }
  }
`;
