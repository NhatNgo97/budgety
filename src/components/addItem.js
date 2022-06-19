import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [selectOption, setSelectOption] = useState("income");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  function handleClick() {
    onAddItem(selectOption, description, amount);
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
