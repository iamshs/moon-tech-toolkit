import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    products : []
}

const getProducts = createAsyncThunk("products/getProducts", async () =>{
    
})

const productSlice = createSlice({
    name : "products" ,
    initialState,
    extraReducers : {}
})

export default productSlice.reducer