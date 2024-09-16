import { FormattedMessage } from "react-intl";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Locale, useLocaleContext } from "./localeContext/localeContext";
import { Layout } from "./components/Layout";

export const Router = () => {
  const { locale, setLocale } = useLocaleContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <div>
              <FormattedMessage id="general.hello" />
              <button
                className="block bg-app-color-danger"
                onClick={() =>
                  setLocale(locale === Locale.EN ? Locale.LT : Locale.EN)
                }
              >
                {"en <-> lt"}
              </button>
            </div>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
