import { createContext, useContext } from "react";

export enum Locale {
  EN = "en",
  LT = "lt",
}

type LocaleContext = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export const LocaleContext = createContext<LocaleContext>({
  locale: Locale.EN,
  setLocale: (_locale: Locale) => {},
});

export const useLocaleContext = () => useContext(LocaleContext);
