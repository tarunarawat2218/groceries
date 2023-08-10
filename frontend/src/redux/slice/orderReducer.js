import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiService from '../../service/apiService';


export const fetchOrders = createAsyncThunk('order/fetchOrders', async () => {
    return await ApiService.getOrders(); 
});

const initialState = {
    orders: [],
    loading: false,
    error: null,
};

const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.orders = action.payload; 
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default orderSlice.reducer;
