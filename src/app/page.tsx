'use client'; // Força o componente a ser renderizado no lado do cliente

import Head from "next/head";
import { useEffect, useState } from "react";
import MainPage from "../../src/modules/components/MainPage"; // Caminho para o componente MainPage
import Footer from "../../src/shared/components/Footer"; // Importando o Footer

export default function Home() {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const getWorldNews = await fetch(
          `https://gnews.io/api/v4/top-headlines?category=world&apikey=1aa478fe04a57ba66875f776b176a1f5&lang=pt&country=br`
        );
        const worldNewsData = await getWorldNews.json();
        const worldNews = worldNewsData.articles;

        const getTechnologyNews = await fetch(
          `https://gnews.io/api/v4/top-headlines?category=technology&apikey=1aa478fe04a57ba66875f776b176a1f5&lang=pt&country=br`
        );
        const technologyNewsData = await getTechnologyNews.json();
        const technologyNews = technologyNewsData.articles;

        setNews([...worldNews, ...technologyNews]); // Atualizando estado
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Head>
        <title>nanoticia</title>
        <meta name="title" content="nanoticia" />
        <link rel="icon" type="shortcut icon" href="/favicon.svg" />
      </Head>

      {/* Passando a prop 'news' para o MainPage */}
      <MainPage news={news} />

      {/* Adicionando o Footer abaixo do MainPage */}
      <Footer />
    </>
  );
}
