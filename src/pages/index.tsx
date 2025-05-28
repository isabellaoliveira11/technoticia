import Head from "next/head";
import { createContext, useContext, useEffect, useState } from "react";
import Footer from "../../src/shared/components/Footer";
import MainPage from '../modules/MainPage';

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
  const termos = ["tecnologia", "inteligência artificial", "programação", "software", "hardware" , "aplicativos", "startups"];
  const apiKey = "1aa478fe04a57ba66875f776b176a1f5"; 

  const fetchNews = async () => {
    try {
      const allResults: any[] = [];

      for (const termo of termos) {
        const response = await fetch(
          `https://gnews.io/api/v4/search?q=${encodeURIComponent(
            termo
          )}&lang=pt&country=br&apikey=${apiKey}`
        );
        const data = await response.json();

        if (data.articles) {
          allResults.push(...data.articles);
        }
      }

      const uniqueNews = Array.from(
        new Map(allResults.map((n) => [n.url, n])).values()
      );

      setNews(uniqueNews);
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

      <NewsContext.Provider value={{ news, setNews }}>
        <MainPage />
      </NewsContext.Provider>
    </>
  );
}
