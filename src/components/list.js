import Item from "./item";
import { useSelector } from "react-redux/es/exports";
import { itemsSelector } from "../redux/selectors";

function List({ type }) {
  const reduxItems = useSelector(itemsSelector);
  console.log(reduxItems);
  var totalIncome = 0;
  reduxItems.forEach((element) => {
    console.log(element);
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
            percentage={(item.amount * 100) / totalIncome}
          />
        ))}
    </div>
  );
}

export default List;
