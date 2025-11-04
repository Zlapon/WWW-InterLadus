import "./sidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsSidebarVisible } from "../NavbarSlice";
function Sidebar() {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.navbar.isSidebarVisible);
  const languageSelectorVisible = useSelector(
    (state) => state.navbar.isLanguageSelectorVisible
  );
  const { t } = useTranslation("translation", {
    keyPrefix: "navbar.links",
  });
  const [isClosing, setIsClosing] = useState(false);
  const animationDuration = 300;

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        dispatch(setIsSidebarVisible(false));
        setIsClosing(false);
      }, animationDuration);

      return () => clearTimeout(timer);
    }
  }, [dispatch, isClosing]);
  const showSidebar = () => {
    dispatch(setIsSidebarVisible(true));
  };
  const closeSidebar = () => {
    setIsClosing(true);
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
            <NavLink to={"/auth/login"}>{t("login")}</NavLink>
          </div>
          <div className="sidebar-icons">
            <ThemeToggle iconSize={40} />
            <LanguageSelector iconSize={40} />
          </div>
          <div
            className="languageselector-closeicon"
            onClick={() => {
              setIsClosing(true);
            }}>
            {!languageSelectorVisible && (
              <CloseIcon
                sx={{ fontSize: 40, cursor: "pointer" }}
                onClick={closeSidebar}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
