import { combineReducers } from "redux";

import filtersReducer from "./filtersReducer";
import itemsReducer from "./itemReducer";

const rootReducer = combineReducers({
  filters: filtersReducer,
  items: itemsReducer,
});

export default rootReducer;
