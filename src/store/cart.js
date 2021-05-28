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
        return { ...state, cartNo: [...state.cartNo, payload], cart: [...state.cart, payload], inStock: payload.inStock-- };
      } 
      else {
        return { ...state,cartNo: [...state.cartNo, payload],  cart: [...state.cart], inStock: payload.inStock-- };
      }

      case 'REMOVE_FROM_CART':
        const cart = [...state.cart];
        const cartNo = [...state.cartNo];

        let deleteOne = true;
        const newCart = cart.filter((item) => {
          if (item === payload && deleteOne) {
            deleteOne = false;
            item.inStock = item.count;
            return false;
          } else { return true; }
        })

       const newCartNo = cartNo.filter((item) =>{
        if (item === payload) {
          item.inStock = item.count;
          return false;
        } else { return true; }
       });

        console.log('newCartNo' , newCartNo);
        console.log('state.cart' , state.cart);

        return { ...state, cart: [...newCart] , cartNo: [...newCartNo] };

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

export function removeFromCart(product) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  }
}