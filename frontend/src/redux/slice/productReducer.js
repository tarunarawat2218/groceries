import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from  '../../service/apiService'

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const products = await ApiService.getProducts();
  return products;
});
const initialState={
    items: [],
    loading: false,
    error: null,
  }
const productSlice = createSlice({
  name: 'products',
  initialState:initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload.data;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store the error message for display in the component
      });
  },
});

export default productSlice.reducer;
