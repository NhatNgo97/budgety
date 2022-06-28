import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  itemsSelector,
  orderFilterSelector,
  remainingSelector,
  searchFilterSelector,
} from "../redux/selectors";

export default function useBudgetData() {
  const listItems = useSelector(itemsSelector);
  const search = useSelector(searchFilterSelector);
  const order = useSelector(orderFilterSelector);

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

  const searchItems = useMemo(() => {
    return listItems.filter((item) => item.description.includes(search));
  }, [search, listItems]);

  const remainingItems = useMemo(() => {
    if (order === "ascending") {
      return searchItems.sort((a, b) => a.amount - b.amount);
    }
    if (order === "descending") {
      return searchItems.sort((a, b) => -a.amount - b.amount);
    }
    return searchItems;
  }, [searchItems, order]);
  return {
    listItems,
    totalIncome,
    totalExpenses,
    remainingItems,
  };
}
