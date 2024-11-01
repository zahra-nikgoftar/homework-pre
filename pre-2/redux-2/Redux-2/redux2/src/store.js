
import counterReducer from "../counter/reducers-counter/reducerCount";
import sumReducer from "../website-shop/reducer/reducer";
import { createStore } from "redux";

const store = createStore(sumReducer, counterReducer);

export default store;
