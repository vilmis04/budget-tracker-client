import { FormattedNumber } from "react-intl";

interface CurrencyProps {
  sum: number;
}

export const Currency = ({ sum }: CurrencyProps) => (
  <FormattedNumber value={sum} currency="EUR" style="currency" />
);
