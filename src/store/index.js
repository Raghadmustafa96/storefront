import { createStore, combineReducers ,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import category from './categories.js';
import product from './products.js';
import cartReducer from './cart.js';
import thunk from 'redux-thunk';

const reducers = combineReducers({ categories: category, products: product , cart: cartReducer });

const store = () => {
  return createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
}

export default store;
