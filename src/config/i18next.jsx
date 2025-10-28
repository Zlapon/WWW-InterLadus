import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enLang from "../data/languages/enLang.json";
import frLang from "../data/languages/frLang.json";
import deLang from "../data/languages/deLang.json";
import arLang from "../data/languages/arLang.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: { enLang },
      fr: { frLang },
      ar: { arLang },
      de: { deLang },
    },
  });
