import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from "./translationEN/index.json";
import translationUA from "./translationUA/index.json";
import translationPL from "./translationPL/index.json";

const resources = {
    en: { translation: translationEN },
    pl: { translation: translationPL },
    ua: { translation: translationUA }
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: "en",
    });

export default i18n;