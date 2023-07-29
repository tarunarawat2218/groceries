import {configureStore} from '@reduxjs/toolkit';
import cartReducer  from './slice/cartSlice';
import Header from '../components/organisms/Header'

export const store = configureStore({
    reducer: {
    Header: cartReducer
    }
})