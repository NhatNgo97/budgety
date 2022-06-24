import Item from "./item";

import useBudgetData from "../hooks/useBudgetData";

function BudgetList({ type }) {
  const { totalIncome, remainingItems } = useBudgetData();

  return (
    <div className={type + "__list"}>
      {remainingItems
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
