import { useContext } from "react";
import { Sparkle } from "phosphor-react";

<<<<<<< HEAD
import { NewsContext } from "../../../../pages/index";
=======
import { NewsContext } from "../../../../app/page";
>>>>>>> 4054761cc4bd100b84192730c9a6a764f8661370

import ThumbNews from "../../../../shared/components/ThumbNews";
import SectionTitle from "../../../../shared/components/SectionTitle";
import useWindowSize from "../../../../shared/utils/useWindowSize";

import { Container } from "./styles";

const Highlights = () => {
  const { news } = useContext(NewsContext);

  const windowSize = useWindowSize();
  const isHighlightToResize = windowSize.windowWidth <= 1045;

  // Verifica se news existe e tem ao menos 1 item
  const hasNews = Array.isArray(news) && news.length > 0;

  return (
    <Container>
      <SectionTitle
        icon={<Sparkle weight="thin" size={40} color="#65D2AE" />}
        title="Destaques"
      />
      <div className="highlight">
        {!isHighlightToResize && hasNews && (
          <ThumbNews
            title={news[0].title}
            description={news[0].description}
            url={news[0].url}
            image={news[0].image}
            publishedAt={news[0].publishedAt}
            source={news[0].source}
            design="highlight"
          />
        )}
        <div className="secondary-highlights">
          {isHighlightToResize && hasNews && (
            <ThumbNews
              title={news[0].title}
              description={news[0].description}
              url={news[0].url}
              image={news[0].image}
              publishedAt={news[0].publishedAt}
              source={news[0].source}
              design="vertical"
            />
          )}
          {hasNews &&
            news.slice(1, 4).map((item: any, index: number) => (
              <ThumbNews
                key={index}
                title={item.title}
                description={item.description}
                url={item.url}
                image={item.image}
                publishedAt={item.publishedAt}
                source={item.source}
                design="vertical"
              />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Highlights;
