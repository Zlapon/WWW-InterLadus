import "./navbar.css";
import { NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function NavBar() {
  const [languageSelectorVisible, setLanguageSelectorVisible] = useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "navbar.links",
  });
  return (
    <nav>
      <div className="nav-title">InterLadus</div>
      <div className="nav-links">
        <NavLink to={"/"}>{t("home")}</NavLink>
        <NavLink to={"/contact"}>{t("contact")}</NavLink>
        <NavLink to={"/about"}>{t("about")}</NavLink>
      </div>
      <div className="nav-auth">
        <LanguageSelector
          visible={languageSelectorVisible}
          setVisible={setLanguageSelectorVisible}
        />
        <ThemeToggle />
        <NavLink to={"/auth/login"}>{t("login")}</NavLink>
      </div>
      <Sidebar
        languageSelectorVisible={languageSelectorVisible}
        setLanguageSelectorVisible={setLanguageSelectorVisible}
      />
    </nav>
  );
}

export default NavBar;
