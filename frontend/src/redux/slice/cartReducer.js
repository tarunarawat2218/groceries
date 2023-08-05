import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import ApiService from '../../service/apiService';


export const fetchCartItems = createAsyncThunk('cart/fetchItems', async () => {
    return await ApiService.getCartItems();
});
export const addToCartCall = createAsyncThunk('cart/addToCart', async ({productId, quantity}) => {
    return await ApiService.updateCart(productId, quantity);
});
export const placeOrder = createAsyncThunk('order/placeOrder', async ({items,total}) => {
    return await ApiService.updateCart(items,total);
});

const initialState = {
    items: [],
    total: 0,
    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.items = action.payload.items;
                state.total = action.payload.total;
                state.loading = false;
                state.error = null;
                console.log("fetchCartItems")
                console.log(action.payload)
            })
            .addCase(fetchCartItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; 
            })
            
            .addCase(placeOrder.fulfilled, (initialState, action) => {
                initialState.items = action.payload.items;
                initialState.total = action.payload.total;
              initialState.loading = false;
                initialState.error = null;
            })

            
    },
});

export default cartSlice.reducer;
