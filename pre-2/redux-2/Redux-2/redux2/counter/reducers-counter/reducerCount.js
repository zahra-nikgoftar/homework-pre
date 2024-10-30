import { INCREMENT, DECREMENT, RESET } from '../actions-counter/action.counter';


const initialState = {
  count: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };

    case RESET:
      return {
        count: 0 ,
      };

    default:
      return state;
  }
};
export default counterReducer;