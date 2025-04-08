import Image from "next/image";
<<<<<<< HEAD
import logo from "../../../../shared/assets/logos/nanoticia-logo.svg";
import logoWhite from "../../../../shared/assets/logos/nanoticia-logo-white.svg";
import SunFill from "../../../../shared/assets/icons/SunFill.svg";
=======

import logo from "../../../../shared/assets/logos/nanoticia-logo.svg";
import logoWhite from "../../../../shared/assets/logos/nanoticia-logo-white.svg";
import SunFill from "../../../../shared/assets/icons/SunFill.svg";
import SunOutline from "../../../../shared/assets/icons/SunOutline.svg";
import MoonOutline from "../../../../shared/assets/icons/MoonOutline.svg";
>>>>>>> 4054761cc4bd100b84192730c9a6a764f8661370
import MoonFill from "../../../../shared/assets/icons/MoonFill.svg";

import useWindowSize from "../../../../shared/utils/useWindowSize";
import { getFormatTodayDate } from "../../../../shared/utils/formatTodayDate";
import ShortButton from "../../../../shared/components/ShortButton";

import { Container } from "./styles";
import { useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import { GlobalContext } from "../../../../pages/_app";
=======
import { GlobalContext } from "../../../../app/_app";
>>>>>>> 4054761cc4bd100b84192730c9a6a764f8661370

const TopBar = () => {
  const windowSize = useWindowSize();
  const { isDarkTheme, setIsDarkTheme } = useContext(GlobalContext);
  const [today, setToday] = useState<string>();

  const isMobile = windowSize.windowWidth <= 720;

  useEffect(() => {
    setToday(getFormatTodayDate());
  }, []);

<<<<<<< HEAD
  const handleToggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

=======
>>>>>>> 4054761cc4bd100b84192730c9a6a764f8661370
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
<<<<<<< HEAD
        <ShortButton
          icon={isDarkTheme ? SunFill : MoonFill}
          onClick={handleToggleTheme}
        />
=======
        {isDarkTheme ? (
          <>
            <ShortButton
              icon={SunOutline}
              onClick={() => setIsDarkTheme(false)}
            />
            <ShortButton icon={MoonFill} selected />
          </>
        ) : (
          <>
            <ShortButton icon={SunFill} selected />
            <ShortButton
              icon={MoonOutline}
              onClick={() => setIsDarkTheme(true)}
            />
          </>
        )}
>>>>>>> 4054761cc4bd100b84192730c9a6a764f8661370
      </div>
    </Container>
  );
};

<<<<<<< HEAD
export default TopBar;
=======
export default TopBar;
>>>>>>> 4054761cc4bd100b84192730c9a6a764f8661370
