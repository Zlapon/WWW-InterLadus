// The way language data is stored and written is with nested objects with the order of:
//                                         1/Page: thepage of the writing
//                                         2/Feature: the feature in which the writing resides
//                                         3/Inside feature: and the specific child component
// If the text is not specific to a single page we can skip page and put it immediatly as feature.
// This text data should be ordered as a degruaduation from the most general part to most specific feature.
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enLang from "../data/locales/en/translation.json";
import frLang from "../data/locales/fr/translation.json";
import deLang from "../data/locales/de/translation.json";
import arLang from "../data/locales/ar/translation.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: { translation: enLang },
      fr: { translation: frLang },
      ar: { translation: arLang },
      de: { translation: deLang },
    },
  })
  .catch((err) => console.log(err));
