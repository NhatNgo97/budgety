import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancer = composeWithDevTools();

const store = createStore(rootReducer, composeEnhancer);

export default store;
