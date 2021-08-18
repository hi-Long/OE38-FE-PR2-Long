import { createSlice } from "@reduxjs/toolkit"
import { searchProductsByName } from "./search-action"

const initialState = {
    name: "",
    searchResults: [],
    noResults: 0
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        resetResults: (state, action) => {
            state.searchResults = []
            state.noResults = 0
        }
    },
    extraReducers: {
        [searchProductsByName.fulfilled]: (state, action) => {
            state.searchResults = action.payload.searchResults
            state.noResults = action.payload.noResults
        }
    }
})

export const searchActions = searchSlice.actions
export default searchSlice.reducer
