import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import english from "./english.json";
import swedish from "./swedish.json";

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  resources: {
    en: english,
    sw: swedish,
  },

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
});

export default i18next;
