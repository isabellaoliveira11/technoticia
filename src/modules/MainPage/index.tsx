import { useContext } from "react";
import { Container, Content } from "./styles";


import TopBar from "./components/TopBar";
import Categories from "./components/Categories";
import Highlights from "./components/Highlights";
import News from "./components/News";
import Footer from "../../shared/components/Footer";
import ErrorWarning from "./components/ErrorWarning";

import { NewsContext } from "../../app/page";

const MainPage = () => {
  const { news } = useContext(NewsContext);

  return (
    <>
      {news ? (
        <Container id="top">
          <Content>
            <TopBar />
            <Categories />
            <h2 className="slogan">
              Os principais portais <br /> de notícias em{" "}
              <mark>um só lugar.</mark>
            </h2>
            <Highlights />
            <News />
            <Footer />
          </Content>
        </Container>
      ) : (
        <>
          <ErrorWarning />
        </>
      )}
    </>
  );
};

export default MainPage;