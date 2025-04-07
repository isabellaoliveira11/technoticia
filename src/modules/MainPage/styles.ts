import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 1366px) {
    zoom: 80%;
  }

  @media (max-width: 1300px) {
    zoom: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1320px;
  width: 100%;
  margin-top: 3rem;
  padding: 0 2rem;

  h2 {
    margin: 4rem 0;
    width: 100%;
  }

  @media (max-width: 500px) {
    padding: 0 1.5rem;

    h2.slogan {
      font-size: 16px;
      margin: 1rem 0;
      text-align: center;
    }
  }
`;