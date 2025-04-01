"use client";

import { Newspaper } from "phosphor-react";
import SectionTitle from "@/shared/components/SectionTitle";
import ThumbNews from "@/shared/components/ThumbNews";
import { Container } from "./styles";

interface NewsProps {
  news: any[];
}

const News = ({ news }: NewsProps) => {
  return (
    <Container id="noticias">
      <SectionTitle
        icon={<Newspaper weight="thin" size={40} color="#65D2AE" />}
        title="Últimas notícias"
      />
      <div className="news">
        {news.slice(0, 16).map((article, index) => (
          <ThumbNews
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            image={article.image}
            publishedAt={article.publishedAt}
            source={article.source}
            design="horizontal"
          />
        ))}
      </div>
    </Container>
  );
};

export default News;
