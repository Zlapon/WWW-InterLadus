import "./sidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
function Sidebar({ languageSelectorVisible, setLanguageSelectorVisible }) {
  const { t } = useTranslation("translation", {
    keyPrefix: "navbar.links",
  });
  const [isClosing, setIsClosing] = useState(false);
  const [visible, setVisible] = useState(false);
  const animationDuration = 300;

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setVisible(false);
        setIsClosing(false);
      }, animationDuration);

      return () => clearTimeout(timer);
    }
  }, [setVisible, isClosing]);
  const showSidebar = () => {
    setVisible(true);
  };
  return (
    <div className="sidebar-container">
      <MenuIcon
        onClick={showSidebar}
        sx={{ fontSize: 20, cursor: "pointer" }}
      />
      {visible && (
        <div
          className={`sidebar ${isClosing && "sidebar-closing"}`}
          sx={{ fontSize: 20, cursor: "pointer" }}>
          <div className="sidebar-links">
            <NavLink to={"/"}>{t("home")}</NavLink>
            <NavLink to={"/contact"}>{t("contact")}</NavLink>
            <NavLink to={"/about"}>{t("about")}</NavLink>
          </div>
          <div className="sidebar-auth">
            <LanguageSelector
              visible={languageSelectorVisible}
              setVisible={setLanguageSelectorVisible}
            />
            <ThemeToggle />
            <NavLink to={"/auth/login"}>{t("login")}</NavLink>
          </div>
          <div
            className="languageselector-closeicon"
            onClick={() => {
              setIsClosing(true);
            }}>
            <CloseIcon
              sx={{ fontSize: 40, cursor: "pointer" }}
              onClick={() => {
                setIsClosing(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
