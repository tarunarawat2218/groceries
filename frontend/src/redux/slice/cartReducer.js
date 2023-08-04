import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '../../service/apiService';


export const fetchCartItems = createAsyncThunk('cart/fetchItems', async () => {
  const cartItems = await ApiService.getCartItems(); 
  return cartItems;
});

const initialState = {
  items: [],
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
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store the error message for display in the component
      });
  },
});

export default cartSlice.reducer;
