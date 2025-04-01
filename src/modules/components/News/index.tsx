"use client";

import { useContext } from "react";
import { Newspaper } from "phosphor-react";
import SectionTitle from "@/shared/components/SectionTitle";
import ThumbNews from "@/shared/components/ThumbNews";
import useWindowSize from "@/shared/utils/useWindowSize"; // Importar useWindowSize
import { Container } from "./styles";
import { NewsContext } from "@/app/page"; // Importar NewsContext

const News = () => {
  const { news } = useContext(NewsContext);
  const windowSize = useWindowSize();
  const isNewsToResize = windowSize.windowWidth <= 1180;

  return (
    <Container id="noticias">
      <SectionTitle
        icon={<Newspaper weight="thin" size={40} color="#65D2AE" />}
        title="Últimas notícias"
      />
      <div className="news">
        {news && news.slice(4, 20).map((article: any, index: number) => ( // Adicionado verificação de news
          <ThumbNews
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            image={article.image}
            publishedAt={article.publishedAt}
            source={article.source}
            design={isNewsToResize ? "vertical" : "horizontal"} // Adicionado responsividade
          />
        ))}
      </div>
    </Container>
  );
};

export default News;