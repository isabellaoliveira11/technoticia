import styled from "styled-components";

// Contêiner da TopBar
export const Container = styled.div`
  width: 1200px; // Largura total da TopBar
  height: 228px; // Altura da TopBar
  display: flex;
  justify-content: space-between; /* Isso vai separar os itens */
  align-items: flex-start; /* Alinha os itens ao topo */
  padding-top: 20px; /* Espaçamento de 50px no topo */
  padding-left: 50px; /* Espaçamento de 50px da esquerda */
  padding-right: 50px; /* Espaçamento de 50px da direita */
  background-color: var(--bg-color);
  color: var(--text-color);
`;

// Estilo para o logo
export const Logo = styled.div`
  display: flex;
  align-items: flex-start; /* Alinha ao topo */
`;

export const LogoText = styled.h1`
  font-size: 32px;
  color: #213249; /* Cor do texto */
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  margin: 0;
`;

// Estilo para a data e temperatura
export const DateTemperature = styled.div`
  text-align: right; /* Alinha o texto à direita */
  color: #828282;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Alinha o texto ao final */
  margin-top: 120px; /* Adiciona margem superior de 120px */
`;

export const DateText = styled.h4`
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin: 0;
`;