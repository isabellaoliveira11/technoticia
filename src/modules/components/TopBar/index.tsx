"use client";
import { useState, useEffect } from "react";
import { Container, Logo, LogoText, DateTemperature, DateText } from "./styles"; // Estilos importados

const TopBar = () => {
  const [today, setToday] = useState("");

  useEffect(() => {
    const dataFormatada = new Date().toLocaleDateString("pt-BR", {
      weekday: "long", // Nome do dia da semana
      day: "numeric", // Dia do mês
      month: "long", // Nome do mês
      year: "numeric", // Ano
    });

    setToday(dataFormatada);
  }, []);

  return (
    <Container>
      <Logo>
        <LogoText>InfoNotícia</LogoText>
      </Logo>

      <DateTemperature>
        <h4>Hoje é</h4>
        <DateText>{today}</DateText>
      </DateTemperature>
    </Container>
  );
};

export default TopBar;
