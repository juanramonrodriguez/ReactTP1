import { createSlice } from "@reduxjs/toolkit"
import { categorias } from "../../Component/Data/categorias";

const INITAL_STATE ={
    categorias: categorias,
    selectedCategory: null
}
export const categoriesSlice = createSlice({
    name: "categories",
    initialState: INITAL_STATE,
    reducers: {
      selectCategory: (state, action) => {
        return {
          ...state,
          selectedCategory:
            action.payload !== state.selectedCategory ? action.payload : null,
        };
      },
      categories: (state) => {
        return state;
      },
    },
  });
export const {categories, selectCategory}= categoriesSlice.actions;
export default categoriesSlice.reducer;


