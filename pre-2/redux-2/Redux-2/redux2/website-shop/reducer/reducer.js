import { ADDTOCARD } from "../actions/action";
import { products } from "../data-product";
const initialState = {
  allProducts: products,
  cart: [],
  totalPrice: 0,
};

const sumReducer = (state = initialState, action) => {
   switch (action.type) {
     case ADDTOCARD:
       const newCard = [...state.cart, action.payload];
       let newTotalPrice = 0;
       newCard.forEach((item) => {
         newTotalPrice += parseFloat(item.price);
       });
       return { ...state, cart: newCard, totalPrice: newTotalPrice };

     default:
       return state;
   }
}; 


export default sumReducer;