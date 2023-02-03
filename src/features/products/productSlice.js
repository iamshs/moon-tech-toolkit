import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts, postProducts } from "./productsApi";

const initialState = {
  products: [],
  isLoading: false,
  postSuccess : false ,
  isError: false,
  error: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const products = fetchProducts();

    return products;
  }
);
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (data) => {
    const products = postProducts(data);

    return products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers :{
    togglePostSuccess : (state) =>{
     state.postSuccess = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false ;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.products = [];
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true ;
        state.postSuccess = false ;
        state.isError = false ;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false ;
        state.postSuccess = true ;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.products = [];
        state.isError = true;
        state.postSuccess = false ;
        state.error = action.error.message;
      });
  },
});
export const {togglePostSuccess} = productSlice.actions
export default productSlice.reducer;
