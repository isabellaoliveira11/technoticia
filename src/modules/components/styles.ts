import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px; /* Adicionando um pouco de padding para o layout */

  @media (max-width: 1366px) {
    zoom: 80%;
  }

  @media (max-width: 1300px) {
    zoom: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinhando conteúdo à esquerda */
  max-width: 1320px;
  width: 100%;
  margin-top: 3rem;
  padding: 0 2rem;

  h2 {
    margin: 4rem 0;
    width: 100%;
  }

  h1 {
    text-align: left; /* Alinhando o título à esquerda */
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none; /* Removendo os marcadores da lista */
    padding-left: 0;
  }

  li {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Alinhando cada item de notícia à esquerda */
  }

  a {
    text-align: left; /* Garantindo que os links também fiquem alinhados à esquerda */
    margin-top: 0.5rem;
    color: blue;
    text-decoration: none;
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
