import { useSelector } from "react-redux/es/exports";
import { itemsSelector } from "../redux/selectors";
import { VndCurrencyConverter } from "../helper/VndCurrencyConverter";

export default function Top() {
  const reduxItems = useSelector(itemsSelector);

  var totalIncome = 0;
  var totalExpenses = 0;
  reduxItems.forEach((element) => {
    if (element.type === "income") {
      totalIncome += parseInt(element.amount);
    }
    if (element.type === "expenses") {
      totalExpenses += parseInt(element.amount);
    }
  });
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
