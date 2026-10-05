import { configureStore } from "@reduxjs/toolkit"
import  searchSLice  from "./features/searchSlice"
import  collectionSlice  from "./features/collectionSlice"

export const store= configureStore({
    reducer:{
    search :searchSLice,
    collection:collectionSlice,
    },
})