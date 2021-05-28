import axios from 'axios';

const initialState = {
  productList: [],
  count: 0,
  activeProduct: []
}

export default function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOAD_PRODUCTS":
      return {
        count: payload.count,
        productList: payload.results,
      }
    case 'ACTIVE':
      const products = getProducts(payload.category, state);
      let p1 = products.map(product => {
        product.count = product.inStock
        return product;
    })
      return { ...state, activeProduct: p1 };
    default:
      return state;
  }
}

export function getProducts(category, state) {
  const products = state.productList;
  const filteredProducts = products.filter(product => product.category === category);
  console.log('filteredProducts', filteredProducts)
  return filteredProducts;
}

export const loadProducts = () => (dispatch, getState) => {
  return axios.get('https://api-js401.herokuapp.com/api/v1/products')
    .then(res => {
      dispatch({
        type: 'LOAD_PRODUCTS',
        payload: res.data
      });
    });
}