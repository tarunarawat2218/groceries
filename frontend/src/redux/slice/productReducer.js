import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from  '../../service/apiService'

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const products = await ApiService.getProducts();
  return products;
});
export const searchProducts = createAsyncThunk('products/search', async (query) => {
  return await ApiService.searchProducts(query);
});
const initialState={
    items: [],
    loading: false,
    error: null,
  }
const productSlice = createSlice({
  name: 'products',
  initialState:initialState,
  reducers: {
    clearSearchResults: (state) => {
    state.searchResults = [];
  },},
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
        state.error = action.error.message; 
      })
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.searchResults = action.payload.data;
        state.loading = false;
        state.error = null;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSearchResults } = productSlice.actions;

export default productSlice.reducer;
