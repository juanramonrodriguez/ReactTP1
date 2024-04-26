import { createSlice } from "@reduxjs/toolkit";
import {Products, TotalProducts} from "../../Component/Data/Products"

const INITAL_STATE ={
    products: Products, 
    totalProducts: TotalProducts
}

export const productsSlice = createSlice({
    name: "products",
    initialState: INITAL_STATE,
    reducers:{
        getProducts:sate=>{
            return sate
        }
    }
}); 

export const {getProducts}= productsSlice.actions;
export default productsSlice.reducer;