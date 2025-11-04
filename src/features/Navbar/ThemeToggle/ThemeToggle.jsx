import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { useState, useEffect } from "react";

function ThemeToggle({ iconSize }) {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(
    savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return theme === "light" ? (
    <NightlightRoundIcon
      onClick={handleToggle}
      sx={{ fontSize: iconSize, cursor: "pointer" }}
    />
  ) : (
    <LightModeIcon
      onClick={handleToggle}
      sx={{ fontSize: iconSize, cursor: "pointer" }}
    />
  );
}

export default ThemeToggle;
