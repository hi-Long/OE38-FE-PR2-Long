import { createSlice } from '@reduxjs/toolkit'
import { fetchConcepts } from './product-action'

const initialState = {
    concepts: [],
    products: [],
    error: ''
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        createConcept: (state, action) => {
            state.concepts.push(action.payload)
        }
    },
    extraReducers: {
        [fetchConcepts.fulfilled]: (state, action) => {
            state.concepts = action.payload.categories
        }
    }
})

export const productActions = productSlice.actions
export default productSlice.reducer
