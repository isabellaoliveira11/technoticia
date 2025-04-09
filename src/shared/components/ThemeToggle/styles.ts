import styled from "styled-components";

interface ThemeProps {
  $isDark: boolean;
}

export const ToggleWrapper = styled.button<ThemeProps>`
  position: relative;
  width: 64px; /* aumentado */
  height: 32px; /* aumentado */
  border-radius: 999px;
  background-color: ${({ $isDark }) =>
    $isDark ? "var(--DARK-GRAY)" : "var(--LIGHT-GRAY)"};
  border: 1px solid var(--GREEN);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  transition: background-color 0.4s ease-in-out;
`;

export const ToggleSlider = styled.div<ThemeProps>`
  position: absolute;
  top: 3px;
  left: ${({ $isDark }) => ($isDark ? "34px" : "3px")}; /* ajustado */
  width: 26px; /* maior */
  height: 26px; /* maior */
  border-radius: 50%;
  background-color: var(--GREEN);
  transition: left 0.3s ease-in-out;
  z-index: 1;
`;

export const IconWrapper = styled.div`
  z-index: 2;
  width: 20px; /* maior */
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.sun {
    color: #fdd835;
  }

  &.moon {
    color: #90caf9;
  }
`;
