const initState = {
  search: "",
  order: "",
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchItem":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/setItemOrder":
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
