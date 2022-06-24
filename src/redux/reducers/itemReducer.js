const initState = JSON.parse(localStorage.getItem("items")) || [];
const itemsReducer = (state = initState, action) => {
  switch (action.type) {
    case "items/addItem":
      var newState = [...state, action.payload];
      localStorage.setItem("items", JSON.stringify(newState));
      return newState;
    case "items/deleteItem":
      newState = [...state].filter((e) => e.id !== action.payload);
      localStorage.setItem("items", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export default itemsReducer;
