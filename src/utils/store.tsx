import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarToggleSlice"
const store = configureStore({
    reducer:{
        sidebarToggle: sidebarReducer,
    },
})
export default store;