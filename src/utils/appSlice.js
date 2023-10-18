import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isNavbarOpen: true,
        isSearchbarOpen: true, 
        
    },
    reducers: {
        toggleNavbar: (state) => {
            state.isNavbarOpen = !state.isNavbarOpen;
        },
        toggleSearchbar: (state) => {
            state.isSearchbarOpen = !state.isSearchbarOpen;
        },
    },
});

export const { toggleNavbar, toggleSearchbar } = appSlice.actions;
export default appSlice.reducer;
