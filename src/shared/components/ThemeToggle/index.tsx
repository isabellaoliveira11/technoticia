// components/ThemeToggle/index.tsx
import { useContext } from "react";
import { GlobalContext } from "@/pages/_app";
import { ToggleWrapper, ToggleSlider, IconWrapper } from "./styles";

import SunFill from "@/shared/assets/icons/SunFill.svg";
import MoonFill from "@/shared/assets/icons/MoonFill.svg";
import Image from "next/image";

const ThemeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(GlobalContext);

  const handleToggle = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <ToggleWrapper onClick={handleToggle} $isDark={isDarkTheme}>
      <ToggleSlider $isDark={isDarkTheme} />
      <IconWrapper className="icon sun">
        <Image src={SunFill} alt="Light Mode" width={16} height={16} />
      </IconWrapper>
      <IconWrapper className="icon moon">
        <Image src={MoonFill} alt="Dark Mode" width={16} height={16} />
      </IconWrapper>
    </ToggleWrapper>
  );
};

export default ThemeToggle;
