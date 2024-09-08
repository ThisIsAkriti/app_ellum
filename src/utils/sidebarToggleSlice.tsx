import { createSlice } from "@reduxjs/toolkit";

const sidebarToggleSlice = createSlice({
    name : 'sidebarToggle',
    initialState : {
        isMenuOpen:false,
    },
    reducers:{
        toggleMenu:(state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state) => {
            state.isMenuOpen = false;
        }
    }
})
export const { toggleMenu ,  closeMenu} = sidebarToggleSlice.actions;
export default sidebarToggleSlice.reducer;