import { useEffect, useState, HTMLAttributes, useContext } from "react";
import useWindowSize from "../../utils/useWindowSize";
import scrollToComment from "../../utils/smoothScroll";
import { Container } from "./styles";
<<<<<<< HEAD
import { GlobalContext } from '@/pages/_app';
=======
import { GlobalContext } from '@/app/_app';
>>>>>>> 4054761cc4bd100b84192730c9a6a764f8661370

interface CategoryCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: any;
  title: string;
}

const CategoryCard = ({ icon, title }: CategoryCardProps) => {
  const { isDarkTheme } = useContext(GlobalContext);

  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 500;

  const [newTitle, setNewTitle] = useState(title);
  const abbreviatedTitle = title.slice(0, 7) + "...";

  useEffect(() => {
    if (isMobile && title.length > 8) {
      setNewTitle(abbreviatedTitle);
    }
  }, [isMobile, abbreviatedTitle, title]);

  function handleClick() {
    newTitle === "Ao vivo"
      ? window.open(
          "https://www.youtube.com/results?search_query=not%C3%ADcias&sp=EgJAAQ%253D%253D",
          "_blank"
        )
      : scrollToComment("noticias");
  }

  return (
    <Container $isDarkTheme={isDarkTheme} onClick={() => handleClick()}>
      {icon}
      <div>
        <p>{newTitle}</p>
        {newTitle == "Ao vivo" && <span className="pulse"></span>}
      </div>
    </Container>
  );
};

export default CategoryCard;
