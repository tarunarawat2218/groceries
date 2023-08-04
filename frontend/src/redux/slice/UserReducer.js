// authSlice.js
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import ApiService from '../../service/apiService'


export const fetchUser = (email, password) => createAsyncThunk('user/fetch', async () => {
    const users = await ApiService.loginUser(email, password);
    return users;
});


const initialState = {
    isLoggedIn: false,
    token: null,
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
                state.token = action.payload;
                state.error = null;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = false;
                state.token = null;
                state.error = "login error";
                console.log("error login")
            });
    },
});


export default userSlice.reducer;
