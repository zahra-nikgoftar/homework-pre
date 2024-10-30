import { ADDTOCARD } from "./action";



 const addToCart = (product) => {
   return {
     type: ADDTOCARD,
     payload: product,
   };
 };

export default addToCart;