import "./navbar.css";
import { NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";

function NavBar() {
  const [languageSelectVisible, setLanguageSelectVisible] = useState(false);

  return (
    <nav>
      <div className="nav-title">InterLadus</div>
      <div className="nav-links">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <div className="nav-auth">
        <LanguageIcon
          sx={{ fontSize: 16 }}
          onClick={() => setLanguageSelectVisible(true)}
        />
        <NavLink to={"/auth/login"}>Login</NavLink>
      </div>
      {languageSelectVisible && (
        <LanguageSelector
          active={languageSelectVisible}
          setActive={languageSelectVisible}
        />
      )}
    </nav>
  );
}

export default NavBar;
