import counterReducer from "./reducers-counter/reducerCount";

import { createStore } from "redux";

const store = createStore(counterReducer);

export default store;
