import { createContext, useContext } from "react";

export enum Locale {
  EN = "en",
  LT = "lt",
}

export const isLocale = (value: string): value is Locale =>
  Object.values<string>(Locale).includes(value);

type LocaleContext = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export const LocaleContext = createContext<LocaleContext>({
  locale: Locale.EN,
  setLocale: (_locale: Locale) => {},
});

export const useLocaleContext = () => useContext(LocaleContext);
