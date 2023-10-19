import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
        searchInput:"hello"
    },
    reducers:{
        searchValue:(state,action)=>{
            state.searchInput=action.payload
        }
    }
})

export const {searchValue}=searchSlice.actions
export default searchSlice.reducer