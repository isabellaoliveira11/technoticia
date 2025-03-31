import { Container, Content } from "./styles"; // Importando de styles.ts
import TopBar from "../../modules/components/TopBar"; // Caminho correto para TopBar

interface NewsItem {
  title: string;
  description: string;
  url: string;
}

interface MainPageProps {
  news: NewsItem[];  // Tipando as props com um array de notícias
}

const MainPage = ({ news }: MainPageProps) => {
  return (
    <Container>
      <Content>
        <TopBar /> {/* Exibe a TopBar diretamente sem o delay */}

        <h2 className="slogan">
          Os principais portais <br /> de notícias em{" "}
          <mark>um só lugar.</mark>
        </h2> {/* Mensagem fixa */}

        <div>
          <h1>Notícias</h1>
          <ul>
            {news.map((item, index) => (
              <li key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  Leia mais
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Content>
    </Container>
  );
};

export default MainPage;
