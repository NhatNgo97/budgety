import Item from "./item";
import { useSelector } from "react-redux/es/exports";
import { itemsSelector } from "../redux/selectors";

function BudgetList({ type }) {
  const reduxItems = useSelector(itemsSelector);
  var totalIncome = 0;
  reduxItems.forEach((element) => {
    if (element.type === "income") {
      totalIncome += parseInt(element.amount);
    }
  });

  return (
    <div className={type + "__list"}>
      {reduxItems
        .filter((e) => e.type === type)
        .map((item) => (
          <Item
            id={item.id}
            key={item.id}
            type={item.type}
            description={item.description}
            amount={item.amount}
            date={item.date}
            percentage={(item.amount * 100) / totalIncome}
          />
        ))}
    </div>
  );
}

export default BudgetList;
