import { configureStore } from "@reduxjs/toolkit";
import { formApi } from "./formApi";


const reduxStore = configureStore({
    reducer: {
        [formApi.reducerPath]: formApi.reducer,
    },
    // store file
    middleware: def => def().concat(formApi.middleware)
})

export default reduxStore