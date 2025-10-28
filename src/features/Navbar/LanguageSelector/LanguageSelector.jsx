import "./languageselector.css";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
function LanguageSelector({ visible, setVisible }) {
  const [closing, setClosing] = useState(false);
  const i18n = useTranslation();
  const languages = [
    { code: "en", lang: "English" },
    { code: "fr", lang: "Français" },
    { code: "de", lang: "deutsch" },
    { code: "ar", lang: "العربية" },
  ];
  const animationDuration = 300;

  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, animationDuration);

      return () => clearTimeout(timer);
    }
  }, [visible, setVisible, closing]);

  if (!visible && !closing) return null;

  return (
    <div
      className={`languageselector ${closing && "languageselector-closing"}`}>
      <div className="languageselector-grid">
        {languages.map((language) => (
          <div
            key={language.code}
            onClick={() => {
              i18n.changeLanguage(language.code);
            }}
            className={`languageselector-language ${
              language.lang === i18n && "languageselector-language-selected"
            }`}>
            {language.lang}
          </div>
        ))}
      </div>
      <div
        className="languageselector-closeicon"
        onClick={() => {
          setClosing(true);
        }}>
        <CloseIcon sx={{ fontSize: 40 }} />
      </div>
    </div>
  );
}

export default LanguageSelector;
