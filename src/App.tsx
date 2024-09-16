import { useState } from "react";
import { IntlProvider } from "react-intl";
import { Router } from "./Router";
import { Locale, LocaleContext } from "./localeContext/localeContext";
import { en, lt } from "./translations";

export const App = () => {
  const [locale, setLocale] = useState<Locale>(Locale.EN);
  const messages = {
    [Locale.EN]: en,
    [Locale.LT]: lt,
  }[locale];

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages}>
        <Router />
      </IntlProvider>
    </LocaleContext.Provider>
  );
};
