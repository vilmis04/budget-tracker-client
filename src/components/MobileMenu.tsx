import { ChangeEvent, useState, useEffect } from "react";
import { BurgerBars2 } from "../assets/icons/BurgerBars2";
import { FormattedMessage } from "react-intl";
import {
  isLocale,
  Locale,
  useLocaleContext,
} from "../localeContext/localeContext";
import { Plus } from "../assets/icons/Plus";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale } = useLocaleContext();

  const toggleMenu = () => setIsOpen((isMenuOpen) => !isMenuOpen);
  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (isLocale(value)) {
      setLocale(value);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key.toLowerCase() === "escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (event) => handleKeyDown(event));

    return window.removeEventListener("keydown", (event) =>
      handleKeyDown(event)
    );
  }, []);

  return (
    <div>
      <button
        aria-label="mobile menu"
        aria-controls="mobile-menu"
        className="z-appBar fixed top-0 right-0 p-2"
        onClick={toggleMenu}
      >
        <BurgerBars2 />
      </button>
      {isOpen && (
        <div
          id="mobile-menu"
          aria-expanded={isOpen}
          className={`z-drawer bg-app-color-background-50 relative h-screen p-8 top-0 ${
            isOpen ? "w-screen" : "w-0"
          }`}
        >
          <button className="rotate-45 text-right" onClick={toggleMenu}>
            <Plus />
          </button>
          <label className="flex flex-col w-full ">
            <FormattedMessage id="general.language" />
            <select value={locale} onChange={handleLocaleChange}>
              <option value={Locale.LT}>LT</option>
              <option value={Locale.EN}>EN</option>
            </select>
          </label>
        </div>
      )}
    </div>
  );
};
