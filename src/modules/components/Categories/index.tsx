'use client';

import { useContext, useEffect, useState } from "react";
import { Newspaper, YoutubeLogo } from "phosphor-react";

import CategoryCard from "@/shared/components/CategoryCard";
import useWindowSize from "@/shared/utils/useWindowSize";
import scrollToComment from "@/shared/utils/smoothScroll";

import { Container } from "./styles";
import { GlobalContext } from "@/app/_app"; // Caminho correto

const Categories = () => {
  const { isDarkTheme } = useContext(GlobalContext);

  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 500;

  const [iconsSize, setIconSize] = useState(48);
  const iconColor = isDarkTheme ? "#65D2AE" : "#213249";

  useEffect(() => {
    if (isMobile) setIconSize(24);
    else setIconSize(48);
  }, [isMobile]);

  return (
    <Container>
      <div className="categories-card">
        <CategoryCard
          icon={<Newspaper weight="thin" size={iconsSize} color={iconColor} />}
          title="Notícias"
          onClick={() => scrollToComment("noticias")}
        />
        <CategoryCard
          icon={<YoutubeLogo weight="thin" size={iconsSize} color={iconColor} />}
          title="Ao vivo"
          onClick={() =>
            window.open(
              "https://www.youtube.com/results?search_query=not%C3%ADcias&sp=EgJAAQ%253D%253D",
              "_blank"
            )
          }
        />
      </div>
    </Container>
  );
};

export default Categories;