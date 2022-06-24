import { VndCurrencyConverter } from "../helper/VndCurrencyConverter";
import useBudgetData from "../hooks/useBudgetData";

export default function Top() {
  const { totalIncome, totalExpenses } = useBudgetData();
  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">%Month%</span>:
        </div>

        <div className="budget__value">
          {" "}
          {VndCurrencyConverter(totalIncome - totalExpenses)}
        </div>

        <div className="budget__income clearfix">
          <div className="budget__income--text">Income</div>
          <div className="right">
            <div className="budget__income--value">
              + {VndCurrencyConverter(totalIncome)}
            </div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>

        <div className="budget__expenses clearfix">
          <div className="budget__expenses--text">Expenses</div>
          <div className="right clearfix">
            <div className="budget__expenses--value">
              - {VndCurrencyConverter(totalExpenses)}
            </div>
            <div className="budget__expenses--percentage">
              {" "}
              {parseInt((totalExpenses * 100) / totalIncome)} %
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
