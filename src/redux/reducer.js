import { v4 as uuidv4 } from "uuid";

const initState = {
  input: {
    type: "income",
    description: "",
    amount: 0,
  },
  items: [
    { id: 1, type: "income", description: "asdsdadada", amount: 123 },
    { id: 2, type: "expenses", description: "asdsdadada", amount: 456 },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "addItem":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
