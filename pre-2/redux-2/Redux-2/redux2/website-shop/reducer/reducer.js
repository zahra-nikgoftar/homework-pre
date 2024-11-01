import { ADDTOCARD } from "../actions/action";

const initialState = {
  products: [
    {
      type: "Plants",
      name: "Boncellensis Secullant",
      stars: 3,
      price: 34.0,
      offPrice: undefined,
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant3-free-img.jpg",
    },
    {
      type: "Cactus",
      name: "Cleistocactus",
      stars: 2,
      price: 28.0,
      offPrice: 25.0,
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg",
    },
    {
      type: "Plants",
      name: "Green Soil Lotus",
      stars: 4,
      price: 54.5,
      offPrice: 34.0,
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant5-free-img.jpg",
    },
    {
      type: "Plants",
      name: "Money Plant",
      stars: 5,
      price: 23.0,
      offPrice: 20.0,
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant1-free-img.jpg",
    },
    {
      type: "Plants",
      name: "Old Lady Cactus",
      stars: 3,
      price: 15.0,
      offPrice: 12.0,
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus4-free-img.jpg",
    },
    {
      type: "Plants",
      name: "Piorro Quisquam",
      stars: 3,
      price: 32.0,
      offPrice: undefined,
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant4-free-img.jpg",
    },
    {
      type: "Plants",
      name: "Rattle Snake Tail",
      stars: 1,
      price: 45.0,
      offPrice: undefined,
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant6-free-img.jpg",
    },
    {
      type: "Cactus",
      name: "Star Cacuts",
      stars: 2,
      price: 34.0,
      offPrice: 32.0,
      src: "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus6-free-img.jpg",
    },
  ],

  cart: {
    items: [],
    total: 0,
  },
};  

const sumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOCARD":
      const updatedCartItems = [...state.cart.items, action.payload];
      const updatedTotal = updatedCartItems.reduce(
        (total, product) =>
          total + (product.offPrice ? product.offPrice : product.price),
        0
      );
      return {
        ...state,
        cart: {
          items: updatedCartItems,
          total: updatedTotal,
        },
      };
    default:
      return state;
  }
};

export default sumReducer;