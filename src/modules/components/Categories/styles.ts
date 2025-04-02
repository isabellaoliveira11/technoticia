import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.5s ease-in-out;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
  margin-top: 4rem;

  .categories-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
  }

  @media (max-width: 720px) {
    justify-content: center;
    padding-bottom: 1rem;
  }

  @media (max-width: 500px) {
    margin-top: 2rem;
    gap: 0.5rem;

    .categories-card {
      gap: 1rem;
    }
  }
`;