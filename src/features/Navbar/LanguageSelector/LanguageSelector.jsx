import "./languageselector.css";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";
import { useDispatch, useSelector } from "react-redux";
import { setIsLanguageSelectorVisible } from "../NavbarSlice";
function LanguageSelector({ iconSize }) {
  const dispatch = useDispatch();
  const visible = useSelector(
    (state) => state.navbar.isLanguageSelectorVisible
  );
  const [isClosing, setIsClosing] = useState(false);
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const languages = [
    { code: "en", lang: "English" },
    { code: "fr", lang: "Français" },
    { code: "de", lang: "Deutsch" },
    { code: "ar", lang: "العربية" },
    { code: "it", lang: "Italiano" },
  ];
  const animationDuration = 300;

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        dispatch(setIsLanguageSelectorVisible(false));
        setIsClosing(false);
      }, animationDuration);

      return () => clearTimeout(timer);
    }
  }, [dispatch, isClosing]);
  function languageSelected(language) {
    if (language === i18n.code) {
      return 0;
    }
    i18n.changeLanguage(language.code).catch((err) => console.log(err));
    setCurrentLanguage(i18n.language);
    setIsClosing(true);
  }
  function showLanguageSelector() {
    dispatch(setIsLanguageSelectorVisible(true));
  }
  return (
    <>
      <LanguageIcon
        sx={{ fontSize: iconSize, cursor: "pointer" }}
        onClick={showLanguageSelector}
      />{" "}
      {visible && (
        <div
          className={`languageselector ${
            isClosing && "languageselector-closing"
          }`}>
          <div className="languageselector-grid">
            {languages.map((language) => (
              <div key={language.code}>
                <div
                  onClick={() => {
                    languageSelected(language);
                  }}
                  disabled={currentLanguage === language.code && true}
                  className={`languageselector-language ${
                    currentLanguage === language.code
                      ? "languageselector-language-selected"
                      : ""
                  }`}>
                  {language.lang}
                </div>
              </div>
            ))}
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
    </>
  );
}

export default LanguageSelector;
