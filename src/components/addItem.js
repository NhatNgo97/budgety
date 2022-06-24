import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemAction } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddItem() {
  const dispatch = useDispatch();
  const [selectOption, setSelectOption] = useState("income");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());

  function handleClick() {
    console.log(date);
    dispatch(
      addItemAction({
        id: uuidv4(),
        type: selectOption,
        description: description,
        amount: amount,
        date: date,
      })
    );
    setDescription("");
    setAmount(0);
  }

  return (
    <div className="add">
      <div
        className="add__container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <select
          onChange={(a) => setSelectOption(a.target.value)}
          value={selectOption}
          name="type"
          className="add__type red-focus"
        >
          <option value="income">+</option>
          <option value="expenses">-</option>
        </select>
        <input
          value={description}
          onChange={(a) => setDescription(a.target.value)}
          type="text"
          className="add__description red-focus"
          placeholder="Add description"
        />
        <input
          value={amount}
          onChange={(a) => setAmount(a.target.value)}
          type="number"
          className="add__value red-focus"
          placeholder="Value"
        />
        <div>
          <DatePicker
            selected={date}
            onChange={(d) => setDate(d)}
            placeholderText="Date"
            className="add__description  "
          />
        </div>

        <button onClick={handleClick} className="add__btn red">
          <i className="ion-ios-checkmark-outline"></i>
        </button>
      </div>
    </div>
  );
}
