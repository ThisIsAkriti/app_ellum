import { createSlice } from "@reduxjs/toolkit";

interface SidebarState{
    isMenuOpen:boolean;
}
const initialState : SidebarState = {
    isMenuOpen:false,
}
const sidebarToggleSlice = createSlice({
    name : 'sidebarToggle',
    initialState,
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