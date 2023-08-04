import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/productReducer';
import userReducer from './slice/UserReducer';
import cartReducer from "./slice/cartReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
    cart: cartReducer,
  },
});


export default store;