import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { searchItemAction, orderItemAction } from "../redux/actions";

export default function Filter() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("default");

  useEffect(() => {
    dispatch(searchItemAction(search));
  }, [search]);

  useEffect(() => {
    dispatch(orderItemAction(order));
  }, [order]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        margin: "1em 15vw -2em auto",
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
          onChange={(e) => setSearch(e.target.value)}
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
