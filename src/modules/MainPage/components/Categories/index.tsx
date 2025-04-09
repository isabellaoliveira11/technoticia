import { useContext, useEffect, useState } from "react";

import { Newspaper, YoutubeLogo } from "phosphor-react";
import { getFormatTodayDate } from "../../../../shared/utils/formatTodayDate";

import CategoryCard from "../../../../shared/components/CategoryCard";
import useWindowSize from "../../../../shared/utils/useWindowSize";
import scrollToComment from "../../../../shared/utils/smoothScroll";

import { Container } from "./styles";
<<<<<<< HEAD
import { GlobalContext } from "../../../../pages/_app";
=======
import { GlobalContext } from "../../../../app/_app";
>>>>>>> 4054761cc4bd100b84192730c9a6a764f8661370

const Categories = () => {
  const { isDarkTheme } = useContext(GlobalContext);

  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 500;
  const shouldShowDateAndTemperature = windowSize.windowWidth > 720;

  const [iconsSize, setIconSize] = useState(48);
  const iconColor = isDarkTheme ? "#65D2AE" : "#213249";

  const [today, setToday] = useState<string>();

  useEffect(() => {
    setToday(getFormatTodayDate());
  }, []);

  useEffect(() => {
    if (isMobile) setIconSize(24);
    else setIconSize(48);
  }, [isMobile]);

  return (
    <Container>
      {shouldShowDateAndTemperature && (
        <div className="date-temperature">
          <h3>Hoje é</h3>
          <h2>{today}</h2>
        </div>
      )}
  
      <div className="categories-card">
        <CategoryCard
          icon={<Newspaper weight="thin" size={iconsSize} color={iconColor} />}
          title="Notícias"
          onClick={() => scrollToComment("news")}
        />
        <CategoryCard
          icon={
            <YoutubeLogo weight="thin" size={iconsSize} color={iconColor} />
          }
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