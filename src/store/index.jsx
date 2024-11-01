import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./PostSlice";
import cocktailReducer from './todoSlice'

export const store = configureStore({
    reducer : {
        PostReducer, cocktailReducer
    },

}) 