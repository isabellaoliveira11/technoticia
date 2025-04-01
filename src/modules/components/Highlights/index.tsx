import { useContext } from "react";
import { Sparkle } from "phosphor-react";

import { NewsContext } from "@/app/page";
import ThumbNews from "@/shared/components/ThumbNews";
import SectionTitle from "@/shared/components/SectionTitle";
import useWindowSize from "@/shared/utils/useWindowSize";

import { Container } from "./styles";

const Highlights = () => {
    const { news } = useContext(NewsContext);

    const windowSize = useWindowSize();
    const isHighlightToResize = windowSize.windowWidth <= 1045;

    if (!news || news.length === 0) {
        return null; // ou um componente de carregamento/mensagem de erro
    }

    return (
        <Container>
            <SectionTitle
                icon={<Sparkle weight="thin" size={40} color="#65D2AE" />}
                title="Destaques"
            />
            <div className="highlight">
                {!isHighlightToResize && (
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
                    {isHighlightToResize && (
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
                    {news.slice(1, 4).map((newsItem: any, index: number) => (
                        <ThumbNews
                            key={index}
                            title={newsItem.title}
                            description={newsItem.description}
                            url={newsItem.url}
                            image={newsItem.image}
                            publishedAt={newsItem.publishedAt}
                            source={newsItem.source}
                            design="vertical"
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Highlights;