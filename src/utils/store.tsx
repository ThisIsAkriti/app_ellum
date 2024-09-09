import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarToggleSlice"
const store = configureStore({
    reducer:{
        sidebarToggle: sidebarReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;