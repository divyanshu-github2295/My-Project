import { createSlice } from "@reduxjs/toolkit";


const ThemeSlice = createSlice({
    name:"theme",
    initialState:{
        mode:"light",

    },
    reducers:{
        themeSwitch:(state, action) => {
            state.mode = action.payload
        }
    }
})

//Actions
export const { themeSwitch } = ThemeSlice.actions

//Reducer
export const ThemeReducer = ThemeSlice.reducer

