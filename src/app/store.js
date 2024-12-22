import { configureStore } from "@reduxjs/toolkit";
import  AllcountrySlice  from "./features/country/countrySlice";



export const store = configureStore({
    reducer:{
        country:AllcountrySlice,
    },
})