
import counterReducer from "../counter/reducers-counter/reducerCount";
import sumReducer from "../website-shop/reducer/reducer";
import { createStore, combineReducers } from "redux";
const rootReducer = combineReducers({
  sum: sumReducer,
  counter: counterReducer,
});

const store = createStore(rootReducer);

export default store;
