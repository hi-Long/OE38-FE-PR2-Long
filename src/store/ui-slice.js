import { createSlice } from "@reduxjs/toolkit"
import capitalizeFirstLetter from "../helpers/capitalizedFirstLetter"

const initialState = {
    categoryDrawerShowing: false,
    searchDrawerShowing: false
}

// CREATE REDUCER FUNCTIONS FROM INITIAL STATE TO AVOID CODE DUPLICATION
const reducerFunctionsCreator = initialState => {
    const reducersObj = {}
    // With each state properties, create 2 functions: set and toggle
    Object.keys(initialState).forEach(prop => {
        const capitalizedProp = capitalizeFirstLetter(prop)
        reducersObj[`set${capitalizedProp}`] = (state, action) => {
            state[prop] = action.payload
        }
        reducersObj[`toggle${capitalizedProp}`] = (state, action) => {
            state[prop] = action.payload
        }
    })
    return reducersObj
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: reducerFunctionsCreator(initialState)
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer
