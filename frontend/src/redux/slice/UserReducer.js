// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from  '../../service/apiService'


export const fetchUser =(credential) => createAsyncThunk('user/fetch', async () => {
    const users = await ApiService.loginUser(credential);
  return users;
  });


const initialState={
    isLoggedIn: false,
    user: null,
    isLoading: false, 
    error: null,
}
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.user = action.payload;
            state.error = null;
          })
          .addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = null;
            state.error = action.payload; 
            console.log("error login")
          });
      },
  
});


export default userSlice.reducer;
