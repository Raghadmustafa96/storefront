const initialState = {
  cart: [],
  cartNo:[],
  visible: false
}

export default function cartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      // console.log(payload.inventoryCount)
      console.log('state.cart', state);
      console.log('payload', payload)

      if (!state.cart.includes(payload)) {
        return { ...state,cartNo: [...state.cartNo, payload], cart: [...state.cart, payload], inventoryCount: payload.inventoryCount-- };
      } 
      else {
        return { ...state,cartNo: [...state.cartNo, payload], cart: [...state.cart], inventoryCount: payload.inventoryCount-- };
      }

    default:
      return state;
  }
}

export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}
