import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
  gap: 0.5rem;

  h2 {
    margin: 0;
  }

  @media (max-width: 500px) {
    margin-bottom: 1rem;

    svg {
      width: 24px;
      height: 24px;
    }

    font-size: 16px;
  }
`;