import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getCovid =createAsyncThunk("covid/getCovid",async(data)=>{
    const url = `https://covid-19.dataflowkit.com/v1/${data}`;
     const res =await axios.get(url) 
     return res.data
    

})
export const getCountry =createAsyncThunk("country/getCountry",async()=>{
    const url = `https://covid-19.dataflowkit.com/v1`;
     const res =await axios.get(url) 
     return res.data
    

})
export const covidSlice =createSlice({
    name:"covid",
    initialState:{
        covid:[],
        country:[],
    },
    extraReducers:{
        [getCovid.fulfilled]:(state,action)=>{
          
         state.covid=action.payload
        
     
        },
        [getCountry.fulfilled]:(state,action)=>{
          
            state.country=action.payload
           
        
           }
  }
})


export default covidSlice.reducer