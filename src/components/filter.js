import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchItemAction } from "../redux/actions";

export default function Filter() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("default");

  function handleSearch() {
    setSearch(search);
    dispatch(searchItemAction(search));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        margin: "1em 15em -2em 15em",
      }}
      className="filter__container"
    >
      <div className="filter__search">
        <input
          style={{
            height: "2rem",
            width: "15vw",
          }}
          value={search}
          onChange={handleSearch}
          className="add__description red-focus"
          placeholder="Search"
        />
      </div>
      <div className="filter__sort">
        <select
          onChange={(a) => setOrder(a.target.value)}
          value={order}
          name="type"
          style={{
            width: "auto",
            borderRadius: "7px",
            height: "2rem",
          }}
          className="add__type red-focus"
        >
          <option value="default">default</option>
          <option value="ascending">low to high</option>
          <option value="descending">high to low</option>
        </select>
      </div>
    </div>
  );
}
