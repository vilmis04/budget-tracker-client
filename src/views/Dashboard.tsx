import { FormattedMessage } from "react-intl";
import { Currency } from "../components/Currency";

export const Dashboard = () => {
  const income = 1234;
  const expenses = 1023;
  const balance = income - expenses;

  return (
    <div>
      <h1>
        <FormattedMessage id="dashboard.overview" />
      </h1>
      <div>
        <div>
          <FormattedMessage id="dashboard.balance" />
          <span>
            <Currency sum={balance} />
          </span>
        </div>
        <div>
          <FormattedMessage id="dashboard.income" />
          <span>
            <Currency sum={income} />
          </span>
        </div>
        <div>
          <FormattedMessage id="dashboard.expenses" />
          <span>
            <Currency sum={expenses} />
          </span>
        </div>
      </div>
    </div>
  );
};
