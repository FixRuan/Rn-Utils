import * as i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import pt from "./pt.json";

const i18 = i18next.use(initReactI18next);

i18.init({
  compatibilityJSON: "v3",
  lng: "en",
  resources: {
    en: en,
    pt: pt
  },
  react: {
    useSuspense: false,
  },
  interpolation:{
    escapeValue: false,
  }
});


export default i18;
