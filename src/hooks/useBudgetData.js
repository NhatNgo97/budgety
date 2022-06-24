import { useSelector } from "react-redux";
import { itemsSelector } from "../redux/selectors";

export default function useBudgetData() {
  const listItems = useSelector(itemsSelector);

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
  };
}
