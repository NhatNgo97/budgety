import logo from "./logo.svg";
import "./App.css";
import Top from "./components/top";
import AddItem from "./components/addItem";
import Item from "./components/item";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { itemsSelector } from "./redux/selectors";
import List from "./components/list";

// const isMouted = false
function App() {
  // const isMounted = useRef(false);
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   let initItemsFromStorage = JSON.parse(localStorage.getItem("items")) || [];
  //   setItems(initItemsFromStorage);
  // }, []);

  // useEffect(() => {
  //   if (!isMounted.current) {
  //     isMounted.current = true;
  //     return;
  //   }
  //   localStorage.setItem("items", JSON.stringify(items));
  // }, [items]);

  return (
    <div className="App">
      <Top />
      <div className="bottom">
        <AddItem />
        <div className="container clearfix">
          <div className="income">
            <h2 className="icome__title">Income</h2>
            <List type="income" />
          </div>
          <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>

            <List type="expenses" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
