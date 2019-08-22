import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

import vi from "./vi.json";
const resources = {
  vi
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vi",
    fallbackLng: "vi", 
    debug: true,

    // have a common namespace used around the full app
    ns: ["global"],
    defaultNS: "global",
  
    keySeparator: false, // we use content as keys
  
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ","
    },
  
    react: {
      wait: true
    }  
  });

  export default i18n;