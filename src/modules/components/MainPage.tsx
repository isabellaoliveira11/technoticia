'use client'; // Força o componente a ser renderizado no lado do cliente

import News from "../../modules/components/News";
import { Container, Content } from "./styles";
import TopBar from "../../modules/components/TopBar";

interface MainPageProps {
  news: any[];  // Recebe as notícias como props
}

const MainPage = ({ news }: MainPageProps) => {
  if (!news || news.length === 0) {
    return (
      <Container>
        <Content>
          <TopBar />
          <h2 className="slogan">
            Nenhuma notícia disponível no momento.
          </h2>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <TopBar />

        <h2 className="slogan">
          Os principais portais <br /> de notícias em{" "}
          <mark>um só lugar.</mark>
        </h2>

        <News news={news} /> {/* Passa as notícias para o componente News */}
      </Content>
    </Container>
  );
};

export default MainPage;
