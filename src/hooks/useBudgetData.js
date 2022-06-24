import { useSelector } from "react-redux";
import { itemsSelector, remainingSelector } from "../redux/selectors";

export default function useBudgetData() {
  const listItems = useSelector(itemsSelector);
  const remainingItems = useSelector(remainingSelector);

  var totalIncome = 0;
  var totalExpenses = 0;
  listItems.forEach((element) => {
    if (element.type === "income") {
      totalIncome += parseInt(element.amount);
    }
    if (element.type === "expenses") {
      totalExpenses += parseInt(element.amount);
    }
  });

  return {
    listItems,
    totalIncome,
    totalExpenses,
    remainingItems,
  };
}
