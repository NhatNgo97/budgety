import { v4 as uuidv4 } from "uuid";

const initState = JSON.parse(localStorage.getItem("items")) || {
  input: {
    type: "income",
    description: "",
    amount: 0,
  },
  items: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "addItem":
      var newState = {
        ...state,
        items: [...state.items, action.payload],
      };
      localStorage.setItem("items", JSON.stringify(newState));
      return newState;
    case "deleteItem":
      newState = {
        ...state,
        items: [...state.items].filter((e) => e.id !== action.payload),
      };
      localStorage.setItem("items", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export default rootReducer;
