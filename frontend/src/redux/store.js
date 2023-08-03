import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/productReducer';
import UserReducer from './slice/UserReducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    user: UserReducer,
  },
});


export default store;