import {
  ADD_PRODUCT,
  ADD_TO_CART,
  EDIT_PRODUCT,
  LOAD_PRODUCT,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
  products: [],
  product: {}
};

const productReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product.id === action.payload.id
  );

  switch (action.type) {
    case LOAD_PRODUCT: 
      return {
        ...state,
        products: action.payload
      }
    case EDIT_PRODUCT:
      return {
        ...state,
        product : action.payload
      }
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product.id !== selectedProduct.id
        );

        selectedProduct.quantity = selectedProduct.quantity + 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product.id !== selectedProduct.id
        );
        selectedProduct.quantity = selectedProduct.quantity - 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
