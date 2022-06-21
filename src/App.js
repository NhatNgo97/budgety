import logo from "./logo.svg";
import "./App.css";
import Top from "./components/top";
import AddItem from "./components/addItem";
import Item from "./components/item";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { itemsSelector } from "./redux/selectors";

// const isMouted = false
function App() {
  const isMounted = useRef(false);
  const [items, setItems] = useState([]);

  const reduxItems = useSelector(itemsSelector);
  console.log(reduxItems);

  useEffect(() => {
    let initItemsFromStorage = JSON.parse(localStorage.getItem("items")) || [];
    setItems(initItemsFromStorage);
  }, []);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  var totalIncome = 0;
  var totalExpenses = 0;
  items.forEach((element) => {
    if (element.type === "income") {
      totalIncome += element.amount;
    }
    if (element.type === "expenses") {
      totalExpenses += element.amount;
    }
  });

  function handleAddItem(selectOption, description, amount) {
    setItems([
      ...items,
      {
        id: uuidv4(),
        description: description,
        type: selectOption,
        amount: parseInt(amount),
      },
    ]);
  }

  function handleCancelClick(id) {
    const newItems = [...items];
    setItems(newItems.filter((e) => e.id !== id));
  }
  return (
    <div className="App">
      <Top income={totalIncome} expenses={totalExpenses} />
      <div className="bottom">
        <AddItem onAddItem={handleAddItem} />
        <div className="container clearfix">
          <div className="income">
            <h2 className="icome__title">Income</h2>
            <div className="income__list">
              {reduxItems
                .filter((e) => e.type === "income")
                .map((item) => (
                  <Item
                    key={item.id}
                    type={item.type}
                    description={item.description}
                    amount={item.amount}
                    percentage={(item.amount * 100) / totalIncome}
                    onCancelClick={() => handleCancelClick(item.id)}
                  />
                ))}
            </div>
          </div>
          <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>

            <div className="expenses__list">
              {reduxItems
                .filter((e) => e.type === "expenses")
                .map((item) => (
                  <Item
                    key={item.id}
                    type={item.type}
                    description={item.description}
                    amount={item.amount}
                    percentage={(item.amount * 100) / totalIncome}
                    onCancelClick={() => handleCancelClick(item.id)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
