import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState ={
    list:[],
}

export const getList = createAsyncThunk('country',  async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
    return response.data
})

export const countrySlice = createSlice({
    name:'country',
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder.addCase(getList.fulfilled , (state , action )=>{
            state.list = action.payload;
          
        })
    }
})

export const { } = countrySlice.actions

export default countrySlice.reducer