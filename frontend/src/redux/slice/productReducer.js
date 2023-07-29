import {createSlice} from '@reduxjs/toolkit';


 const productsSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state, action)=>{
            state.push(action.payload);
        }
    }
})

export default productsSlice.reducer;