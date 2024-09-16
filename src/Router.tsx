import { FormattedMessage } from "react-intl";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Locale, useLocaleContext } from "./localeContext/localeContext";

export const Router = () => {
  const { locale, setLocale } = useLocaleContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <FormattedMessage id="general.hello" />
          <button
            className="block bg-green-800"
            onClick={() =>
              setLocale(locale === Locale.EN ? Locale.LT : Locale.EN)
            }
          >
            {"en <-> lt"}
          </button>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
