'use client';

import { useContext } from "react";
import { Container, Content } from "./styles";

import TopBar from "../../modules/components/TopBar";
import Highlights from "../../modules/components/Highlights";
import News from "../../modules/components/News";
import Footer from "../../shared/components/Footer";

import { NewsContext } from "@/app/page";

const MainPage = () => {
  const { news } = useContext(NewsContext);

  return (
    <Container id="top">
      <Content>
        <TopBar />
        <h2 className="slogan">
          Os principais portais <br /> de notícias em <mark>um só lugar.</mark>
        </h2>
        <Highlights /> {/* Remova news={news} */}
        <News /> {/* Remova news={news} */}
        <Footer />
      </Content>
    </Container>
  );
};

export default MainPage;