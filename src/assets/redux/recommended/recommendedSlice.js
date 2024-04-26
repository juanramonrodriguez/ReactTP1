import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../Component/Data/Products";

const INITAL_STATE ={
    recommended: Array(3)
    .fill(0)
    .reduce((acc)=>{
        const IDs = acc.map((value)=> value.id)
        let newRecommended;
        do{
            newRecommended={
                ...Products[Math.floor(Math.random()*Products.length)],
            };
        }while (IDs.includes(newRecommended.id));
        return[...acc,newRecommended]
    },[])
};

export const recommendedSlice = createSlice({
    name: "recommended",
    initialState: INITAL_STATE,
    reducers:{
        randomRecommended: (state)=>{
            return state;
        },
    },
});

export const {randomRecommended}= recommendedSlice.actions;
export default recommendedSlice.reducer;

