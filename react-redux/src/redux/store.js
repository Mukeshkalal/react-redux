import { configureStore } from "@reduxjs/toolkit";
import { countEdit } from "./reducer";

export default configureStore({
    reducer: {
        cut: countEdit,
    }
})