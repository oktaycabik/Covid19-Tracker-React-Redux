import { configureStore  } from "@reduxjs/toolkit";
import  covidSlice  from "./covid19/covid19Slice";

export const store =configureStore({
    reducer:{
      covid:covidSlice
    },
    
      
    
    
})