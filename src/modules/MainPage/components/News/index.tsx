import { useContext } from "react";
import { Newspaper } from "phosphor-react";
import { NewsContext } from "../../../../pages/index";

import SectionTitle from "../../../../shared/components/SectionTitle";
import ThumbNews from "../../../../shared/components/ThumbNews";

import useWindowSize from "../../../../shared/utils/useWindowSize";

import { Container } from "./styles";

const News = () => {
  const { news } = useContext(NewsContext);

  const windowSize = useWindowSize();

  const isNewsToResize = windowSize.windowWidth <= 1180;

  const dataNews = news;

  return (
    <Container id="noticias">
      <SectionTitle
        icon={<Newspaper weight="thin" size={40} color="#65D2AE" />}
        title="Últimas notícias"
      />
      <div className="news">
        {dataNews.slice(4, 20).map((news: any, index: any) => (
          <ThumbNews
            key={index}
            title={news.title}
            description={news.description}
            url={news.url}
            image={news.image}
            publishedAt={news.publishedAt}
            source={news.source}
            design={isNewsToResize ? "vertical" : "horizontal"}
          />
        ))}
      </div>
    </Container>
  );
};

export default News;