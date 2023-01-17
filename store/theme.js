import { createSlice } from "@reduxjs/toolkit";

let initialState = []

export const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers :{
        theme(){
            console.log("ok fine")
        }
    }
})

export const {theme} = themeSlice.actions
export default themeSlice.reducer
