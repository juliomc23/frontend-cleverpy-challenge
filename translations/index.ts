import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, es } from "./languajes";
import { extractObjectPath } from "./utils";

const DEFAULT_LANGUAGE = "es";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

export const tkeys = extractObjectPath({ ...es });
