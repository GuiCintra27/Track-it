import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_en from "./translations/en.json";
import global_pt from "./translations/pt.json";

i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      fallbackLng: "en",
      lng: "pt",
      preload: ["en"],
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      resources: {
        en: global_en,
        pt: global_pt,
      },
    });

export default i18n;

