import Image from "next/image";
import logoWhite from "../../../../shared/assets/logos/nanoticia-logo-white.svg";

import logo from "../../../../shared/assets/logos/nanoticia-logo.svg";


import useWindowSize from "../../../../shared/utils/useWindowSize";
import { getFormatTodayDate } from "../../../../shared/utils/formatTodayDate";
import ThemeToggle from "@/shared/components/ThemeToggle";

import { Container } from "./styles";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";

const TopBar = () => {
  const windowSize = useWindowSize();
  const { isDarkTheme, setIsDarkTheme } = useContext(GlobalContext);
  const [today, setToday] = useState<string>();

  const isMobile = windowSize.windowWidth <= 720;

  useEffect(() => {
    setToday(getFormatTodayDate());
  }, []);

  const handleToggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <Container>
      {isDarkTheme ? (
        <Image src={logoWhite} width={200} alt="logo" />
      ) : (
        <Image src={logo} width={200} alt="logo" />
      )}

      {isMobile && (
        <div className="date-temperature">
          <h4>Hoje é</h4>
          <h4>{today}</h4>
        </div>
      )}

      <div className="button-themes">
        <ThemeToggle />
      </div>
          </Container>
        );
      };

export default TopBar;
