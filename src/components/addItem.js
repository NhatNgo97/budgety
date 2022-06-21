import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemAction } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

export default function AddItem({ onAddItem }) {
  const dispatch = useDispatch();
  const [selectOption, setSelectOption] = useState("income");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  function handleClick() {
    onAddItem(selectOption, description, amount);
    dispatch(
      addItemAction({
        id: uuidv4(),
        type: selectOption,
        description: description,
        amount: amount,
      })
    );
    setDescription("");
    setAmount(0);
  }

  return (
    <div className="add">
      <div className="add__container">
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
        <button onClick={handleClick} className="add__btn red">
          <i className="ion-ios-checkmark-outline"></i>
        </button>
      </div>
    </div>
  );
}
