'use client';

import Head from "next/head";
import { createContext, useContext, useEffect, useState } from "react";
import Footer from "../../src/shared/components/Footer";
import MainPage from '../modules/MainPage';

// 1. Criação do Contexto
interface NewsContextProps {
  news: any[];
  setNews: React.Dispatch<React.SetStateAction<any[]>>;
}

export const NewsContext = createContext<NewsContextProps>({
  news: [],
  setNews: () => {},
});

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

        setNews([...worldNews, ...technologyNews]);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Head>
        <title>technoticia</title>
        <meta name="title" content="technoticia" />
        <link rel="icon" type="shortcut icon" href="/favicon.svg" />
      </Head>

      {/* 2. Provedor do Contexto */}
      <NewsContext.Provider value={{ news, setNews }}>
        <MainPage />
      </NewsContext.Provider>


    </>
  );
}